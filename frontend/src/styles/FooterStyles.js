import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #1e1e2f;
    color: white;
    padding: 20px;
    text-align: center;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 10px 0;
    flex-direction: row;
`;

export const SocialIconsUni = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 10px 0;
    flex-direction: column;
`;

export const Icon = styled.i`
    font-size: 24px;
    color: white;
    transition: color 0.3s ease;

    &:hover {
        color: #a0e8e1;
    }
`;

export const EmailForm = styled.form`
    margin-top: 20px;
`;

export const EmailInput = styled.input`
    padding: 10px;
    width: 70%;
    max-width: 400px;
    border: none;
    border-radius: 4px;
    margin-right: 10px;
    outline: none;
`;

export const SubmitButton = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color:a0e8e1;
    color: #1e1e2f;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ;
    }
`;
