import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';
import { useCart } from './hooks/useCart';
import { useAuth } from './hooks/useAuth';
import { INITIAL_PRODUCTS } from './utils/constants';

function App() {
    const [products, setProducts] = useState(() => {
        const savedProducts = localStorage.getItem('products');
        return savedProducts ? JSON.parse(savedProducts) : INITIAL_PRODUCTS;
    });

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [isAdminOpen, setIsAdminOpen] = useState(false);

    const { cart, addToCart, updateQuantity, removeFromCart, clearCart, getTotal, getTotalItems } = useCart();
    const { isAuthenticated, login, logout } = useAuth();

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    const handleAddProduct = (product) => {
        setProducts([...products, product]);
    };

    const handleUpdateProduct = (updatedProduct) => {
        setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    };

    const handleDeleteProduct = (productId) => {
        if (confirm('¿Estás seguro de eliminar este producto?')) {
            setProducts(products.filter(p => p.id !== productId));
        }
    };

    const handleCheckout = () => {
        setIsCartOpen(false);
        setIsCheckoutOpen(true);
    };

    const handlePurchaseCompleted = () => {
        // Actualizar stock localmente
        const updatedProducts = products.map(product => {
            const cartItem = cart.find(item => item.id === product.id);
            if (cartItem) {
                return { ...product, stock: product.stock - cartItem.quantity };
            }
            return product;
        });

        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        clearCart();
        setIsCheckoutOpen(false);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            <Header
                cartItemsCount={getTotalItems()}
                onCartClick={() => setIsCartOpen(true)}
                onAdminClick={() => setIsAdminOpen(true)}
            />

            <main>
                <Hero />

                <section id="productos" className="container mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">
                        Nuestros Productos Disponibles
                    </h2>

                    {products.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-slate-500 text-lg">No hay productos disponibles</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onAddToCart={addToCart}
                                />
                            ))}
                        </div>
                    )}
                </section>
            </main>

            <Footer />

            <Cart
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cart={cart}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
                onCheckout={handleCheckout}
                total={getTotal()}
            />

            <Checkout
                isOpen={isCheckoutOpen}
                onClose={() => setIsCheckoutOpen(false)}
                cart={cart}
                total={getTotal()}
                onPurchaseCompleted={handlePurchaseCompleted}
            />

            <AdminPanel
                isOpen={isAdminOpen}
                onClose={() => setIsAdminOpen(false)}
                isAuthenticated={isAuthenticated}
                onLogin={login}
                onLogout={logout}
                products={products}
                onAddProduct={handleAddProduct}
                onUpdateProduct={handleUpdateProduct}
                onDeleteProduct={handleDeleteProduct}
            />
        </div>
    );
}

export default App;
