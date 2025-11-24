# 🔧 Solución Temporal: Resetear Inventario

## Problema Identificado

El inventario se guarda en `localStorage` (almacenamiento local del navegador), por lo que cada dispositivo tiene su propia copia del stock. Esto causa que:

- Tu computadora muestre "Agotado"
- Los celulares muestren "Disponible"
- No hay sincronización entre dispositivos

## Solución Rápida (Temporal)

### En Cada Dispositivo:

1. Abre la aplicación en el navegador
2. Presiona **F12** (o clic derecho → Inspeccionar)
3. Ve a la pestaña **"Console"**
4. Escribe este comando y presiona Enter:

```javascript
localStorage.clear();
location.reload();
```

Esto limpiará el inventario local y recargará con el inventario inicial.

---

## Solución Permanente: Base de Datos Centralizada

Para que el inventario se sincronice entre todos los dispositivos, necesitas:

### Opción 1: Firebase (Recomendada - Gratis)

**Ventajas:**
- ✅ Gratis hasta cierto límite
- ✅ Sincronización en tiempo real
- ✅ Fácil de implementar

**Cambios necesarios:**
1. Crear proyecto en Firebase
2. Configurar Firestore Database
3. Reemplazar `localStorage` con Firestore
4. El stock se actualizará en todos los dispositivos automáticamente

### Opción 2: Backend Propio (Node.js + MongoDB)

**Ventajas:**
- ✅ Control total
- ✅ Sin límites

**Desventajas:**
- ⚠️ Requiere servidor
- ⚠️ Más complejo

### Opción 3: Supabase (Alternativa a Firebase)

**Ventajas:**
- ✅ Gratis
- ✅ PostgreSQL
- ✅ Fácil de usar

---

## ¿Qué Prefieres?

1. **Solución rápida:** Limpiar localStorage en todos los dispositivos (temporal)
2. **Solución permanente:** Implementar Firebase para sincronización real

---

## Si Eliges Firebase (Recomendado)

Necesitaré:
1. Crear cuenta en Firebase
2. Modificar el código para usar Firestore
3. Redeployar en Vercel

**Tiempo estimado:** 30-45 minutos

¿Quieres que implemente Firebase para solucionar esto permanentemente?
