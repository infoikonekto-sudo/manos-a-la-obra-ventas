# 🚀 Guía Paso a Paso: Subir Ventas a Vercel

## Método 1: Vercel CLI (Más Rápido) ⭐

### Paso 1: Instalar Vercel CLI
```bash
npm install -g vercel
```
✅ Ya ejecutado

### Paso 2: Iniciar Sesión en Vercel
```bash
vercel login
```

Te pedirá que elijas un método de login:
- Email
- GitHub
- GitLab
- Bitbucket

**Recomendado:** Elige **Email** o **GitHub**

### Paso 3: Desplegar
```bash
cd "c:\Users\ludin\Documents\ikonekto (2)\ventas"
vercel
```

Vercel te hará algunas preguntas:

**Pregunta 1:** "Set up and deploy?"
- Respuesta: **Y** (Yes)

**Pregunta 2:** "Which scope do you want to deploy to?"
- Respuesta: Selecciona tu cuenta (usa las flechas ↑↓)

**Pregunta 3:** "Link to existing project?"
- Respuesta: **N** (No)

**Pregunta 4:** "What's your project's name?"
- Respuesta: **manos-a-la-obra-ventas** (o el nombre que prefieras)

**Pregunta 5:** "In which directory is your code located?"
- Respuesta: **./** (presiona Enter)

**Pregunta 6:** "Want to override the settings?"
- Respuesta: **N** (No)

### Paso 4: Esperar
Vercel automáticamente:
1. ✅ Detecta que es un proyecto Vite
2. ✅ Instala dependencias (`npm install`)
3. ✅ Hace el build (`npm run build`)
4. ✅ Despliega la aplicación

### Paso 5: Obtener URL
Al finalizar, verás algo como:

```
✅ Production: https://manos-a-la-obra-ventas.vercel.app
```

¡Esa es tu URL! 🎉

---

## Método 2: Desde el Sitio Web de Vercel

### Opción A: Sin GitHub (Drag & Drop)

1. Ve a [vercel.com](https://vercel.com)
2. Crea cuenta / Inicia sesión
3. Click en **"Add New..."** → **"Project"**
4. Click en **"Browse"** o arrastra la carpeta `ventas`
5. Vercel detecta Vite automáticamente
6. Click en **"Deploy"**

### Opción B: Con GitHub

1. Sube tu carpeta `ventas` a GitHub primero
2. Ve a [vercel.com](https://vercel.com)
3. Click en **"Add New..."** → **"Project"**
4. Click en **"Import Git Repository"**
5. Selecciona tu repositorio
6. Click en **"Deploy"**

---

## 📝 Después del Despliegue

### 1. Copiar tu URL
Ejemplo: `https://manos-a-la-obra-ventas.vercel.app`

### 2. Actualizar manosalaobra.html

Abre `c:\Users\ludin\Documents\ikonekto (2)\manosalaobra.html`

Busca la línea 67 y reemplaza:
```html
<!-- Antes: -->
<a href="https://TU-URL-VERCEL.vercel.app" ...>

<!-- Después: -->
<a href="https://manos-a-la-obra-ventas.vercel.app" ...>
```

### 3. Subir manosalaobra.html a cPanel

Sube el archivo actualizado a tu cPanel.

---

## 🌐 Configurar Dominio Personalizado (Opcional)

Si quieres usar `ventas.tudominio.com`:

### En Vercel:
1. Ve a tu proyecto
2. Settings → Domains
3. Click en "Add"
4. Escribe: `ventas.tudominio.com`
5. Click en "Add"

### En tu DNS (cPanel o proveedor de dominio):
Agrega este registro:
```
Tipo: CNAME
Nombre: ventas
Valor: cname.vercel-dns.com
```

Espera 5-60 minutos y ¡listo!

---

## ✅ Checklist Final

- [ ] Instalar Vercel CLI
- [ ] Ejecutar `vercel login`
- [ ] Ejecutar `vercel` en la carpeta ventas
- [ ] Copiar la URL que te da Vercel
- [ ] Actualizar manosalaobra.html con la URL
- [ ] Subir manosalaobra.html a cPanel
- [ ] (Opcional) Configurar dominio personalizado

---

## 🆘 Solución de Problemas

### Error: "Command not found: vercel"
**Solución:** Cierra y abre la terminal de nuevo

### Error: "Build failed"
**Solución:** Verifica que `package.json` esté en la carpeta

### Página en blanco
**Solución:** Ya está configurado correctamente con `base: '/'`

---

## 📞 Siguiente Paso

Ejecuta estos comandos en orden:

```bash
# 1. Login
vercel login

# 2. Desplegar
vercel
```

¡Y listo! Tu aplicación estará en línea en menos de 5 minutos.
