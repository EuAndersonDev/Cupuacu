import { useEffect, useState } from 'react';
import  axios  from 'axios';
import Header from "../../components/Header";

import { 
    Container, 
    Title, 
    Button, 
    Input, 
    Table, 
    DeleteButton 
} from "../../styles/AdminStyles";

const Admin = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get('http://localhost:3000/products');
            const products = response.data;

            setProducts(products);
          } catch (error) {
            console.error('Erro ao buscar produtos:', error);
          }
        };
    
        fetchProducts();
      }, []);
  return (
    <>
    <Header />
    <Container>
      <Title>Gerenciar Produtos</Title>
      <Input placeholder="Nome do Produto" />
      <Input placeholder="Preço" type="number" />
      <Button>Adicionar Produto</Button>

      <Table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{Admin.id}</td>
            <td>{Admin.price}</td>
            <td>
              <DeleteButton>Remover</DeleteButton>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
    </>
  );
};

export default Admin;
