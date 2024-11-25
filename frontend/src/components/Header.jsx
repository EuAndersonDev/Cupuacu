import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import {
  HeaderContainer,
  Logo,
  SearchBox,
  SearchInput,
  SearchIcon,
  IconContainer,
  Icon,
  UserTextContainer
} from '../styles/HeaderStyles';

function Header({ isLoggedIn, handleLogout }) {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
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
        <img src="/logo.ico" alt="Logo" />
      </Logo>
      <SearchBox>
        <SearchInput type="text" placeholder="Buscar produtos..." />
        <SearchIcon>
          <FaSearch size={20} />
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
                <p onClick={handleLoginClick} style={{ fontWeight: 'bold', cursor: 'pointer' }}>Entrar</p>
                <p onClick={handleRegisterClick} style={{ cursor: 'pointer' }}>Cadastrar-se</p>
              </UserTextContainer>
            </>
          )}
        </Icon>
      </IconContainer>
    </HeaderContainer>
  );
}

export default Header;