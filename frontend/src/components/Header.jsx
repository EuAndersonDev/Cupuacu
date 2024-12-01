import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderContainer, Logo, SearchBox, SearchInput, SearchIcon, IconContainer, Icon, UserTextContainer } from '../styles/HeaderStyles';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa'; // Importando ícones do React Icons

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage.getItem('authToken');
    setIsLoggedIn(!!authToken);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleCartClick = () => {
    if (!isLoggedIn) {
      alert('Você precisa estar logado para acessar o carrinho.');
      navigate('/login');
    } else {
      navigate('/cart');
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">
          <img src="/Logo.svg" alt="Logo" />
        </Link>
      </Logo>
      <SearchBox>
        <SearchInput type="text" placeholder="Buscar produtos..." />
        <SearchIcon>
          <FaSearch />
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
                <p onClick={handleLoginClick}>Entrar</p>
                <p onClick={handleRegisterClick}>Cadastrar-se</p>
              </UserTextContainer>
            </>
          )}
        </Icon>
      </IconContainer>
    </HeaderContainer>
  );
}

export default Header;