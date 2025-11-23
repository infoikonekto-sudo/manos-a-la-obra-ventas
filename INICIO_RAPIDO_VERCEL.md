# 🚀 Inicio Rápido - Despliegue en Vercel

## Opción 1: Despliegue Directo (Sin GitHub)

La forma **MÁS RÁPIDA** de desplegar:

### Paso 1: Instalar Vercel CLI
```bash
npm install -g vercel
```

### Paso 2: Desplegar
```bash
cd "c:\Users\ludin\Documents\ikonekto (2)\ventas"
vercel
```

Sigue las instrucciones:
1. **Set up and deploy?** → Yes
2. **Which scope?** → Tu cuenta
3. **Link to existing project?** → No
4. **Project name?** → manos-a-la-obra-ventas
5. **Directory?** → ./ (presiona Enter)
6. **Override settings?** → No

¡Listo! Te dará una URL como: `https://manos-a-la-obra-ventas.vercel.app`

---

## Opción 2: Desde GitHub (Recomendado)

### Paso 1: Subir a GitHub
```bash
cd "c:\Users\ludin\Documents\ikonekto (2)\ventas"
git init
git add .
git commit -m "Initial commit"
```

Crea un repositorio en GitHub y luego:
```bash
git remote add origin https://github.com/TU_USUARIO/manos-a-la-obra-ventas.git
git branch -M main
git push -u origin main
```

### Paso 2: Conectar con Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Click en "Add New..." → "Project"
3. Importa tu repositorio
4. Click en "Deploy"

---

## 📝 Actualizar el Enlace

Una vez desplegado, actualiza `manosalaobra.html`:

```html
<a href="https://TU-URL.vercel.app" class="mao-btn" target="_blank">Acceder</a>
```

---

## 🔄 Actualizaciones Futuras

### Con Vercel CLI:
```bash
vercel --prod
```

### Con GitHub:
```bash
git add .
git commit -m "Actualización"
git push
```
¡Vercel despliega automáticamente!
