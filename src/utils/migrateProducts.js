// Script para migrar productos iniciales a Firebase
// Ejecutar una sola vez para poblar la base de datos

import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase.config';
import { INITIAL_PRODUCTS } from '../utils/constants';

export const migrateInitialProducts = async () => {
    try {
        // Verificar si ya hay productos
        const productsCol = collection(db, 'products');
        const snapshot = await getDocs(productsCol);

        if (snapshot.empty) {
            console.log('Migrando productos iniciales a Firebase...');

            // Agregar cada producto
            const promises = INITIAL_PRODUCTS.map(product =>
                addDoc(productsCol, product)
            );

            await Promise.all(promises);
            console.log('✅ Productos migrados exitosamente');
            return true;
        } else {
            console.log('Los productos ya existen en Firebase');
            return false;
        }
    } catch (error) {
        console.error('Error migrando productos:', error);
        throw error;
    }
};
