# 📋 Resumen de Configuración - Despliegue en cPanel

## ✅ Cambios Completados

### 1. Enlace Actualizado
**Archivo:** `manosalaobra.html` (línea 66)
```html
<a href="ventas/" class="mao-btn">Acceder</a>
```

### 2. .htaccess Configurado
**Archivo:** `ventas/dist/.htaccess` (línea 11)
```apache
RewriteBase /ventas/
```

### 3. Guía de Despliegue Actualizada
**Archivo:** `DESPLIEGUE_CPANEL.md`
- Instrucciones específicas para subcarpeta
- Estructura visual de carpetas
- Pasos de verificación

---

## 🚀 Instrucciones de Despliegue

### Paso 1: Preparar Archivos Locales
Los archivos están listos en: `ventas/dist/`

### Paso 2: Subir a cPanel
1. Accede a cPanel → Administrador de Archivos
2. Ve a `public_html/`
3. Crea carpeta `ventas`
4. Sube TODO el contenido de `dist/` a `public_html/ventas/`

### Paso 3: Verificar
1. Visita `tudominio.com/manosalaobra.html`
2. Haz clic en "Acceder" de MAO Ventas
3. Debe redirigir a `tudominio.com/ventas/`

---

## 📁 Estructura Final en cPanel

```
public_html/
├── index.html
├── manosalaobra.html      ← Enlace actualizado
├── about.html
├── styles.css
├── images/
└── ventas/                ← Crear y subir aquí
    ├── index.html
    ├── .htaccess          ← Configurado para /ventas/
    ├── assets/
    └── images/
```

---

## 🎯 URLs Finales

- **Sitio principal:** `tudominio.com`
- **Página MAO:** `tudominio.com/manosalaobra.html`
- **App Ventas:** `tudominio.com/ventas/`

---

## ✅ Todo Listo

Solo falta subir los archivos de `dist/` a cPanel en la carpeta `ventas/`.
