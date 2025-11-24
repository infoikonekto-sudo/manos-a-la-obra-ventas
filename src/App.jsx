import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';
import { useCart } from './hooks/useCart';
import { useAuth } from './hooks/useAuth';
import { useProducts } from './hooks/useProducts';
import { updateProductStock } from './services/supabaseService';

function App() {
    const { products, loading, error, addProduct, updateProduct, deleteProduct } = useProducts();

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [isAdminOpen, setIsAdminOpen] = useState(false);

    const { cart, addToCart, updateQuantity, removeFromCart, clearCart, getTotal, getTotalItems } = useCart();
    const { isAuthenticated, login, logout } = useAuth();

    const handleAddProduct = async (product) => {
        try {
            await addProduct(product);
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Error al agregar producto');
        }
    };

    const handleUpdateProduct = async (updatedProduct) => {
        try {
            const { id, ...productData } = updatedProduct;
            await updateProduct(id, productData);
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Error al actualizar producto');
        }
    };

    const handleDeleteProduct = async (productId) => {
        if (confirm('¿Estás seguro de eliminar este producto?')) {
            try {
                await deleteProduct(productId);
            } catch (error) {
                console.error('Error deleting product:', error);
                alert('Error al eliminar producto');
            }
        }
    };

    const handleCheckout = () => {
        setIsCartOpen(false);
        setIsCheckoutOpen(true);
    };

    const handlePurchaseCompleted = async () => {
        try {
            // Actualizar stock en Supabase
            const updatePromises = cart.map(async (cartItem) => {
                const product = products.find(p => p.id === cartItem.id);
                if (product) {
                    const newStock = product.stock - cartItem.quantity;
                    await updateProductStock(cartItem.id, newStock);
                }
            });

            await Promise.all(updatePromises);
            clearCart();
            setIsCheckoutOpen(false);
        } catch (error) {
            console.error('Error updating stock:', error);
            alert('Error al procesar la compra. Por favor intenta de nuevo.');
        }
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
