# 🚀 Guía de Despliegue en Vercel

## ¿Por qué Vercel?

Vercel es la plataforma **perfecta** para aplicaciones React/Vite:
- ✅ Despliegue automático desde GitHub
- ✅ HTTPS gratis
- ✅ CDN global (súper rápido)
- ✅ Actualizaciones automáticas al hacer push
- ✅ **100% gratis** para proyectos personales

---

## 📋 Pasos para Desplegar

### 1️⃣ Crear Cuenta en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"Sign Up"**
3. Regístrate con tu cuenta de GitHub (recomendado)

---

### 2️⃣ Subir Proyecto a GitHub

#### Opción A: Desde la Terminal (Recomendado)

```bash
# 1. Inicializar repositorio Git
cd "c:\Users\ludin\Documents\ikonekto (2)\ventas"
git init

# 2. Agregar todos los archivos
git add .

# 3. Hacer primer commit
git commit -m "Initial commit - Aplicación de ventas"

# 4. Crear repositorio en GitHub y conectar
# Ve a github.com y crea un nuevo repositorio llamado "manos-a-la-obra-ventas"
# Luego ejecuta (reemplaza TU_USUARIO con tu usuario de GitHub):
git remote add origin https://github.com/TU_USUARIO/manos-a-la-obra-ventas.git
git branch -M main
git push -u origin main
```

#### Opción B: Desde GitHub Desktop

1. Descarga [GitHub Desktop](https://desktop.github.com/)
2. Abre GitHub Desktop
3. File → Add Local Repository
4. Selecciona la carpeta `ventas`
5. Haz commit y push

---

### 3️⃣ Conectar Vercel con GitHub

1. Inicia sesión en [vercel.com](https://vercel.com)
2. Haz clic en **"Add New..."** → **"Project"**
3. Selecciona **"Import Git Repository"**
4. Busca tu repositorio `manos-a-la-obra-ventas`
5. Haz clic en **"Import"**

---

### 4️⃣ Configurar el Proyecto en Vercel

Vercel detectará automáticamente que es un proyecto Vite. Verifica que:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

> [!IMPORTANT]
> No necesitas cambiar nada, Vercel lo detecta automáticamente.

Haz clic en **"Deploy"**

---

### 5️⃣ Esperar el Despliegue

Vercel construirá y desplegará tu aplicación automáticamente (toma 1-2 minutos).

Una vez completado, verás:
- ✅ **URL de producción:** `https://manos-a-la-obra-ventas.vercel.app`
- ✅ Vista previa del sitio

---

### 6️⃣ Actualizar Enlace en manosalaobra.html

Una vez que tengas la URL de Vercel, actualiza el enlace en `manosalaobra.html`:

```html
<!-- Antes (local) -->
<a href="ventas/" class="mao-btn">Acceder</a>

<!-- Después (Vercel) -->
<a href="https://manos-a-la-obra-ventas.vercel.app" class="mao-btn" target="_blank">Acceder</a>
```

> [!TIP]
> Agregué `target="_blank"` para que se abra en una nueva pestaña.

---

## 🔄 Actualizaciones Futuras

Cada vez que hagas cambios:

```bash
# 1. Hacer cambios en tu código
# 2. Guardar archivos
# 3. Hacer commit y push
git add .
git commit -m "Descripción de los cambios"
git push

# ¡Vercel desplegará automáticamente! 🎉
```

---

## 🎨 Personalizar Dominio (Opcional)

Si tienes un dominio propio:

1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar DNS

---

## 🔧 Solución de Problemas

### ❌ Error: "Build failed"
**Solución:** Verifica que `package.json` tenga todas las dependencias correctas.

### ❌ Página en blanco
**Solución:** Ya está configurado con `base: '/'` en `vite.config.js`

### ❌ Error 404 en rutas
**Solución:** Ya está configurado con `vercel.json` para manejar React Router

---

## 📊 Ventajas vs cPanel

| Característica | Vercel | cPanel |
|----------------|--------|--------|
| Configuración | Automática | Manual |
| Despliegue | 1 clic | Subir archivos |
| Actualizaciones | Automáticas | Manual |
| HTTPS | Gratis | Depende |
| Velocidad | CDN global | Depende del servidor |
| Costo | Gratis | Depende del plan |

---

## 🎉 ¡Listo!

Una vez desplegado en Vercel:
- Tu app estará disponible 24/7
- Se actualizará automáticamente con cada push
- Tendrás HTTPS gratis
- Será súper rápida gracias al CDN global
