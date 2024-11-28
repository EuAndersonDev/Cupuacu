import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
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
  ProductDescription
} from '../../styles/ProductPageStyles.js';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [cep, setCep] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${id}`);
        const product = response.data;

        // Calcula um desconto aleatório entre 0% e 30% para o produto
        const discountPercentage = Math.random() * 30;
        product.discountedPrice = parseFloat(product.price);
        product.originalPrice = product.discountedPrice / (1 - discountPercentage / 100);

        setProduct(product);
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  const handleBuyClick = () => {
    const authToken = sessionStorage.getItem('authToken');
    if (!authToken) {
      alert('Você precisa estar logado para comprar um produto.');
      navigate('/login');
    } else {
      alert('Produto comprado!');
    }
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
          <ProductDescription>{product.description}</ProductDescription>
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