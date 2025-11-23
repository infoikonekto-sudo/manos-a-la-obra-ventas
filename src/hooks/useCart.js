import { useState, useEffect } from 'react';

/**
 * Hook personalizado para manejar el carrito de compras
 */
export const useCart = () => {
    const [cart, setCart] = useState(() => {
        // Cargar carrito desde localStorage
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Guardar carrito en localStorage cuando cambie
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    /**
     * Agregar producto al carrito
     */
    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);

            if (existingItem) {
                // Si ya existe, incrementar cantidad
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Si no existe, agregarlo con cantidad 1
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    /**
     * Remover producto del carrito
     */
    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    /**
     * Actualizar cantidad de un producto
     */
    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    /**
     * Limpiar carrito
     */
    const clearCart = () => {
        setCart([]);
    };

    /**
     * Calcular total del carrito
     */
    const getTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    /**
     * Obtener cantidad total de items
     */
    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotal,
        getTotalItems
    };
};
