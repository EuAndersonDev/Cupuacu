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

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: #45a049;
  }
`;

export const Input = styled.input`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: calc(100% - 40px);
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;

  th,
  td {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: #f2f2f2;
    color: #333;
  }

  th:nth-child(1),
  td:nth-child(1) {
    width: 5%;
  }

  th:nth-child(2),
  td:nth-child(2) {
    width: 15%;
  }

  th:nth-child(3),
  td:nth-child(3) {
    width: 25%;
  }

  th:nth-child(4),
  td:nth-child(4) {
    width: 10%;
  }

  th:nth-child(5),
  td:nth-child(5) {
    width: 20%;
  }

  th:nth-child(6),
  td:nth-child(6) {
    width: 10%;
  }

  th:nth-child(7),
  td:nth-child(7) {
    width: 15%;
  }
`;

export const DeleteButton = styled(Button)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const ChangeButton = styled(Button)`
  background-color: #f0d22a;

  &:hover {
    background-color: #b69f20;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: left;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;