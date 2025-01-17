CREATE DATABASE mercadoJAM;
USE mercadoJAM;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO users VALUES ('adm', 'adm@gmail.com', '123', 'admin')

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NOT NULL,
    image TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX (name)
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE product_categories (
    product_id INT,
    category_id INT,
    PRIMARY KEY (product_id, category_id),
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id)
);

CREATE TABLE cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product_id INT,
    quantity INT NOT NULL,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);
DELIMITER //

CREATE PROCEDURE create_order(
    IN p_userId INT,
    IN p_totalAmount DECIMAL(10, 2),
    IN p_items JSON
)
BEGIN
    DECLARE v_orderId INT;

    -- Insere o pedido na tabela orders
    INSERT INTO orders (user_id, total_price, created_at, updated_at)
    VALUES (p_userId, p_totalAmount, NOW(), NOW());

    -- Obtém o ID do pedido recém-criado
    SET v_orderId = LAST_INSERT_ID();

    -- Insere os itens do pedido na tabela order_items
    INSERT INTO order_items (order_id, product_id, quantity, unit_price, total_price)
    SELECT 
        v_orderId, 
        product_id,
        quantity,
        unit_price,
        (quantity * unit_price) AS total_price
    FROM JSON_TABLE(
        p_items, '$[*]'
        COLUMNS (
            product_id INT PATH '$.product_id',
            quantity INT PATH '$.quantity',
            unit_price DECIMAL(10, 2) PATH '$.price'
        )
    ) AS items;

    -- Retorna o ID do pedido
    SELECT v_orderId AS orderId;
END //

DELIMITER //

CREATE PROCEDURE update_order(
    IN p_orderId INT,
    IN p_items JSON
)
BEGIN
    DECLARE v_totalAmount DECIMAL(10, 2) DEFAULT 0.00;

    -- Calcula o novo total do pedido incluindo os novos itens
    SET v_totalAmount = (
        SELECT SUM(JSON_UNQUOTE(JSON_EXTRACT(item, '$.quantity')) * JSON_UNQUOTE(JSON_EXTRACT(item, '$.unit_price')))
        FROM JSON_TABLE(p_items, '$[*]' COLUMNS (
            product_id INT PATH '$.product_id',
            quantity INT PATH '$.quantity',
            unit_price DECIMAL(10, 2) PATH '$.unit_price'
        )) AS items
    ) + (
        SELECT COALESCE(SUM(quantity * unit_price), 0)
        FROM order_items
        WHERE order_id = p_orderId
    );

    -- Atualiza o valor total do pedido na tabela `orders`
    UPDATE orders
    SET total_amount = v_totalAmount, updated_at = NOW()
    WHERE id = p_orderId;

    -- Insere os novos itens do pedido
    INSERT INTO order_items (order_id, product_id, quantity, unit_price)
    SELECT p_orderId, product_id, quantity, unit_price
    FROM JSON_TABLE(p_items, '$[*]' COLUMNS (
        product_id INT PATH '$.product_id',
        quantity INT PATH '$.quantity',
        unit_price DECIMAL(10, 2) PATH '$.unit_price'
    )) AS items;

    -- Retorna o ID do pedido atualizado
    SELECT p_orderId AS orderId;
END //

DELIMITER ;

