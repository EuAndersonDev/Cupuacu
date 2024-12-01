import PropTypes from 'prop-types';
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
  BuyButton
} from '../styles/ProductCardStyles';

const ProductCard = ({ product, onClick }) => {
  return (
    <ProductCardContainer onClick={onClick}>
      <ProductImage src={product.image} alt={product.name} />
      <ProductDetails>
        <ProductName>{product.name}</ProductName>
        <OriginalPrice>R${product.originalPrice.toFixed(2)}</OriginalPrice>
        <DiscountedPrice>R${product.discountedPrice.toFixed(2)}</DiscountedPrice>
        <Discount>
          {((product.originalPrice - product.discountedPrice) / product.originalPrice * 100).toFixed(0)}% OFF
        </Discount>
        <Installments>
          em 12x R${(product.discountedPrice / 12).toFixed(2)}
        </Installments>
        {product.hasFreeShipping && <FreeShipping>Frete grátis</FreeShipping>}
        <BuyButton>Comprar</BuyButton>
      </ProductDetails>
    </ProductCardContainer>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number.isRequired,
    hasFreeShipping: PropTypes.bool,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductCard;