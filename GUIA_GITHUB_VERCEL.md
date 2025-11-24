# 📝 Guía Rápida: Subir a GitHub y Desplegar en Vercel

## ✅ Paso 1: Commit Local (COMPLETADO)

Ya hicimos el commit local de tu código ✓

---

## 🌐 Paso 2: Crear Repositorio en GitHub

### **Opción A: Desde el Navegador (Más Fácil)**

1. Ve a: **https://github.com/new**
2. Llena los datos:
   - **Repository name:** `manos-a-la-obra-ventas`
   - **Description:** (opcional) `Aplicación de ventas`
   - **Public** o **Private:** Elige lo que prefieras
   - ⚠️ **NO marques** "Initialize this repository with a README"
3. Haz clic en **"Create repository"**

---

## 📤 Paso 3: Conectar y Subir

GitHub te mostrará comandos. Copia y pega estos en tu terminal:

### **Comandos a Ejecutar:**

```bash
# 1. Conectar con GitHub (reemplaza TU_USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/manos-a-la-obra-ventas.git

# 2. Renombrar rama a main
git branch -M main

# 3. Subir código
git push -u origin main
```

**IMPORTANTE:** Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub.

---

## 🔑 Si te Pide Autenticación

GitHub puede pedirte usuario y contraseña:

### **Opción 1: Token de Acceso Personal (Recomendado)**

1. Ve a: **https://github.com/settings/tokens**
2. Click en **"Generate new token"** → **"Generate new token (classic)"**
3. Dale un nombre: `Vercel Deploy`
4. Marca: **repo** (todos los permisos de repo)
5. Click en **"Generate token"**
6. **COPIA EL TOKEN** (solo se muestra una vez)
7. Cuando Git pida contraseña, pega el token

### **Opción 2: GitHub CLI**

```bash
# Instalar GitHub CLI
winget install GitHub.cli

# Autenticarse
gh auth login
```

---

## 🚀 Paso 4: Conectar con Vercel

Una vez que el código esté en GitHub:

1. Ve a: **https://vercel.com**
2. Inicia sesión (usa la misma cuenta de GitHub)
3. Click en **"Add New..."** → **"Project"**
4. Click en **"Import Git Repository"**
5. Busca: `manos-a-la-obra-ventas`
6. Click en **"Import"**
7. Click en **"Deploy"**

---

## ⏱️ Esperar Despliegue

Vercel hará:
1. ✅ Clonar repositorio
2. ✅ Instalar dependencias
3. ✅ Hacer build
4. ✅ Desplegar

Tiempo: 1-3 minutos

---

## 🎉 Obtener URL

Una vez completado:

```
✅ Production: https://manos-a-la-obra-ventas.vercel.app
```

**¡Copia esa URL!**

---

## ✏️ Actualizar manosalaobra.html

1. Abre: `c:\Users\ludin\Documents\ikonekto (2)\manosalaobra.html`
2. Línea 67, reemplaza:

```html
<a href="https://manos-a-la-obra-ventas.vercel.app" class="mao-btn" target="_blank" rel="noopener noreferrer">Acceder</a>
```

3. Guarda y sube a cPanel

---

## 🔄 Actualizaciones Futuras

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

¡Vercel desplegará automáticamente!

---

## 📞 Siguiente Paso

**Ahora mismo:**
1. Ve a https://github.com/new
2. Crea el repositorio `manos-a-la-obra-ventas`
3. Copia los comandos que te muestra GitHub
4. Ejecútalos en tu terminal

¡Te ayudo con cualquier error que aparezca!
