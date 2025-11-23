# Manos a la Obra - Tienda Online

## 🛍️ Descripción
Tienda online para vender dispositivos reacondicionados en el Colegio Manos a la Obra, Guatemala.

## 📦 Productos Incluidos
- iPad Air 2 - Excelente (Q485)
- iPad Air 2 - Buen Estado (Q375)
- Android TV Box Steren (Q200)

## 🚀 Instalación

### 1. Instalar dependencias
```bash
npm install
```

### 2. Iniciar servidor de desarrollo
```bash
npm run dev
```

### 3. Abrir en navegador
El proyecto se abrirá automáticamente en `http://localhost:5173`

## ⚙️ Configuración

### Cambiar número de WhatsApp
Editar el archivo `src/utils/constants.js`:
```javascript
export const STORE_INFO = {
  phone: '50212345678', // Cambiar por tu número (formato: 502 + 8 dígitos)
  // ...
};
```

### Credenciales de Administrador
Por defecto:
- Usuario: `admin`
- Contraseña: `admin123`

Para cambiar, editar `src/utils/constants.js`:
```javascript
export const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
};
```

## 📱 Características

✅ Carrito de compras funcional  
✅ Integración con WhatsApp  
✅ Panel de administración  
✅ Diseño responsive (móvil primero)  
✅ Gradientes azul-verde corporativos  
✅ Animaciones suaves  
✅ Persistencia de datos en localStorage  

## 🎨 Paleta de Colores
- **Azul primario**: #1890ff
- **Verde secundario**: #13c2c2

## 📂 Estructura del Proyecto
```
proyecto/
├── public/
│   └── images/          # Logos e íconos
├── src/
│   ├── components/      # Componentes React
│   ├── hooks/           # Custom hooks
│   ├── utils/           # Utilidades y constantes
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Punto de entrada
└── package.json
```

## 🔧 Tecnologías
- React 18
- Vite
- Tailwind CSS
- JavaScript ES6+

## 📝 Notas Importantes
- Los datos se guardan en localStorage del navegador
- El número de WhatsApp debe estar en formato internacional (502 + número)
- Las imágenes de productos se pueden cambiar en el panel de administración

## 🤝 Soporte
Para soporte, contactar al administrador del colegio.

---
Desarrollado para Colegio Manos a la Obra, Guatemala 🇬🇹
