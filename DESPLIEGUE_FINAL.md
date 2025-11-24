# 🚀 Despliegue a Vercel con Supabase

## Paso 1: Subir Código a GitHub ✅

El código ya está en GitHub. Ahora Vercel lo desplegará automáticamente.

## Paso 2: Configurar Variables de Entorno en Vercel

1. Ve a: https://vercel.com
2. Selecciona tu proyecto: `manos-a-la-obra-ventas`
3. **Settings** → **Environment Variables**
4. Agrega estas 2 variables:

```
VITE_SUPABASE_URL = https://jqkhhodlrdgpypudahig.supabase.co
VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impxa2hob2RscmRncHlwdWRhaGlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5NzEyOTcsImV4cCI6MjA3OTU0NzI5N30.XlvkPsYF7EmroDfuja4ku9Be3PJNYV4riR_RBY11bHk
```

5. Para cada variable:
   - Click **"Add New"**
   - Name: `VITE_SUPABASE_URL`
   - Value: `https://jqkhhodlrdgpypudahig.supabase.co`
   - Environment: Marca **Production**, **Preview**, y **Development**
   - Click **"Save"**

6. Repite para `VITE_SUPABASE_ANON_KEY`

## Paso 3: Redesplegar

Después de agregar las variables:
1. Ve a **Deployments**
2. Click en los 3 puntos del último deployment
3. Click **"Redeploy"**

O simplemente espera 2-3 minutos - Vercel desplegará automáticamente con el push que acabamos de hacer.

## Paso 4: Verificar

1. Abre tu URL de Vercel (ej: `https://manos-a-la-obra-ventas.vercel.app`)
2. Deberías ver los productos de Supabase
3. Prueba agregar/editar/eliminar desde admin
4. Abre en otro dispositivo y verifica sincronización en tiempo real

## 🎉 ¡Listo!

Tu aplicación ahora tiene:
- ✅ Base de datos PostgreSQL real (Supabase)
- ✅ Sincronización en tiempo real entre dispositivos
- ✅ Desplegada en Vercel
- ✅ Accesible desde cualquier lugar
