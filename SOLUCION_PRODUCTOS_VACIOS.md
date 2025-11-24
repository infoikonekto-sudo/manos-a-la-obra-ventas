# 🔧 Solución: No Hay Productos

## Problema
Al desactivar la migración automática, Firebase quedó vacío.

## Solución Rápida

### Opción 1: Agregar Productos desde el Admin

1. Abre la aplicación: http://localhost:5173
2. Click en el ícono de Admin (arriba a la derecha)
3. Login:
   - Usuario: `admin`
   - Contraseña: `admin123`
4. Agrega productos manualmente

### Opción 2: Ejecutar Migración Manual (Más Rápido)

1. Abre la consola del navegador (F12)
2. Ve a la pestaña "Console"
3. Copia y pega este código:

```javascript
// Copiar TODO este código en la consola
const { collection, addDoc } = await import('firebase/firestore');
const { db } = await import('./src/firebase.config.js');

const productos = [
    {
        name: 'Curso Completo de Ventas',
        price: 499,
        description: 'Aprende las mejores técnicas de ventas y cierre de negocios',
        image: '/images/curso-ventas.jpg',
        stock: 50,
        category: 'Cursos'
    }
];

for (const producto of productos) {
    await addDoc(collection(db, 'products'), producto);
}

console.log('✅ Productos agregados');
location.reload();
```

4. Presiona Enter
5. La página se recargará con los productos

### Opción 3: Reactivar Migración Temporalmente

Si prefieres, puedo reactivar la migración automática solo por esta vez.

## ¿Qué Opción Prefieres?

1. Agregar productos manualmente desde admin
2. Ejecutar script en consola
3. Reactivar migración temporal
