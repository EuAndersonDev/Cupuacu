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

function Register() {
  return (
    <Body>
      <Container>
        <LoginSection>
          <LoginTitle>Bem vindo!</LoginTitle>
          <LoginSubtitle>Acesse sua conta</LoginSubtitle>
          <LoginText>Fácil, prático e barato :)</LoginText>

          <Label htmlFor="email">E-mail</Label>
          <Input type="email" id="email" placeholder="Digite seu e-mail" />

          <Label htmlFor="senha">Senha</Label>
          <Input type="password" id="senha" placeholder="Sua senha" />

          <ForgotPassword>
            <a href="#">Esqueceu sua senha?</a>
          </ForgotPassword>

          <LoginButton>Entrar</LoginButton>
        </LoginSection>

        <RegisterSection>
          <RegisterTitle>Criar uma conta é rápido, fácil e gratuito!</RegisterTitle>
          <RegisterText>
            Cadastre-se no Mercado Cupuaçu e aproveite vantagens exclusivas! Com
            sua conta, você terá acesso a ofertas especiais, poderá acompanhar
            seus pedidos e realizar suas compras com facilidade.
          </RegisterText>
          <RegisterButton>Criar minha conta</RegisterButton>
        </RegisterSection>
      </Container>
    </Body>
  );
}

export default Register;
