
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Body,
  Container,
  LoginSection,
  LoginTitle,
  LoginSubtitle,
  LoginText,
  Label,
  Input,
  LoginButton,
  ForgotPassword,
  RegisterSection,
  RegisterTitle,
  RegisterText,
  RegisterButton,
  ErrorMessage
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
        // Sucesso no login, faça algo com os dados recebidos
        console.log('Login bem-sucedido:', data);
        // Armazene o token no localStorage
        localStorage.setItem('authToken', data.token);
        // Exiba um alerta de sucesso
        alert('Login bem-sucedido!');
        // Redirecionar para a página principal ou outra página
        navigate('/');
      } else {
        // Erro no login, mostre uma mensagem de erro
        console.error('Erro no login:', data.message);
        setError(data.message);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      setError('Erro ao fazer login. Tente novamente.');
    }
  };

  return (
    <Body>
      <Container>
        <LoginSection>
          <LoginTitle>Bem vindo!</LoginTitle>
          <LoginSubtitle>Acesse sua conta</LoginSubtitle>
          <LoginText>Fácil, prático e barato :)</LoginText>

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
          <ForgotPassword>Esqueceu sua senha?</ForgotPassword>
        </LoginSection>

        <RegisterSection>
          <RegisterTitle>Não tem uma conta?</RegisterTitle>
          <RegisterText>Cadastre-se agora e aproveite!</RegisterText>
          <RegisterButton onClick={() => navigate('/register')}>Cadastrar-se</RegisterButton>
        </RegisterSection>
      </Container>
    </Body>
  );
}

export default Login;