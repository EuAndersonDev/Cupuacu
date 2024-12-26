import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import { Container, Title, Table, TableRow, TableCell, ButtonContainer, RemoveButton, CheckoutButton } from '../../styles/CartStyles';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:3000/cart');
        const items = response.data;
        setCartItems(items);
      } catch (error) {
        console.error('Erro ao buscar itens do carrinho:', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/cart/${id}`);
      setCartItems(cartItems.filter(item => item.id !== id));
    } catch (error) {
      console.error('Erro ao remover item do carrinho:', error);
    }
  };

  const handleCheckout = () => {
    alert('Checkout realizado com sucesso!');
  };

  return (
    <>
      <Header />
      <Container>
        <Title>Meu Carrinho</Title>
        <Table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Preço</th>
              <th>Total</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.product_name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>R${item.price.toFixed(2)}</TableCell>
                <TableCell>R${(item.price * item.quantity).toFixed(2)}</TableCell>
                <TableCell>
                  <ButtonContainer>
                    <RemoveButton onClick={() => handleRemoveItem(item.id)}>Remover</RemoveButton>
                  </ButtonContainer>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
        <CheckoutButton onClick={handleCheckout}>Finalizar Compra</CheckoutButton>
      </Container>
    </>
  );
}

export default Cart;