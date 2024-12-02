import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  const authToken = sessionStorage.getItem('authToken');
  const userType = sessionStorage.getItem('userType');

  if (!authToken || userType !== 'admin') {
    // Se o usuário não estiver logado ou não for um administrador, redirecione para a página de login
    return <Navigate to="/login" />;
  }

  // Se o usuário estiver logado e for um administrador, renderize o componente filho
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;