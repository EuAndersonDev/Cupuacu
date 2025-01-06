import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import {
    Container,
    Title,
    Table,
    TableRow,
    TableCell,
    ButtonContainer,
    RemoveButton,
    CheckoutButton,
} from "../../styles/CartStyles";
import Footer from "../../components/Footer";
import Swal from "sweetalert2";

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            const userId = localStorage.getItem("userId");

            if (!userId) {
                Swal.fire({
                    title: "Erro!",
                    text: "User ID não encontrado.",
                    icon: "error",
                    confirmButtonText: "OK",
                });
                return;
            }

            try {
                const response = await axios.get(
                    "http://localhost:3000/cart/items",
                    {
                        params: { userId },
                    }
                );

                setCartItems(response.data);
            } catch (error) {
                console.error("Erro ao buscar itens do carrinho:", error);
                Swal.fire({
                    title: "Erro!",
                    text: "Ocorreu um erro ao carregar os itens do carrinho.",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            }
        };

        fetchCartItems();
    }, []);

    const handleCheckout = () => {
        // Add your checkout logic here
        Swal.fire({
            title: "Compra Finalizada!",
            text: "Sua compra foi realizada com sucesso.",
            icon: "success",
            confirmButtonText: "OK",
        });
    };

    const handleRemoveItem = async (itemId) => {
        try {
            const userId = localStorage.getItem("userId");
            await axios.delete(`http://localhost:3000/cart/items/${itemId}`, {
                params: { userId },
            });
            setCartItems((prevItems) =>
                prevItems.filter((item) => item.id !== itemId)
            );
            Swal.fire({
                title: "Removido!",
                text: "Item removido do carrinho.",
                icon: "success",
                confirmButtonText: "OK",
            });
        } catch (error) {
            console.error("Erro ao remover item do carrinho:", error);
            Swal.fire({
                title: "Erro!",
                text: "Ocorreu um erro ao remover o item do carrinho.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };
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
                        {cartItems.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.product_name}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell>R${item.price.toFixed(2)}</TableCell>
                                <TableCell>
                                    R${(item.price * item.quantity).toFixed(2)}
                                </TableCell>
                                <TableCell>
                                    <ButtonContainer>
                                        <RemoveButton
                                            onClick={() =>
                                                handleRemoveItem(item.id)
                                            }
                                        >
                                            Remover
                                        </RemoveButton>
                                    </ButtonContainer>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
                <CheckoutButton onClick={handleCheckout}>
                    Finalizar Compra
                </CheckoutButton>
            </Container>
            <Footer />
        </>
}

export default Cart;
