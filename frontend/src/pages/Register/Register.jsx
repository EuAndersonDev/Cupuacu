import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Body,
  Container,
  RegisterSection,
  RegisterTitle,
  RegisterText,
  Label,
  Input,
  RegisterButton,
  ErrorMessage,
  SwitchSection,
  SwitchTitle,
  SwitchText,
  SwitchButton,
  BackButton
} from '../../styles/LoginStyles';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/register', { username, email, password });
      const data = response.data;
      if (response.status === 201) {
        // Sucesso no registro, faça algo com os dados recebidos
        console.log('Registro bem-sucedido:', data);
        // Exiba um alerta de sucesso
        alert('Registro bem-sucedido!');
        // Redirecionar para a página de login ou outra página
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
        <BackButton onClick={() => navigate('/')}>
          <img src="/logo.ico" alt="Voltar para a página principal" />
        </BackButton>
        <RegisterSection>
          <RegisterTitle>Crie sua conta</RegisterTitle>
          <RegisterText>Preencha os campos abaixo para se registrar.</RegisterText>

          <form onSubmit={handleRegister}>
            <Label htmlFor="username">Nome de usuário</Label>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu nome de usuário"
              required
            />

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
            <RegisterButton type="submit">Registrar</RegisterButton>
          </form>
          
        </RegisterSection>

        <SwitchSection>
          <SwitchTitle>Já tem uma Conta?</SwitchTitle>
          <SwitchText>Faça login para acompanhar seus pedidos e continuar suas compras de onde parou.</SwitchText>
          <SwitchButton onClick={() => navigate('/login')}>Entrar em minha conta</SwitchButton>
        </SwitchSection>
      </Container>
    </Body>
  );
}

export default Register;