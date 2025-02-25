import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import MainPage from './pages/MainPage/MainPage';
import Register from './pages/Register/Register';
import ProductPage from './pages/ProductPage/ProductPage';
import GlobalStyle from './styles/global'; // Importando os estilos globais
import Admin from './pages/Admin/Admin';
import Cart from "./pages/Cart/Cart";
import ProtectedRoute from './components/ProtectedRoute';


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <Admin />
                        </ProtectedRoute>
                    }
                />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);