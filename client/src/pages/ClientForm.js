import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { useModal } from '../context/ModalContext';
import { User, Mail, MapPin, DollarSign, Save, X } from 'lucide-react';

const ClientForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        defaultRate: ''
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { showAlert } = useModal();

    const { name, email, address, defaultRate } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        try {
            await api.post('/api/clients', formData);
            navigate('/clients');
        } catch (err) {
            console.error(err);
            showAlert('Creation Error', 'Failed to create client. Please check your network connection and try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto px-4 pt-24 pb-12">
            <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-2xl flex items-center justify-center">
                    <User size={28} />
                </div>
                <div>
                    <h1 className="text-4xl font-display font-bold text-white tracking-tight">Add Client</h1>
                    <p className="text-slate-400 mt-1">Register a new client relationship in your dashboard.</p>
                </div>
            </div>

            <div className="bg-dark-surface/60 backdrop-blur-xl border border-dark-border p-10 rounded-3xl shadow-glass-dark relative overflow-hidden group">
                <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-primary/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/20 transition-all duration-700"></div>

                <form onSubmit={onSubmit} className="space-y-6 relative z-10">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                            <User size={14} /> Full Name
                        </label>
                        <input 
                            type="text" name="name" value={name} onChange={onChange} required 
                            placeholder="e.g. Acme Corp"
                            className="w-full bg-dark-bg border border-dark-border rounded-xl text-white px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                            <Mail size={14} /> Email Address
                        </label>
                        <input 
                            type="email" name="email" value={email} onChange={onChange} required 
                            placeholder="client@example.com"
                            className="w-full bg-dark-bg border border-dark-border rounded-xl text-white px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                            <MapPin size={14} /> Billing Address
                        </label>
                        <input 
                            type="text" name="address" value={address} onChange={onChange} 
                            placeholder="123 Sector, City"
                            className="w-full bg-dark-bg border border-dark-border rounded-xl text-white px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                            <DollarSign size={14} /> Default Hourly Rate ($)
                        </label>
                        <input 
                            type="number" name="defaultRate" value={defaultRate} onChange={onChange} 
                            placeholder="0.00"
                            className="w-full bg-dark-bg border border-dark-border rounded-xl text-white px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                        />
                    </div>

                    <div className="flex gap-4 pt-4">
                        <button 
                            type="button" 
                            onClick={() => navigate('/clients')}
                            className="flex-1 py-4 bg-dark-surface border border-dark-border text-white rounded-xl font-bold hover:bg-dark-surface/50 transition-all flex items-center justify-center gap-2"
                        >
                            <X size={18} /> Cancel
                        </button>
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="flex-[2] py-4 bg-primary text-white rounded-xl font-bold hover:shadow-glow-primary transition-all hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <Save size={18} />}
                            Save Client
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ClientForm;
