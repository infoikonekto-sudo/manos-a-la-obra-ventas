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

    const handleAddToCart = async (product) => {
        // Verificar si hay stock disponible
        if (product.stock <= 0) {
            alert('Producto agotado');
            return;
        }

        // Verificar cuántos ya hay en el carrito
        const cartItem = cart.find(item => item.id === product.id);
        const quantityInCart = cartItem ? cartItem.quantity : 0;

        // Verificar si agregar uno más excedería el stock
        if (quantityInCart + 1 > product.stock) {
            alert('No hay suficiente stock disponible');
            return;
        }

        try {
            // Actualizar stock en Supabase INMEDIATAMENTE
            const newStock = product.stock - 1;
            await updateProductStock(product.id, newStock);

            // Agregar al carrito local
            addToCart(product);
        } catch (error) {
            console.error('Error al reservar producto:', error);
            alert('Error al agregar al carrito. Por favor intenta de nuevo.');
        }
    };

    const handleRemoveFromCart = async (productId) => {
        try {
            // Encontrar el producto en el carrito
            const cartItem = cart.find(item => item.id === productId);
            if (!cartItem) return;

            // Devolver el stock a Supabase
            const product = products.find(p => p.id === productId);
            if (product) {
                const newStock = product.stock + cartItem.quantity;
                await updateProductStock(productId, newStock);
            }

            // Eliminar del carrito local
            removeFromCart(productId);
        } catch (error) {
            console.error('Error al eliminar del carrito:', error);
            alert('Error al eliminar del carrito. Por favor intenta de nuevo.');
        }
    };

    const handleUpdateQuantity = async (productId, newQuantity) => {
        try {
            const cartItem = cart.find(item => item.id === productId);
            if (!cartItem) return;

            const product = products.find(p => p.id === productId);
            if (!product) return;

            // Calcular diferencia de cantidad
            const quantityDifference = newQuantity - cartItem.quantity;

            // Verificar si hay suficiente stock
            if (quantityDifference > 0 && quantityDifference > product.stock) {
                alert('No hay suficiente stock disponible');
                return;
            }

            // Actualizar stock en Supabase
            const newStock = product.stock - quantityDifference;
            await updateProductStock(productId, newStock);

            // Actualizar cantidad en carrito local
            updateQuantity(productId, newQuantity);
        } catch (error) {
            console.error('Error al actualizar cantidad:', error);
            alert('Error al actualizar cantidad. Por favor intenta de nuevo.');
        }
    };

    const handleCheckout = () => {
        setIsCartOpen(false);
        setIsCheckoutOpen(true);
    };

    const handlePurchaseCompleted = () => {
        // Solo limpiar el carrito, el stock ya fue actualizado al agregar al carrito
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
                                    onAddToCart={handleAddToCart}
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
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemoveFromCart}
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
