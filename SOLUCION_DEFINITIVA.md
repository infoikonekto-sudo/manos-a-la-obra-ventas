# 🚨 SOLUCIÓN DEFINITIVA

## Problema Actual
- Productos tardan 45+ segundos en cargar
- No se pueden eliminar productos
- Migración se ejecuta cada vez

## Solución: Agregar Productos Manualmente

### Paso 1: Abrir la Aplicación
http://localhost:5173

### Paso 2: Ir al Panel de Admin
1. Click en el ícono de Admin (arriba derecha)
2. Login:
   - Usuario: `admin`
   - Contraseña: `admin123`

### Paso 3: Agregar Producto de Prueba
1. En "Agregar Nuevo Producto", llena:
   - **Nombre:** Curso de Ventas
   - **Precio:** 499
   - **Categoría:** Cursos
   - **Stock:** 50
   - **Descripción:** Curso completo de técnicas de ventas
   - **Imagen:** https://via.placeholder.com/400x300?text=Curso+Ventas

2. Click "Agregar Producto"

### Paso 4: Verificar
- El producto debería aparecer instantáneamente
- Intenta eliminarlo
- Intenta editarlo

## Si Aún Hay Errores

Abre la consola del navegador (F12) y copia el error completo que aparece.

## Verificación de Firebase

Ve a Firebase Console:
1. https://console.firebase.google.com
2. Selecciona tu proyecto "mao-ventas"
3. Firestore Database
4. Verifica que veas la colección "products"
