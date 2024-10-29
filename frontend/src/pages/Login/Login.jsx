import React from "react";
import login from "./login.css";
function Login() {
  return (
    <div id="loginBox">
      <div class="login">
        <h2>Bem vindo!</h2>
        <h3>Acesse sua conta</h3>
        <p>Fácil, prático e barato :)</p>

        <label for="email">E-mail</label>
        <input type="email" id="email" placeholder="Digite seu e-mail" />

        <label for="senha">Senha</label>
        <input type="password" id="senha" placeholder="Sua senha" />

        <div class="forgot-password">
          <a href="#">Esqueceu sua senha?</a>
        </div>

        <button>Entrar</button>
      </div>

      <div class="register">
        <h2>Criar uma conta é rápido, fácil e gratuito!</h2>
        <p>
          Cadastre-se no Mercado Cupuaçu e aproveite vantagens exclusivas! Com
          sua conta, você terá acesso a ofertas especiais, poderá acompanhar
          seus pedidos e realizar suas compras com facilidade.
        </p>
        <button>Criar minha conta</button>
      </div>
    </div>
  );
};

export default Login;
