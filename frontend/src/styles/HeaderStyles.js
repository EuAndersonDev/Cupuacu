import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10vw; /* Ajuste as margens laterais */
  background-color: #f8f9fa;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px; /* Tamanho da logo */
    height: 40px;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 30vw; /* Aproximadamente 504px */
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const SearchIcon = styled.div`
  margin-left: -2rem; /* Ajuste para posicionar o ícone dentro da barra de pesquisa */
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  margin-left: 2.5vw; /* Aproximadamente 51px */
  display: flex;
  align-items: center;
`;

export const UserTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0;
    cursor: pointer;
  }

  p:nth-child(1) {
    font-weight: bold;
  }
`;

// Adicione a exportação do MainContainer
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;