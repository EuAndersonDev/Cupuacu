import Header from '../../components/Header.jsx';
import Carrousel from '../../components/Carrousel.jsx';
import { MainContainer } from '../../styles/HeaderStyles.js';

function MainPage() {
  return (
      <>
    <MainContainer>
      <Header />
      {/* Outros componentes ou conteúdo da MainPage */}
    </MainContainer>
      <Carrousel />
      </>
  );
}

export default MainPage;