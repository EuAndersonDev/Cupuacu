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
  RegisterSection,
  RegisterTitle,
  RegisterText,
  RegisterButton,
  ErrorMessage
} from '../../styles/LoginStyles';

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/auth/register', { email, username, password });
      const data = response.data;
      if (response.status === 200) {
        // Sucesso no registro, faça algo com os dados recebidos
        console.log('Registro bem-sucedido:', data);
        // Exiba um alerta de sucesso
        alert('Usuário registrado com sucesso!');
        // Redirecionar para a página de login
        navigate('/login');
      } else {
        // Erro no registro, mostre uma mensagem de erro
        console.error('Erro no registro:', data.message);
        setError(data.message);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      setError('Erro ao fazer registro. Tente novamente.');
    }
  };

  return (
    <Body>
      <Container>
        <LoginSection>
          <LoginTitle>Bem vindo!</LoginTitle>
          <LoginSubtitle>Cadastre-se</LoginSubtitle>
          <LoginText>Fácil, prático e barato :)</LoginText>

          <form onSubmit={handleRegister}>
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              required
            />

            <Label htmlFor="username">Usuário</Label>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ex: Felisberto Matos"
              required
            />

            <Label htmlFor="password">Defina uma senha</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha"
              required
            />

            <Label htmlFor="confirmPassword">Confirme sua Senha</Label>
            <Input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Sua senha"
              required
            />

            {error && <ErrorMessage>{error}</ErrorMessage>}
            <LoginButton type="submit">Cadastrar</LoginButton>
          </form>
        </LoginSection>

        <RegisterSection>
          <RegisterTitle>Já tem uma conta?</RegisterTitle>
          <RegisterText>Faça login para acompanhar seus pedidos e continuar suas compras de onde parou.</RegisterText>
          <RegisterButton onClick={() => navigate('/login')}>Entrar em minha conta</RegisterButton>
        </RegisterSection>
      </Container>
    </Body>
  );
}

export default Register;