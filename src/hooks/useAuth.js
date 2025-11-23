import { useState, useEffect } from 'react';
import { ADMIN_CREDENTIALS } from '../utils/constants';

/**
 * Hook personalizado para autenticación de administrador
 */
export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        // Verificar si hay sesión guardada
        const savedAuth = localStorage.getItem('adminAuth');
        return savedAuth === 'true';
    });

    // Guardar estado de autenticación
    useEffect(() => {
        localStorage.setItem('adminAuth', isAuthenticated.toString());
    }, [isAuthenticated]);

    /**
     * Iniciar sesión
     */
    const login = (username, password) => {
        if (
            username === ADMIN_CREDENTIALS.username &&
            password === ADMIN_CREDENTIALS.password
        ) {
            setIsAuthenticated(true);
            return true;
        }
        return false;
    };

    /**
     * Cerrar sesión
     */
    const logout = () => {
        setIsAuthenticated(false);
    };

    return {
        isAuthenticated,
        login,
        logout
    };
};
