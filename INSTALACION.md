# Instrucciones de Instalación

## Paso 1: Copiar las imágenes
Necesitas copiar las imágenes generadas al directorio público:

```powershell
# Crear directorio si no existe
New-Item -ItemType Directory -Force -Path "public/images"

# Copiar imágenes (ajusta las rutas según las imágenes generadas)
Copy-Item "C:/Users/Usuario/.gemini/antigravity/brain/447ca10e-5885-45c4-bb44-5a506c5a29ef/logo_store_*.png" "public/images/logo.png"
Copy-Item "C:/Users/Usuario/.gemini/antigravity/brain/447ca10e-5885-45c4-bb44-5a506c5a29ef/facebook_icon_*.png" "public/images/facebook.png"
Copy-Item "C:/Users/Usuario/.gemini/antigravity/brain/447ca10e-5885-45c4-bb44-5a506c5a29ef/instagram_icon_*.png" "public/images/instagram.png"
Copy-Item "C:/Users/Usuario/.gemini/antigravity/brain/447ca10e-5885-45c4-bb44-5a506c5a29ef/whatsapp_icon_*.png" "public/images/whatsapp.png"
```

## Paso 2: Configurar número de WhatsApp
Edita `src/utils/constants.js` y cambia el número de teléfono:

```javascript
export const STORE_INFO = {
  phone: '50212345678', // Cambiar por tu número real
  // ...
};
```

## Paso 3: Ejecutar el proyecto
```bash
npm run dev
```

El proyecto se abrirá en http://localhost:5173
