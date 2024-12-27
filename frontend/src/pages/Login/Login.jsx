import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import {
  Body,
  Container,
  LoginSection,
  LoginTitle,
  LoginText,
  Label,
  Input,
  LoginButton,
  ErrorMessage,
  BackButton,
  SwitchSection,
  SwitchButton,
  SwitchText,
  SwitchTitle 
} from '../../styles/LoginStyles';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', { email, password });
      const data = response.data;
      if (response.status === 200) {
        // Sucesso no login, armazene o token e o tipo de usuário no sessionStorage
        sessionStorage.setItem('authToken', data.token);
        sessionStorage.setItem('userType', data.userType); // Armazene o tipo de usuário
        // Redirecionar para a página principal ou outra página
        Swal.fire({
            icon: "success",
            title: "Login efetuado com sucesso!",
            showConfirmButton: false,
            timer: 150,
        });
        navigate('/');
      } else {
        // Erro no login, mostre uma mensagem de erro
        setError(data.message);
      }
    } catch  {
      Swal.fire({
          icon: "error",
          title: "Erro",
          text: "Erro ao fazer login. Por favor, tente novamente.",
      });
    }
  };

  return (
    <Body>
      <Container>
        <BackButton onClick={() => navigate('/')}>
          <img src="/logo.ico" alt="Voltar para a página principal" />
        </BackButton>
        <LoginSection>
          <LoginTitle>Entrar</LoginTitle>
          <LoginText>Preencha os campos abaixo para entrar.</LoginText>

          <form onSubmit={handleLogin}>
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              required
            />

            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha"
              required
            />

            {error && <ErrorMessage>{error}</ErrorMessage>}
            <LoginButton type="submit">Entrar</LoginButton>
          </form>
          
        </LoginSection>

        <SwitchSection>
          <SwitchTitle>Não tem uma Conta?</SwitchTitle>
          <SwitchText>Registre-se para acompanhar seus pedidos e continuar suas compras de onde parou.</SwitchText>
          <SwitchButton onClick={() => navigate('/register')}>Criar uma conta</SwitchButton>
        </SwitchSection>
      </Container>
    </Body>
  );
}

export default Login;