import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header.jsx';
import {
  ProductPageContainer,
  ProductImageContainer,
  ProductImage,
  ProductDetails,
  ProductName,
  OriginalPrice,
  DiscountedPrice,
  Discount,
  Installments,
  FreeShipping,
  BuyButton,
  CepInputContainer,
  CepInput,
  CalculateButton,
  ProductDescription // Import the new style
} from '../../styles/ProductPageStyles.js';

const ProductPage = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const [cep, setCep] = useState('');

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  const handleBuyClick = () => {
    alert('Produto comprado!');
  };

  const handleCalculateClick = () => {
    alert(`Calculando frete para o CEP: ${cep}`);
  };

  return (
    <>
      <Header />
      <ProductPageContainer>
        <ProductImageContainer>
          <ProductImage src={product.image} alt={product.name} />
        </ProductImageContainer>
        <ProductDetails>
          <ProductName>{product.name}</ProductName>
          <OriginalPrice>R${product.originalPrice.toFixed(2)}</OriginalPrice>
          <DiscountedPrice>R${product.discountedPrice.toFixed(2)}</DiscountedPrice>
          <Discount>{((product.originalPrice - product.discountedPrice) / product.originalPrice * 100).toFixed(0)}% OFF</Discount>
          <Installments>em 12x R${(product.discountedPrice / 12).toFixed(2)}</Installments>
          <FreeShipping>Frete grátis</FreeShipping>
          <ProductDescription>{product.description}</ProductDescription> {/* Add this line */}
          <BuyButton onClick={handleBuyClick}>Comprar</BuyButton>
          <CepInputContainer>
            <CepInput
              type="text"
              placeholder="Digite seu CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
            <CalculateButton onClick={handleCalculateClick}>Calcular Frete</CalculateButton>
          </CepInputContainer>
        </ProductDetails>
      </ProductPageContainer>
    </>
  );
};

export default ProductPage;