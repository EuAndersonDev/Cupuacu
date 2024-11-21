import Header from '../../components/Header.jsx';
import Carrousel from '../../components/Carrousel.jsx';
import ProductCard from '../../components/ProductCard.jsx';
import { MainContainer } from '../../styles/HeaderStyles.js';

function MainPage() {
  const product = {
    name: 'Encordoamento Daddario 010 P/ Violão Aço Ez900-b Original',
    discountedPrice: 57.94,
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_741086-MLB71892707187_092023-E.webp' // Substitua pelo URL da imagem do produto
  };

  // Calcula um desconto aleatório entre 0% e 30%
  const discountPercentage = Math.random() * 30;
  // Calcula o preço original com base no preço com desconto e a porcentagem de desconto
  product.originalPrice = product.discountedPrice / (1 - discountPercentage / 100);

  return (
    <>
      <MainContainer>
        <Header />
        {/* Outros componentes ou conteúdo da MainPage */}
      </MainContainer>
      <Carrousel />
      <ProductCard product={product} />
    </>
  );
}

export default MainPage;