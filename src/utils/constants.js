// Información de la tienda
export const STORE_INFO = {
    name: 'Manos a la Obra',
    phone: '50237453485', // Formato: 502 (Guatemala) + número (actualizar con el real)
    pickupLocation: 'Colegio Manos a la Obra',
    warranty: '1 mes',
    features: [
        'Garantía de 1 mes',
        'Recoger en el colegio',
        'Productos testeados'
    ]
};

// Productos iniciales - Catálogo Guatemala
export const INITIAL_PRODUCTS = [
    {
        id: 1,
        name: 'iPad Air 2 - Excelente',
        price: 485,
        description: 'Incluye caja + cargador original. Estado como nuevo.',
        image: '/images/ipad-air.png',
        stock: 3,
        category: 'Tablets'
    },
    {
        id: 2,
        name: 'iPad Air 2 - Buen Estado',
        price: 375,
        description: 'Incluye cable de carga únicamente. Totalmente funcional.',
        image: '/images/ipad-air.png',
        stock: 5,
        category: 'Tablets'
    },
    {
        id: 3,
        name: 'Android TV Box Steren',
        price: 200,
        description: 'Completo con todos los accesorios.',
        image: '/images/tvbox.png',
        stock: 8,
        category: 'Electrónica'
    }
];

// Credenciales admin (en producción usar backend seguro)
export const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
};

// Redes sociales
export const SOCIAL_MEDIA = {
    facebook: 'https://www.facebook.com/colegiosMAO/?locale=es_LA',
    instagram: 'https://www.instagram.com/colegiosmanosalaobra/?hl=es',
    tiktok: 'https://www.tiktok.com/@colegiosmanosalaobra',
    whatsapp: `https://wa.me/${STORE_INFO.phone}`
};
