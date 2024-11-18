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
          <LoginSubtitle>Cadastre-se</LoginSubtitle>
          <LoginText>Fácil, prático e barato :)</LoginText>

          <Label htmlFor="email">E-mail</Label>
          <Input type="email" id="email" placeholder="Digite seu e-mail" />

          <Label htmlFor="usuario">Usuário</Label>
          <Input type="text" id="usuario" placeholder="Ex: Felisberto Matos" />

          <Label htmlFor="senha">Defina uma senha</Label>
          <Input type="password" id="senha" placeholder="Sua senha" />

          <Label htmlFor="senhaConfirmada">Confirme sua Senha</Label>
          <Input type="password" id="senhaConfirmada" placeholder="Sua senha" />

          <ForgotPassword>
            <a href="#"></a>
          </ForgotPassword>

          <LoginButton>Entrar</LoginButton>
        </LoginSection>

        <RegisterSection>
          <RegisterTitle>Já tem uma Conta?</RegisterTitle>
          <RegisterText>
          Faça login para acompanhar seus pedidos e continuar suas compras de onde parou.
          </RegisterText>
          <RegisterButton>Criar minha conta</RegisterButton>
        </RegisterSection>
      </Container>
    </Body>
  );
}

export default Register;
