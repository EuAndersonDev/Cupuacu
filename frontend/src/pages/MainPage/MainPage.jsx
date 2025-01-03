import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header.jsx';
import Carrousel from '../../components/Carrousel.jsx';
import ProductCard from '../../components/ProductCard.jsx';
import { MainContainer } from '../../styles/HeaderStyles.js';
import Footer from '../../components/Footer.jsx';

function MainPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        const products = response.data;

        // Calcula um desconto aleatório entre 0% e 30% para cada produto
        products.forEach(product => {
          const discountPercentage = Math.random() * 30;
          product.discountedPrice = parseFloat(product.price);
          product.originalPrice = product.discountedPrice / (1 - discountPercentage / 100);
        });

        //30% de chance do frete do produto ser gratis
        const totalProducts = products.length;
        const freeShippingCount = Math.floor(totalProducts * 0.3);
        const shuffledProducts = products.sort(() => 0.5 - Math.random());
        shuffledProducts.slice(0, freeShippingCount).forEach(product => {
          product.hasFreeShipping = true;
        });

        setProducts(products);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <>
      <MainContainer>
        <Header />
        {/* Outros componentes ou conteúdo da MainPage */}
      </MainContainer>
      <Carrousel />
      <br></br>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} onClick={() => handleProductClick(product)} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default MainPage;