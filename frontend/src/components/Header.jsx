import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderContainer, Logo, SearchBox, SearchInput, SearchIcon, IconContainer, Icon, UserTextContainer } from '../styles/HeaderStyles';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa'; // Importando ícones do React Icons

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Lógica para deslogar o usuário
    setIsLoggedIn(false);
  };

  const handleCartClick = () => {
    if (!isLoggedIn) {
      alert('Você precisa estar logado para acessar o carrinho.');
      navigate('/login');
    } else {
      // Lógica para acessar o carrinho
    }
  };

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">
          <img src="/logo.ico" alt="Logo" />
        </Link>
      </Logo>
      <SearchBox>
        <SearchInput type="text" placeholder="Do que você precisa?" />
        <SearchIcon>
          <FaSearch size={16} />
        </SearchIcon>
      </SearchBox>
      <IconContainer>
        <Icon onClick={handleCartClick}>
          <FaShoppingCart size={24} />
        </Icon>
        <Icon>
          {isLoggedIn ? (
            <button onClick={handleLogout}>Deslogar</button>
          ) : (
            <>
              <FaUser size={24} />
              <UserTextContainer>
                <p>Entrar</p>
                <p>Cadastrar-se</p>
              </UserTextContainer>
            </>
          )}
        </Icon>
      </IconContainer>
    </HeaderContainer>
  );
}

export default Header;