import { supabase } from '../supabase.config';

// Obtener todos los productos
export const getProducts = async () => {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('name');

    if (error) throw error;
    return data;
};

// Agregar un nuevo producto
export const addProduct = async (product) => {
    const { data, error } = await supabase
        .from('products')
        .insert([product])
        .select()
        .single();

    if (error) throw error;
    return data;
};

// Actualizar un producto
export const updateProduct = async (productId, productData) => {
    const { data, error } = await supabase
        .from('products')
        .update(productData)
        .eq('id', productId)
        .select()
        .single();

    if (error) throw error;
    return data;
};

// Eliminar un producto
export const deleteProduct = async (productId) => {
    const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', productId);

    if (error) throw error;
    return productId;
};

// Actualizar solo el stock de un producto
export const updateProductStock = async (productId, newStock) => {
    const { error } = await supabase
        .from('products')
        .update({ stock: newStock })
        .eq('id', productId);

    if (error) throw error;
    return true;
};

// Suscribirse a cambios en tiempo real
export const subscribeToProducts = (callback) => {
    const channel = supabase
        .channel('products-changes')
        .on('postgres_changes',
            { event: '*', schema: 'public', table: 'products' },
            () => {
                // Cuando hay cambios, obtener todos los productos
                getProducts().then(callback);
            }
        )
        .subscribe();

    // Obtener productos iniciales
    getProducts().then(callback);

    // Retornar función para desuscribirse
    return () => {
        supabase.removeChannel(channel);
    };
};

export default {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    updateProductStock,
    subscribeToProducts
};
