import { STORE_INFO } from './constants';

/**
 * Genera un mensaje de WhatsApp formateado con el pedido
 * @param {Array} cartItems - Items del carrito
 * @param {Object} customerInfo - Información del cliente
 * @returns {string} URL de WhatsApp con el mensaje
 */
export const generateWhatsAppMessage = (cartItems, customerInfo) => {
    let message = `🛒 *Nuevo Pedido - ${STORE_INFO.name}*\n\n`;

    // Información del cliente
    message += `👤 *Cliente:* ${customerInfo.name}\n`;
    message += `📱 *Teléfono:* ${customerInfo.phone}\n`;
    if (customerInfo.email) {
        message += `📧 *Email:* ${customerInfo.email}\n`;
    }
    message += `\n*Detalle del Pedido:*\n`;

    // Detalle de productos
    let total = 0;
    cartItems.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        message += `▫️ ${item.quantity}x ${item.name} (Q${item.price})\n`;
    });

    message += `\n💰 *Total a Pagar: Q${total.toLocaleString()}*\n`;
    message += `\n📍 *Entrega:* ${STORE_INFO.pickupLocation}`;

    const encodedMessage = encodeURIComponent(message);

    // Retornar URL de WhatsApp
    return `https://wa.me/${STORE_INFO.phone}?text=${encodedMessage}`;
};

/**
 * Abre WhatsApp con el mensaje del pedido
 * @param {Array} cartItems - Items del carrito
 * @param {Object} customerInfo - Información del cliente
 */
export const sendWhatsAppOrder = (cartItems, customerInfo) => {
    const url = generateWhatsAppMessage(cartItems, customerInfo);
    window.open(url, '_blank');
};