INSERT INTO products (name, description, price, stock_quantity, image)
VALUES
    ('Arroz Branco 5kg', 'Arroz tipo 1, grãos selecionados.', 22.99, 200, 'https://propao.agilecdn.com.br/2315_1.jpg?v=27-246342608'),
    ('Feijão Carioca 1kg', 'Feijão carioca de alta qualidade.', 7.49, 150, 'https://propao.agilecdn.com.br/4491_1.jpg?v=27-246342608'),
    ('Óleo de Soja 900ml', 'Óleo de soja 100% puro.', 6.99, 300, 'https://carrefourbrfood.vtexassets.com/arquivos/ids/131582015/oleo-de-soja-liza-900ml-1.jpg?v=638319501126800000'),
    ('Açaí 1L', 'Açaí cremoso com polpa natural.', 19.90, 80, 'https://amorito.com.br/wp-content/uploads/2020/09/embalagem_acai_1L.png'),
    ('Leite Integral 1L', 'Leite integral pasteurizado.', 4.49, 250, 'https://carrefourbrfood.vtexassets.com/arquivos/ids/200592/3371689_1.jpg?v=637272446336870000'),
    ('Coca-Cola 2L', 'Refrigerante Coca-Cola muito gostoso', 7.99, 100, 'https://carrefourbrfood.vtexassets.com/arquivos/ids/118271106/refrigerante-coca-cola-garrafa-2-l-1.jpg?v=638217385053270000'),
    ('Conjunto Com 10 Esponjas Dupla Face', 'Mouse gamer para mulheres', 7.49, 100, 'https://http2.mlstatic.com/D_NQ_NP_825643-MLB51965538863_102022-O.webp'),
    ('Sabão em Pó OMO 2kg', 'Sabão em pó para lavar roupas.', 25.00, 70, 'https://http2.mlstatic.com/D_NQ_NP_944788-MLU74226380883_012024-O.webp'),
    ('Detergente Neutro 500ml', 'Detergente para louças com aroma suave.', 2.49, 200, 'https://carrefourbrfood.vtexassets.com/arquivos/ids/19677742/detergente-liquido-ype-neutro-500ml-1.jpg?v=637607441310030000'),
    ('Cerveja Skol 350ml', 'Cervejinha que desce redooondo.', 2.99, 150, 'https://carrefourbrfood.vtexassets.com/arquivos/ids/107629977/cerveja-skol-pilsen-lata-350ml-1.jpg?v=638155200023370000'),
    ('Farinha de Trigo 1kg', 'Farinha de trigo para bolos e massas.', 4.99, 100, 'https://carrefourbrfood.vtexassets.com/arquivos/ids/205423/7868901_1.jpg?v=637272457079730000'),
    ('Fone Bluetooth TWS', 'Fone Bluetooth sem fio.', 28.99, 120, 'https://http2.mlstatic.com/D_NQ_NP_2X_614461-MLB70823696395_082023-F.webp'),
    ('Carregador Portáti (Power Bank)', 'Power Bank Ultra Rápido 20000mAh 20W 2 Saídas USB + 1 Saída/Entrada USB-C Preto.', 144.49, 50, 'https://carrefourbrfood.vtexassets.com/arquivos/ids/20474491/power-bank-i2go-pro-20000mah-1464-pt-4.jpg?v=637619578960970000'),
    ('Echo Dot 5°Geração', 'O Echo Dot com o melhor som já lançado | Cor Preta', 252.27, 250, 'https://m.media-amazon.com/images/I/71xoR4A6q-L._AC_SX679_.jpg'),
    ('Azeite de Oliva', "Azeite de oliva extra virgem Andorinha, 500ml", 48.99, 127, 'https://mfresh.s3.amazonaws.com/uploads/product/sku/9331/image/7fa2307f-0147-4588-9b10-1f01637e3230.jpg'),
    ('Capinha de Iphone', 'Capinha Anti Shock Para iPhone 7 8 X Xr 11 12 13 14 Max', 17.90, 50, 'https://http2.mlstatic.com/D_NQ_NP_798063-MLB53858778105_022023-O.webp'),
    ('Ventilador de teto', 'Ventilador De Teto Ventisol Fenix Inverter C/controle Estrutura Branco Pás Branco Diâmetro 960 mm Material das pás Plástico Quantidade de pás 3 127V/220V', 319.99, 20, 'https://http2.mlstatic.com/D_NQ_NP_892670-MLA51543175059_092022-O.webp'),
    ('Máscara para cílios', 'Máscara para cílios Payot 66g cor preto', 24.89, 50, 'https://http2.mlstatic.com/D_NQ_NP_611155-MLU78051455927_072024-O.webp'),
    ('Kaiak Masculino', 'Desodorante Colônia Kaiak Masculino 100 Ml', 109.90, 180, 'https://http2.mlstatic.com/D_NQ_NP_928982-MLB80784794598_112024-O.webp'),
    ('Smart TV 4K 55"', 'Smart TV 4K 55" LG NanoCell 55NANO80T Processador a5 Ger7 AI Hub de Esportes Alexa/Chromecast integrado webOS 24 Controle Smart Magic', 2.699, 80, 'https://http2.mlstatic.com/D_NQ_NP_832309-MLU77231575290_072024-O.webp')

SELECT * FROM products

DROP DATABASE mercadoJAM