import axios from "axios";
import Swal from "sweetalert2";
import {
    ProductCardContainer,
    ProductImage,
    ProductDetails,
    ProductName,
    OriginalPrice,
    DiscountedPrice,
    Discount,
    FreeShipping,
    AddToCartButton,
} from "../styles/ProductCardStyles";

const ProductCard = ({ product, onClick }) => {
    const randomDiscount = Math.floor(Math.random() * 41) + 10;
    const discountedPrice = product.originalPrice * (1 - randomDiscount / 100);

    const handleAddToCart = async (e) => {
        e.stopPropagation(); 
        try {
            const response = await axios.post("http://localhost:3000/cart", {
                userId: userId,
                productId: product.id,
                quantity: 1,
            });
            console.log("Response:", response); 

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
            console.log("Error:", error);
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
                    R${discountedPrice.toFixed(2)}
                </DiscountedPrice>
                <Discount>{randomDiscount}% OFF</Discount>
                <FreeShipping>Frete Grátis</FreeShipping>
                <AddToCartButton onClick={handleAddToCart}>
                    Adicionar ao Carrinho
                </AddToCartButton>
            </ProductDetails>
        </ProductCardContainer>
    );
};

export default ProductCard;
