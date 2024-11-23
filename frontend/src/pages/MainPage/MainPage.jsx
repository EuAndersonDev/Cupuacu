import Header from '../../components/Header.jsx';
import Carrousel from '../../components/Carrousel.jsx';
import ProductCard from '../../components/ProductCard.jsx';
import { MainContainer } from '../../styles/HeaderStyles.js';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Encordoamento Daddario 010 P/ Violão Aço Ez900-b Original',
      discountedPrice: 57.94,
      image: 'https://http2.mlstatic.com/D_Q_NP_2X_741086-MLB71892707187_092023-E.webp',
      description: 'O Encordoamento Daddario 010 para Violão Aço Ez900-b Original oferece uma sonoridade brilhante e duradoura. Ideal para músicos que buscam qualidade e durabilidade, este encordoamento é perfeito para todos os estilos musicais.'
    }
  ];

  // Calcula um desconto aleatório entre 0% e 30% para cada produto
  products.forEach(product => {
    const discountPercentage = Math.random() * 30;
    product.originalPrice = product.discountedPrice / (1 - discountPercentage / 100);
  });

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
      {products.map(product => (
        <ProductCard key={product.id} product={product} onClick={() => handleProductClick(product)} />
      ))}
    </>
  );
}

export default MainPage;