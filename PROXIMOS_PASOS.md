# 🚀 Próximos Pasos: Desplegar a Vercel

## ✅ Verificación Local

Antes de desplegar, verifica que todo funcione:

- [ ] Productos se cargan desde Firebase
- [ ] Puedes agregar productos desde admin
- [ ] Puedes editar productos desde admin
- [ ] Puedes eliminar productos desde admin
- [ ] Al comprar, el stock se actualiza
- [ ] Abre en otro navegador/dispositivo y verifica sincronización

---

## 📤 Despliegue a Vercel

### Paso 1: Configurar Variables de Entorno en Vercel

1. Ve a: https://vercel.com
2. Selecciona tu proyecto: `manos-a-la-obra-ventas`
3. Settings → Environment Variables
4. Agrega estas variables:

```
VITE_FIREBASE_API_KEY = AIzaSyCsG3XPwJMJuKbnOn4oYODSXwm3yw51Tbc
VITE_FIREBASE_AUTH_DOMAIN = mao-ventas.firebaseapp.com
VITE_FIREBASE_PROJECT_ID = mao-ventas
VITE_FIREBASE_STORAGE_BUCKET = mao-ventas.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID = 847735585470
VITE_FIREBASE_APP_ID = 1:847735585470:web:955680453ba55237e83cef
```

### Paso 2: Hacer Commit y Push

```bash
git add .
git commit -m "Implementar Firebase para sincronización de inventario"
git push
```

### Paso 3: Verificar Despliegue

Vercel desplegará automáticamente. Espera 2-3 minutos.

### Paso 4: Probar en Producción

1. Abre tu URL de Vercel
2. Verifica que los productos cargan
3. Prueba comprar en un dispositivo
4. Verifica que se actualiza en otro dispositivo

---

## 🎉 ¡Listo!

Tu aplicación ahora tiene sincronización en tiempo real entre todos los dispositivos.
