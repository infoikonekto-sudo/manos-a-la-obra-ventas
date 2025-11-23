import React from 'react';

const Cart = ({ isOpen, onClose, cart, onUpdateQuantity, onRemove, onCheckout, total }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="glass-dark max-w-2xl w-full max-h-[90vh] rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-6 text-white">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold flex items-center">
                            <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Carrito de Compras
                        </h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="p-6 overflow-y-auto max-h-[calc(90vh-250px)]">
                    {cart.length === 0 ? (
                        <div className="text-center py-12">
                            <svg className="w-24 h-24 mx-auto text-slate-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <p className="text-slate-400 text-lg">Tu carrito está vacío</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div key={item.id} className="glass p-4 rounded-xl flex items-center space-x-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded-lg"
                                        onError={(e) => {
                                            e.target.src = '/images/logo-mao.png';
                                        }}
                                    />

                                    <div className="flex-1">
                                        <h3 className="font-semibold text-white">{item.name}</h3>
                                        <p className="text-secondary-400 font-bold">Q{item.price.toLocaleString()}</p>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                            className="w-8 h-8 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-200"
                                        >
                                            -
                                        </button>
                                        <span className="w-12 text-center font-semibold text-white">{item.quantity}</span>
                                        <button
                                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                            className="w-8 h-8 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-200"
                                        >
                                            +
                                        </button>
                                    </div>

                                    <div className="text-right">
                                        <p className="font-bold text-white">Q{(item.price * item.quantity).toLocaleString()}</p>
                                    </div>

                                    <button
                                        onClick={() => onRemove(item.id)}
                                        className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors duration-200"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="border-t border-white/10 p-6 bg-slate-900/50">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xl font-semibold text-white">Total:</span>
                            <span className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                                Q{total.toLocaleString()}
                            </span>
                        </div>
                        <button
                            onClick={onCheckout}
                            className="w-full py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            Proceder al Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
