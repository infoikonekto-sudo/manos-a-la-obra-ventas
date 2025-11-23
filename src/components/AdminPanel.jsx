import React, { useState } from 'react';

const AdminPanel = ({ isOpen, onClose, isAuthenticated, onLogin, onLogout, products, onAddProduct, onUpdateProduct, onDeleteProduct }) => {
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [editingProduct, setEditingProduct] = useState(null);
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        description: '',
        image: '',
        stock: '',
        category: ''
    });

    if (!isOpen) return null;

    const handleLogin = (e) => {
        e.preventDefault();
        const success = onLogin(loginData.username, loginData.password);
        if (!success) {
            alert('Credenciales incorrectas');
        }
        setLoginData({ username: '', password: '' });
    };

    const handleImageUpload = (e, isEditing = false) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (isEditing) {
                    setEditingProduct({ ...editingProduct, image: reader.result });
                } else {
                    setNewProduct({ ...newProduct, image: reader.result });
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        onAddProduct({
            ...newProduct,
            id: Date.now(),
            price: parseFloat(newProduct.price),
            stock: parseInt(newProduct.stock)
        });
        setNewProduct({ name: '', price: '', description: '', image: '', stock: '', category: '' });
    };

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        onUpdateProduct(editingProduct);
        setEditingProduct(null);
    };

    if (!isAuthenticated) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                <div className="glass max-w-md w-full rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-6">Acceso Administrativo</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Usuario</label>
                            <input type="text" value={loginData.username} onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-semibold mb-2">Contraseña</label>
                            <input type="password" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200" />
                        </div>
                        <div className="flex space-x-3">
                            <button type="submit" className="flex-1 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold rounded-xl">
                                Ingresar
                            </button>
                            <button type="button" onClick={onClose} className="px-6 py-3 bg-slate-200 rounded-xl font-semibold">
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm">
            <div className="min-h-screen p-4">
                <div className="glass max-w-6xl mx-auto rounded-2xl overflow-hidden my-8">
                    <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-6 text-white">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold">Panel de Administración</h2>
                            <div className="flex space-x-3">
                                <button onClick={onLogout} className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30">
                                    Cerrar Sesión
                                </button>
                                <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-4">Agregar Nuevo Producto</h3>
                            <form onSubmit={handleAddProduct} className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Nombre" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                    className="px-4 py-2 rounded-lg border-2" required />
                                <input type="number" placeholder="Precio" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                    className="px-4 py-2 rounded-lg border-2" required />
                                <input type="text" placeholder="Categoría" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                                    className="px-4 py-2 rounded-lg border-2" />
                                <input type="number" placeholder="Stock" value={newProduct.stock} onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                                    className="px-4 py-2 rounded-lg border-2" required />

                                <div className="col-span-2 space-y-2">
                                    <label className="block text-sm font-semibold text-slate-600">Imagen del Producto</label>
                                    <div className="flex space-x-2">
                                        <input type="text" placeholder="URL de la imagen (opcional)" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                                            className="flex-1 px-4 py-2 rounded-lg border-2" />
                                        <div className="relative">
                                            <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e)}
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                                            <button type="button" className="px-4 py-2 bg-slate-200 rounded-lg hover:bg-slate-300">
                                                Subir Foto
                                            </button>
                                        </div>
                                    </div>
                                    {newProduct.image && (
                                        <img src={newProduct.image} alt="Preview" className="h-20 w-20 object-cover rounded-lg border border-slate-200" />
                                    )}
                                </div>

                                <textarea placeholder="Descripción" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                                    className="px-4 py-2 rounded-lg border-2 col-span-2" rows="2"></textarea>
                                <button type="submit" className="col-span-2 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold rounded-xl">
                                    Agregar Producto
                                </button>
                            </form>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-4">Productos ({products.length})</h3>
                            <div className="space-y-4">
                                {products.map((product) => (
                                    <div key={product.id} className="glass p-4 rounded-xl flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
                                            <div>
                                                <h4 className="font-semibold">{product.name}</h4>
                                                <p className="text-sm text-slate-600">₡{product.price.toLocaleString()} - Stock: {product.stock}</p>
                                            </div>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button onClick={() => setEditingProduct(product)} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                                                Editar
                                            </button>
                                            <button onClick={() => onDeleteProduct(product.id)} className="px-4 py-2 bg-red-500 text-white rounded-lg">
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {editingProduct && (
                <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/50">
                    <div className="glass max-w-md w-full rounded-2xl p-6">
                        <h3 className="text-xl font-bold mb-4">Editar Producto</h3>
                        <form onSubmit={handleUpdateProduct} className="space-y-3">
                            <input type="text" value={editingProduct.name} onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                                className="w-full px-4 py-2 rounded-lg border-2" />
                            <input type="number" value={editingProduct.price} onChange={(e) => setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) })}
                                className="w-full px-4 py-2 rounded-lg border-2" />
                            <input type="number" value={editingProduct.stock} onChange={(e) => setEditingProduct({ ...editingProduct, stock: parseInt(e.target.value) })}
                                className="w-full px-4 py-2 rounded-lg border-2" />

                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-slate-600">Imagen del Producto</label>
                                <div className="flex space-x-2">
                                    <input type="text" placeholder="URL de la imagen" value={editingProduct.image} onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
                                        className="flex-1 px-4 py-2 rounded-lg border-2" />
                                    <div className="relative">
                                        <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, true)}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                                        <button type="button" className="px-4 py-2 bg-slate-200 rounded-lg hover:bg-slate-300">
                                            Cambiar
                                        </button>
                                    </div>
                                </div>
                                {editingProduct.image && (
                                    <img src={editingProduct.image} alt="Preview" className="h-20 w-20 object-cover rounded-lg border border-slate-200" />
                                )}
                            </div>
                            <div className="flex space-x-3">
                                <button type="submit" className="flex-1 py-3 bg-primary-500 text-white font-bold rounded-xl">Guardar</button>
                                <button type="button" onClick={() => setEditingProduct(null)} className="px-6 py-3 bg-slate-200 rounded-xl">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPanel;
