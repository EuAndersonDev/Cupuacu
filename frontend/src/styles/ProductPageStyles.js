import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f9f9;
    height: 100vh;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 10px;
    }
`;

export const ProductImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
`;

export const ProductDetails = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProductName = styled.h2`
    font-size: 1.5rem;
    color: #333;
    margin: 10px 0;
`;

export const OriginalPrice = styled.p`
    font-size: 1rem;
    color: #999;
    text-decoration: line-through;
`;

export const Installments = styled.p`
    font-size: 1rem;
    color: #333;
`;

export const FreeShipping = styled.p`
    font-size: 1rem;
    color: #28a745;
`;

export const AddToCartButton = styled.button`
    padding: 10px 20px;
    background-color: #3b60e4;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    transition: opacity 0.3s;

    &:hover {
        opacity: 0.9;
    }
`;

export const BuyButton = styled.button`
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    transition: opacity 0.3s;

    &:hover {
        opacity: 0.9;
    }
`;

export const ProductDescription = styled.p`
    font-size: 1rem;
    color: #555;
    margin: 10px 0;
`;
