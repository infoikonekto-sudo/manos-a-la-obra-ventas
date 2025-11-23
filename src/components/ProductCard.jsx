import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
    const handleAddToCart = () => {
        onAddToCart(product);
    };

    return (
        <div className="bg-white rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 animate-slide-up">
            <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                        e.target.src = '/images/logo-mao.png';
                    }}
                />

                {product.stock <= 5 && product.stock > 0 && (
                    <div className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        ¡Últimas {product.stock} unidades!
                    </div>
                )}

                {product.stock === 0 && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-red-500 text-white font-bold px-4 py-2 rounded-lg">
                            Agotado
                        </span>
                    </div>
                )}

                {product.category && (
                    <div className="absolute top-3 left-3 bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {product.category}
                    </div>
                )}
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2 line-clamp-2">
                    {product.name}
                </h3>

                {product.description && (
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                    </p>
                )}

                <div className="flex items-center justify-between mt-4">
                    <div>
                        <span className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                            Q{product.price.toLocaleString()}
                        </span>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        disabled={product.stock === 0}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${product.stock > 0
                            ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-lg hover:scale-105'
                            : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                            }`}
                    >
                        {product.stock > 0 ? (
                            <span className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Agregar
                            </span>
                        ) : (
                            'Agotado'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
