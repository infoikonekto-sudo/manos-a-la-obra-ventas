// Script para ejecutar MANUALMENTE en la consola del navegador
// Esto migrará los productos iniciales a Firebase UNA SOLA VEZ

import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase.config';

const INITIAL_PRODUCTS = [
    {
        id: 1,
        name: 'Curso Completo de Ventas',
        price: 499,
        description: 'Aprende las mejores técnicas de ventas y cierre de negocios',
        image: '/images/curso-ventas.jpg',
        stock: 50,
        category: 'Cursos'
    }
];

async function migrateProducts() {
    try {
        const productsCol = collection(db, 'products');
        const snapshot = await getDocs(productsCol);

        if (snapshot.empty) {
            console.log('Migrando productos...');

            for (const product of INITIAL_PRODUCTS) {
                const { id, ...productData } = product; // Remover el ID numérico
                await addDoc(productsCol, productData);
            }

            console.log('✅ Productos migrados exitosamente');
        } else {
            console.log('Los productos ya existen en Firebase');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Ejecutar
migrateProducts();
