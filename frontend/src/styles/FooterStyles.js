import styled from "styled-components";

export const FooterContainer = styled.footer`
    margin-top: 80px;
    background-color:rgb(34, 141, 184);
    color: white;
    padding: 20px;
    text-align: center;
`;

export const EmailForm = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const EmailInput = styled.input`
    padding: 10px;
    width: 70%;
    max-width: 400px;
    border: none;
    border-radius: 4px;
    margin-bottom: 10px;
    outline: none;
`;

export const SubmitButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #a0e8e1;
    color: #1e1e2f;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #1e1e2f;
        color: #a0e8e1;
    }
`;
