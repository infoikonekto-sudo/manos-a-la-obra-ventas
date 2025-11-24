import { useState, useEffect } from 'react';
import { subscribeToProducts, updateProduct as updateProductService, addProduct as addProductService, deleteProduct as deleteProductService } from '../services/supabaseService';

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        // Suscribirse a cambios en tiempo real
        const unsubscribe = subscribeToProducts((updatedProducts) => {
            setProducts(updatedProducts);
            setLoading(false);
        });

        // Cleanup: desuscribirse cuando el componente se desmonte
        return () => unsubscribe();
    }, []);

    const addProduct = async (product) => {
        try {
            await addProductService(product);
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    const updateProduct = async (productId, productData) => {
        try {
            await updateProductService(productId, productData);
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    const deleteProduct = async (productId) => {
        try {
            await deleteProductService(productId);
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    return {
        products,
        loading,
        error,
        addProduct,
        updateProduct,
        deleteProduct
    };
};
