// LoginStyles.js
import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #a0e8e1;
`;

export const Container = styled.div`
  display: flex;
  width: 800px;
  background-color: #a0e8e1;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

/* Seção de login */
export const LoginSection = styled.div`
  background-color: #c8f7f4;
  padding: 20px;
  width: 50%;
  border-radius: 10px;
`;

export const LoginTitle = styled.h2`
  font-size: 24px;
  color: #000;
`;

export const LoginSubtitle = styled.h3`
  font-size: 18px;
  color: #000;
  margin-top: 5px;
`;

export const LoginText = styled.p`
  font-size: 12px;
  color: #666;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #000;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

export const ForgotPassword = styled.div`
  font-size: 12px;
  text-align: right;
  color: #666;
`;

/* Seção de cadastro */
export const RegisterSection = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #000;
`;

export const RegisterTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const RegisterText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 15px;
`;

export const RegisterButton = styled.button`
  width: 100%;
  padding: 10px;
  border: 2px solid #000;
  background-color: transparent;
  color: #000;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  /* Efeito de hover */
  &:hover {
    background-color: #000;    /* Cor de fundo muda para preto */
    color: #fff;               /* Cor do texto muda para branco */
    border: 2px solid #fff;    /* Borda muda para branco */
  }
`;

