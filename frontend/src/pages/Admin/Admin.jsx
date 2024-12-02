import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import { Container, Title, Input, Button, Table, TableRow, TableCell } from '../../styles/AdminStyles';

function Admin() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    stock_quantity: ''
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/products', newProduct);
      setProducts([...products, response.data]);
      setNewProduct({
        name: '',
        description: '',
        price: '',
        image: '',
        stock_quantity: ''
      });
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
    }
  };

  const handleUpdateProduct = async (id, updatedProduct) => {
    try {
      const response = await axios.put(`http://localhost:3000/products/${id}`, updatedProduct);
      setProducts(products.map(product => (product.id === id ? response.data : product)));
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Title>Gerenciar Produtos</Title>
        <form onSubmit={handleAddProduct}>
          <Input
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            placeholder="Nome do Produto"
            required
          />
          <Input
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            placeholder="Descrição"
            required
          />
          <Input
            name="price"
            type="number"
            value={newProduct.price}
            onChange={handleInputChange}
            placeholder="Preço"
            required
          />
          <Input
            name="image"
            value={newProduct.image}
            onChange={handleInputChange}
            placeholder="URL da Imagem"
            required
          />
          <Input
            name="stock_quantity"
            type="number"
            value={newProduct.stock_quantity}
            onChange={handleInputChange}
            placeholder="Quantidade em Estoque"
            required
          />
          <Button type="submit">Adicionar Produto</Button>
        </form>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Imagem</th>
              <th>Quantidade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>
                  <Input
                    value={product.name}
                    onChange={(e) => handleUpdateProduct(product.id, { ...product, name: e.target.value })}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={product.description}
                    onChange={(e) => handleUpdateProduct(product.id, { ...product, description: e.target.value })}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    value={product.price}
                    onChange={(e) => handleUpdateProduct(product.id, { ...product, price: e.target.value })}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    value={product.image}
                    onChange={(e) => handleUpdateProduct(product.id, { ...product, image: e.target.value })}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="number"
                    value={product.stock_quantity}
                    onChange={(e) => handleUpdateProduct(product.id, { ...product, stock_quantity: e.target.value })}
                  />
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleDeleteProduct(product.id)}>Remover</Button>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Admin;
