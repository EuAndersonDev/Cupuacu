import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from '../../components/Header';
import { Container, Title, Input, Button, Table, TableRow, TableCell, DeleteButton, ChangeButton, ButtonContainer } from '../../styles/AdminStyles';

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
    const { name, description, price, image, stock_quantity } = newProduct;

    // Verificar se todos os campos estão preenchidos
    if (!name || !description || !price || !image || !stock_quantity) {
      Swal.fire('Erro', 'Por favor, preencha todos os campos.', 'error');
      return;
    }

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
      Swal.fire('Sucesso', 'Produto adicionado com sucesso!', 'success');
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      Swal.fire('Erro', 'Erro ao adicionar produto.', 'error');
    }
  };

  const handleDeleteProduct = async (id) => {
    const result = await Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir!'
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/products/${id}`);
        setProducts(products.filter(product => product.id !== id));
        Swal.fire('Excluído!', 'Produto excluído com sucesso.', 'success');
      } catch (error) {
        console.error('Erro ao deletar produto:', error);
        Swal.fire('Erro', 'Erro ao deletar produto.', 'error');
      }
    }
  };

  const handleEditProduct = async (product) => {
    const { value: formValues } = await Swal.fire({
      title: 'Editar Produto',
      html:
        `<input id="swal-input1" class="swal2-input" placeholder="Nome" value="${product.name}">` +
        `<input id="swal-input2" class="swal2-input" placeholder="Descrição" value="${product.description}">` +
        `<input id="swal-input3" class="swal2-input" placeholder="Preço" type="number" value="${product.price}">` +
        `<input id="swal-input4" class="swal2-input" placeholder="URL da Imagem" value="${product.image}">` +
        `<input id="swal-input5" class="swal2-input" placeholder="Quantidade em Estoque" type="number" value="${product.stock_quantity}">`,
      focusConfirm: false,
      preConfirm: () => {
        return {
          name: document.getElementById('swal-input1').value,
          description: document.getElementById('swal-input2').value,
          price: document.getElementById('swal-input3').value,
          image: document.getElementById('swal-input4').value,
          stock_quantity: document.getElementById('swal-input5').value
        }
      }
    });

    if (formValues) {
      try {
        const response = await axios.put(`http://localhost:3000/products/${product.id}`, formValues);
        setProducts(products.map(p => (p.id === product.id ? response.data : p)));
        Swal.fire('Sucesso', 'Produto atualizado com sucesso!', 'success');
      } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        Swal.fire('Erro', 'Erro ao atualizar produto.', 'error');
      }
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
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.image}</TableCell>
                <TableCell>{product.stock_quantity}</TableCell>
                <TableCell>
                  <ButtonContainer>
                    <ChangeButton onClick={() => handleEditProduct(product)}>Editar</ChangeButton>
                    <DeleteButton onClick={() => handleDeleteProduct(product.id)}>Remover</DeleteButton>
                  </ButtonContainer>
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