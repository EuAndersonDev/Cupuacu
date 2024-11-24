import { useState } from 'react';
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
  RegisterButton
} from '../../styles/LoginStyles';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();
      if (response.ok) {
        // Sucesso no login, faça algo com os dados recebidos
        console.log('Login bem-sucedido:', data);
      } else {
        // Erro no login, mostre uma mensagem de erro
        console.error('Erro no login:', data.message);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
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
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Label htmlFor="senha">Senha</Label>
            <Input
              type="password"
              id="senha"
              placeholder="Sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <ForgotPassword>
              <a href="#">Esqueceu sua senha?</a>
            </ForgotPassword>

            <LoginButton type="submit">Entrar</LoginButton>
          </form>
        </LoginSection>

        <RegisterSection>
          <RegisterTitle>Criar uma conta é rápido, fácil e gratuito!</RegisterTitle>
          <RegisterText>
            Cadastre-se no Mercado Cupuaçu e aproveite vantagens exclusivas! Com
            sua conta, você terá acesso a ofertas especiais, poderá acompanhar
            seus pedidos e realizar suas compras com facilidade.
          </RegisterText>
          <Link to="/register">
            <RegisterButton>Criar minha conta</RegisterButton>
          </Link>
        </RegisterSection>
      </Container>
    </Body>
  );
}

export default Login;
