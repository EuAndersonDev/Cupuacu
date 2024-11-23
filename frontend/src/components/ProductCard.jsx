import PropTypes from 'prop-types';

const ProductCard = ({ product, onClick }) => {
  const discount = ((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100;

  return (
    <div className="product-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p style={{ textDecoration: 'line-through', color: 'red' }}>R${product.originalPrice.toFixed(2)}</p>
      <p>R${product.discountedPrice.toFixed(2)}</p>
      <p>{discount.toFixed(0)}% OFF</p>
      <p>em 12x R${(product.discountedPrice / 12).toFixed(2)}</p>
      <p>Frete grátis</p>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    originalPrice: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductCard;