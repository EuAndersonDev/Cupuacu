import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import {
    Container,
    ProductImage,
    ProductDetails,
    ProductName,
    OriginalPrice,
    Installments,
    FreeShipping,
    AddToCartButton,
    BuyButton,
    ButtonsContainer,
} from "../../styles/ProductPageStyles";

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/products/${id}`
                );
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar produto:", error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = async () => {
        try {
            await axios.post("http://localhost:3000/cart", {
                productId: product.id,
                quantity: 1,
            });
            Swal.fire(
                "Adicionado!",
                "O produto foi adicionado ao carrinho.",
                "success"
            );
        } catch {
            Swal.fire(
                "Erro!",
                "Ocorreu um erro ao adicionar o produto ao carrinho.",
                "error"
            );
        }
    };

    const handleBuyNow = async () => {
        const authToken = sessionStorage.getItem("authToken");

        if (!authToken) {
            Swal.fire(
                "Atenção!",
                "Você precisa estar logado para comprar um produto.",
                "warning"
            );
            navigate("/login");
        } else {
            try {
                const response = await axios.post(
                    `http://localhost:3000/products/${id}/decreaseStock`,
                    { quantity: 1 }
                );

                if (response.status === 200) {
                    Swal.fire(
                        "Compra realizada!",
                        "O produto foi comprado com sucesso.",
                        "success"
                    );
                    setProduct({
                        ...product,
                        stock_quantity: product.stock_quantity - 1,
                    });
                } else {
                    Swal.fire("Erro!", "Estoque insuficiente.", "error");
                }
            } catch {
                Swal.fire(
                    "Erro!",
                    "Ocorreu um erro ao realizar a compra.",
                    "error"
                );
            }
        }
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!product) {
        return <div>Produto não encontrado</div>;
    }

    return (
        <Container>
            <ProductImage src={product.image} alt={product.name} />
            <ProductDetails>
                <ProductName>{product.name}</ProductName>
                <OriginalPrice>
                    R${" "}
                    {product.originalPrice
                        ? product.originalPrice.toFixed(2)
                        : "N/A"}
                </OriginalPrice>
                <Installments>
                    {product.installments ? product.installments : "N/A"}x de R$
                    {product.originalPrice && product.installments
                        ? (
                              product.originalPrice / product.installments
                          ).toFixed(2)
                        : "N/A"}
                </Installments>
                <FreeShipping>Frete Grátis</FreeShipping>
                <ButtonsContainer>
                    <AddToCartButton onClick={handleAddToCart}>
                        Adicionar ao Carrinho
                    </AddToCartButton>
                    <BuyButton onClick={handleBuyNow}>Comprar Agora</BuyButton>
                </ButtonsContainer>
            </ProductDetails>
        </Container>
    );
};

export default ProductPage;
