import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  background-color: #fff;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProductDetails = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProductName = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin: 0;
`;

export const OriginalPrice = styled.p`
  color: #777;
  font-size: 0.9rem;
  text-decoration: line-through;
  margin: 0;
`;

export const DiscountedPrice = styled.p`
  font-size: 1.5rem;
  color: #ffa500;
  margin: 0;
`;

export const Discount = styled.p`
  color: #81c784;
  font-size: 1rem;
  margin: 0;
`;

export const Installments = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin: 0;
`;

export const FreeShipping = styled.p`
  font-size: 0.9rem;
  color: #81c784; /* Green color for free shipping text */
  margin: 0;
`;

export const BuyButton = styled.button`
  padding: 10px 20px;
  background-color: #1e1e1e;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #388e3c;
  }
`;