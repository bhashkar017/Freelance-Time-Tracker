import React, { createContext, useState, useEffect } from 'react';
import api from '../api/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Load user from local storage on boot
    useEffect(() => {
        const storedUser = localStorage.getItem('userInfo');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        const { data } = await api.post('/api/users/login', { email, password });
        localStorage.setItem('userInfo', JSON.stringify(data));
        setUser(data);
        return data;
    };

    const register = async (name, email, password) => {
        const { data } = await api.post('/api/users', { name, email, password });
        localStorage.setItem('userInfo', JSON.stringify(data));
        setUser(data);
        return data;
    };

    const logout = () => {
        localStorage.removeItem('userInfo');
        setUser(null);
    };

    const loginAsGuest = () => {
        const guestUser = {
            _id: 'guest_123',
            name: 'Expo Judge',
            email: 'judge@lpu.edu',
            isGuest: true,
            token: 'mock_token'
        };
        setUser(guestUser);
        return guestUser;
    };

    const googleLogin = async (tokenId) => {
        const { data } = await api.post('/api/users/google', { token: tokenId });
        localStorage.setItem('userInfo', JSON.stringify(data));
        setUser(data);
        return data;
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, googleLogin, loginAsGuest, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
