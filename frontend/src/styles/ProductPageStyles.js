import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    background-color: #f9f9f9;
    padding: 40px;
    min-height: 100vh;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }
`;

export const ProductImage = styled.img`
    width: 400px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        width: 100%;
        max-width: 300px;
    }
`;

export const ProductDetails = styled.div`
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 20px;
        align-items: center;
        text-align: center;
    }
`;

export const ProductName = styled.h2`
    font-size: 3rem;
    color: #222;
    margin-bottom: 15px;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const ProductDescription = styled.p`
    font-size: 1.2rem;
    color: #555;
    margin: 10px 0 20px;
    line-height: 1.6;
`;

export const OriginalPrice = styled.p`
    font-size: 1.5rem;
    color: #999;
    text-decoration: line-through;
    margin: 5px 0;
`;

export const DiscountedPrice = styled.p`
    font-size: 2rem;
    color: #e63946;
    font-weight: bold;
    margin: 5px 0;
`;

export const Installments = styled.p`
    font-size: 1.2rem;
    color: #333;
    margin: 5px 0;
`;

export const FreeShipping = styled.p`
    font-size: 1.1rem;
    color: #28a745;
    font-weight: bold;
    margin: 10px 0;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    margin-top: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        align-items: center;
    }
`;

export const AddToCartButton = styled.button`
    padding: 12px 25px;
    background-color: #3b60e4;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s;

    &:hover {
        background-color: #1e4cb8;
        opacity: 0.9;
    }
`;

export const BuyButton = styled.button`
    padding: 12px 25px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s;

    &:hover {
        background-color: #218838;
        opacity: 0.9;
    }
`;
