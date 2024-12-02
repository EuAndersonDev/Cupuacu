import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderContainer, Logo, SearchBox, SearchInput, SearchIcon, IconContainer, Icon, UserTextContainer, Button } from '../styles/HeaderStyles';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa'; // Importando ícones do React Icons

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage.getItem('authToken');
    const userType = sessionStorage.getItem('userType');
    setIsLoggedIn(!!authToken);
    setUserType(userType);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userType');
    setIsLoggedIn(false);
    setUserType('');
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
            <>
              {userType === 'admin' && (
                <>
                  <Button onClick={() => navigate('/admin')}>Painel Admin</Button>
                </>
              )}
              <Button onClick={handleLogout}>Deslogar</Button>
            </>
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