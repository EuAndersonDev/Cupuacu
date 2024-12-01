import styled from 'styled-components';

export const ProductPageContainer = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  gap: 40px;
`;

export const ProductImageContainer = styled.div`
  flex: 1;
`;

export const ProductImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const ProductDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProductName = styled.h2`
  font-size: 2.5rem;
  margin: 10px 0;
  color: #333; /* Changed color */
`;

export const OriginalPrice = styled.p`
  color: #555; /* Changed color */
  font-size: 0.9rem;
  text-decoration: line-through;
`;

export const DiscountedPrice = styled.p`
  font-size: 2rem;
  color: #ffa500;
  margin: 10px 0;
`;

export const Discount = styled.p`
  color: #81c784;
  font-size: 1.2rem;
`;

export const Installments = styled.p`
  font-size: 1rem;
  color: #555; /* Changed color */
`;

export const FreeShipping = styled.p`
  font-size: 1rem;
  color: #81c784;
`;

export const BuyButton = styled.button`
  padding: 15px 30px;
  background-color: #3b60e4;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7
  }
`;

export const CepInputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const CepInput = styled.input`
  padding: 10px;
  border: 1px solid #333;
  border-radius: 5px;
  width: 100%;
  max-width: 200px;
`;

export const CalculateButton = styled.button`
  padding: 10px 20px;
  background-color: #99e1d9  ;
  color: #1e1e1e;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  color: #555; /* Changed color */
  margin: 10px 0;
`;