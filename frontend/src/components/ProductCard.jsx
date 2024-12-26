import PropTypes from "prop-types";
import Swal from "sweetalert2";
import {
    ProductCardContainer,
    ProductImage,
    ProductDetails,
    ProductName,
    OriginalPrice,
    DiscountedPrice,
    Discount,
    Installments,
    FreeShipping,
    BuyButton,
    AddToCartButton, // Adicione este estilo
} from "../styles/ProductCardStyles";
import axios from "axios";

const ProductCard = ({ product, onClick }) => {
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
        } catch (error) {
            Swal.fire(
                "Erro!",
                "Ocorreu um erro ao adicionar o produto ao carrinho.",
                "error"
            );
        }
    };

    return (
        <ProductCardContainer onClick={onClick}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductDetails>
                <ProductName>{product.name}</ProductName>
                <OriginalPrice>
                    R${product.originalPrice.toFixed(2)}
                </OriginalPrice>
                <DiscountedPrice>
                    R${product.discountedPrice.toFixed(2)}
                </DiscountedPrice>
                <Discount>{product.discount}% OFF</Discount>
                <Installments>
                    {product.installments}x de R$
                    {(product.discountedPrice / product.installments).toFixed(
                        2
                    )}
                </Installments>
                <FreeShipping>Frete Grátis</FreeShipping>
                <AddToCartButton onClick={handleAddToCart}>
                    Adicionar ao Carrinho
                </AddToCartButton>
            </ProductDetails>
        </ProductCardContainer>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default ProductCard;
