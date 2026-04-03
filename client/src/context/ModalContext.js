import React, { createContext, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, Info } from 'lucide-react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalConfig, setModalConfig] = useState({
        isOpen: false,
        title: '',
        message: '',
        type: 'alert', // 'alert' or 'confirm'
        onConfirm: null,
        onCancel: null,
    });

    const showAlert = (title, message) => {
        setModalConfig({
            isOpen: true,
            title,
            message,
            type: 'alert',
            onConfirm: () => closeModal(),
        });
    };

    const showConfirm = (title, message, onConfirm, onCancel) => {
        setModalConfig({
            isOpen: true,
            title,
            message,
            type: 'confirm',
            onConfirm: () => {
                if (onConfirm) onConfirm();
                closeModal();
            },
            onCancel: () => {
                if (onCancel) onCancel();
                closeModal();
            },
        });
    };

    const closeModal = () => {
        setModalConfig(prev => ({ ...prev, isOpen: false }));
    };

    return (
        <ModalContext.Provider value={{ showAlert, showConfirm, closeModal }}>
            {children}
            
            <AnimatePresence>
                {modalConfig.isOpen && (
                    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
                        {/* Overlay */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        
                        {/* Modal Box */}
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-md bg-dark-bg border border-dark-border p-8 rounded-3xl shadow-glass-dark overflow-hidden group"
                        >
                            {/* Ambient Glow */}
                            <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] bg-primary/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-primary/20 transition-all duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${modalConfig.type === 'confirm' ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'}`}>
                                        {modalConfig.type === 'confirm' ? <Info size={24} /> : <AlertCircle size={24} />}
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-white tracking-tight">{modalConfig.title}</h3>
                                </div>
                                
                                <p className="text-slate-400 leading-relaxed mb-10 text-lg">
                                    {modalConfig.message}
                                </p>
                                
                                <div className="flex gap-4">
                                    {modalConfig.type === 'confirm' && (
                                        <button 
                                            onClick={modalConfig.onCancel}
                                            className="flex-1 py-3.5 px-4 bg-dark-surface border border-dark-border text-white rounded-xl font-bold hover:bg-dark-surface/50 hover:border-slate-500 transition-all duration-300"
                                        >
                                            Cancel
                                        </button>
                                    )}
                                    <button 
                                        onClick={modalConfig.onConfirm}
                                        className={`flex-1 py-3.5 px-4 text-white rounded-xl font-bold shadow-glow-primary transition-all duration-300 hover:-translate-y-1 ${modalConfig.type === 'confirm' ? 'bg-secondary hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]' : 'bg-primary hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]'}`}
                                    >
                                        {modalConfig.type === 'confirm' ? 'Confirm' : 'Got it'}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
