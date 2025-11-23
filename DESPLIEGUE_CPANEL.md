# 🚀 Guía de Despliegue en cPanel

## 📋 Pasos para Subir tu Aplicación React a cPanel

### 1️⃣ Generar el Build de Producción

Antes de subir a cPanel, necesitas generar la versión compilada de tu aplicación:

```bash
npm run build
```

Esto creará/actualizará la carpeta `dist` con todos los archivos optimizados para producción.

---

### 2️⃣ Archivos que Debes Subir a cPanel

Sube **SOLO** el contenido de la carpeta `dist` a tu servidor cPanel:

```
dist/
├── index.html          ← Archivo principal
├── .htaccess          ← Configuración del servidor (IMPORTANTE)
├── assets/            ← Carpeta con JS y CSS compilados
│   ├── index-CVJcJiU9.js
│   └── index-P2r2RIZx.css
└── images/            ← Carpeta de imágenes (si existe)
```

> [!IMPORTANT]
> **NO subas** la carpeta `ventas` completa, ni `src`, ni `node_modules`. Solo el contenido de `dist`.

---

### 3️⃣ Dónde Subir los Archivos en cPanel

> [!IMPORTANT]
> Tu aplicación está configurada para funcionar en la subcarpeta `/ventas/`

**Estructura requerida en cPanel:**

```
public_html/
├── index.html              ← Tu sitio principal de Ikonekto
├── manosalaobra.html       ← Página con enlace a ventas
├── about.html
├── styles.css
├── images/
└── ventas/                 ← AQUÍ subes el contenido de dist/
    ├── index.html          ← De dist/index.html
    ├── .htaccess           ← De dist/.htaccess
    ├── assets/             ← De dist/assets/
    └── images/             ← De dist/images/ (si existe)
```

**Pasos:**
1. En cPanel, ve al Administrador de Archivos
2. Navega a `public_html/`
3. Crea una carpeta llamada `ventas`
4. Entra a la carpeta `ventas/`
5. Sube **TODO el contenido** de tu carpeta local `dist/`

**URL final:** `tudominio.com/ventas/`

---

### 4️⃣ Cómo Funciona el Enlace

Desde tu página `manosalaobra.html`, el botón "Acceder" de MAO Ventas ahora apunta a:

```html
<a href="ventas/">Acceder</a>
```

Cuando un usuario haga clic:
1. Se redirige a `tudominio.com/ventas/`
2. El servidor carga `ventas/index.html`
3. La aplicación React se inicia
4. React Router maneja la navegación interna

---

### 5️⃣ Cómo Subir los Archivos

#### Método 1: Administrador de Archivos de cPanel
1. Inicia sesión en tu cPanel
2. Ve a **Administrador de archivos**
3. Navega a `public_html/` (o la carpeta que elijas)
4. Haz clic en **Cargar**
5. Selecciona todos los archivos de la carpeta `dist`
6. Espera a que se complete la carga

#### Método 2: FTP (FileZilla, WinSCP, etc.)
1. Conecta por FTP a tu servidor
2. Navega a `public_html/`
3. Arrastra todos los archivos de `dist` a la carpeta del servidor

---

### 5️⃣ Verificar que Funcione

1. Abre tu navegador
2. Ve a tu sitio: `tudominio.com/manosalaobra.html`
3. Haz clic en el botón **"Acceder"** de MAO Ventas
4. Deberías ser redirigido a `tudominio.com/ventas/`
5. La aplicación React debe cargar correctamente

---

## 🔧 Solución de Problemas Comunes

### ❌ Error 404 al recargar la página
**Causa**: El archivo `.htaccess` no se subió o no está configurado correctamente.

**Solución**:
- Verifica que el archivo `.htaccess` esté en la misma carpeta que `index.html`
- Asegúrate de que `RewriteBase` apunte a la ruta correcta

### ❌ Página en blanco
**Causa**: Rutas incorrectas en los archivos.

**Solución**:
- Verifica que la configuración de Vite tenga `base: './'`
- Regenera el build con `npm run build`

### ❌ Archivos CSS/JS no cargan (Error 404)
**Causa**: La carpeta `assets` no se subió correctamente.

**Solución**:
- Verifica que la carpeta `assets` esté en el servidor
- Revisa que los archivos `.js` y `.css` estén dentro de `assets/`

### ❌ Error 500 Internal Server Error
**Causa**: Problema con el archivo `.htaccess`.

**Solución**:
- Verifica que el archivo `.htaccess` no tenga errores de sintaxis
- Contacta a tu proveedor de hosting para verificar que `mod_rewrite` esté habilitado

---

## 📝 Checklist Final

Antes de considerar el despliegue completo, verifica:

- [ ] Ejecutaste `npm run build` localmente
- [ ] Subiste el contenido de `dist/` (no la carpeta `dist` misma)
- [ ] El archivo `.htaccess` está en el servidor
- [ ] La carpeta `assets/` está en el servidor
- [ ] Ajustaste `RewriteBase` si usas una subcarpeta
- [ ] Probaste la aplicación en el navegador
- [ ] Probaste recargar una ruta interna (para verificar el routing)

---

## 🎯 Estructura Final en cPanel

```
public_html/                    ← Carpeta raíz de tu dominio
├── index.html                  ← Sitio principal de Ikonekto
├── manosalaobra.html           ← Página con enlace a ventas
├── about.html
├── styles.css
├── images/
└── ventas/                     ← Aplicación React de ventas
    ├── index.html              ← Aplicación React
    ├── .htaccess               ← Configuración del servidor
    ├── assets/                 ← Archivos compilados
    │   ├── index-CVJcJiU9.js
    │   └── index-P2r2RIZx.css
    └── images/                 ← Imágenes (si existen)
```

---

## 🔄 Actualizaciones Futuras

Cada vez que hagas cambios en tu aplicación:

1. Ejecuta `npm run build` localmente
2. Sube los archivos actualizados de `dist/` a cPanel
3. Limpia la caché del navegador (Ctrl + F5)

---

## 📞 Soporte Adicional

Si tienes problemas:
- Verifica los logs de error en cPanel
- Revisa la consola del navegador (F12)
- Contacta a tu proveedor de hosting para verificar configuraciones del servidor
