import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    onSnapshot
} from 'firebase/firestore';
import { db } from '../firebase.config';

const PRODUCTS_COLLECTION = 'products';

// Obtener todos los productos
export const getProducts = async () => {
    try {
        const productsCol = collection(db, PRODUCTS_COLLECTION);
        const productSnapshot = await getDocs(productsCol);
        const productList = productSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return productList;
    } catch (error) {
        console.error('Error getting products:', error);
        throw error;
    }
};

// Agregar un nuevo producto
export const addProduct = async (product) => {
    try {
        const docRef = await addDoc(collection(db, PRODUCTS_COLLECTION), product);
        return { id: docRef.id, ...product };
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};

// Actualizar un producto
export const updateProduct = async (productId, productData) => {
    try {
        // Asegurar que productId es un string
        const id = String(productId);
        const productRef = doc(db, PRODUCTS_COLLECTION, id);
        await updateDoc(productRef, productData);
        return { id, ...productData };
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

// Eliminar un producto
export const deleteProduct = async (productId) => {
    try {
        // Asegurar que productId es un string
        const id = String(productId);
        await deleteDoc(doc(db, PRODUCTS_COLLECTION, id));
        return id;
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};

// Actualizar solo el stock de un producto
export const updateProductStock = async (productId, newStock) => {
    try {
        // Asegurar que productId es un string
        const id = String(productId);
        const productRef = doc(db, PRODUCTS_COLLECTION, id);
        await updateDoc(productRef, { stock: newStock });
        return true;
    } catch (error) {
        console.error('Error updating stock:', error);
        throw error;
    }
};

// Suscribirse a cambios en tiempo real
export const subscribeToProducts = (callback) => {
    const productsCol = collection(db, PRODUCTS_COLLECTION);

    return onSnapshot(productsCol, (snapshot) => {
        const products = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        // Ordenar localmente por nombre
        products.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
        callback(products);
    }, (error) => {
        console.error('Error in products subscription:', error);
    });
};

export default {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    updateProductStock,
    subscribeToProducts
};
