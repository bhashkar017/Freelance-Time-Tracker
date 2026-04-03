import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Plus,
    Trash2,
    Search,
    User,
    Mail,
    DollarSign,
    MoreVertical,
    AlertCircle,
    Loader2
} from 'lucide-react';
import api from '../api/axios';
import { useModal } from '../context/ModalContext';

const ClientList = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const { showAlert, showConfirm } = useModal();

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const res = await api.get('/api/clients');
                setClients(res.data);
            } catch (err) {
                console.error("Error fetching clients:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchClients();
    }, []);

    const deleteClient = async (id) => {
        showConfirm(
            'Delete Client?',
            'Are you sure you want to delete this client? This action will permanently remove all associated data.',
            async () => {
                try {
                    await api.delete(`/api/clients/${id}`);
                    setClients(clients.filter(client => client._id !== id));
                } catch (err) {
                    showAlert('Error', 'Failed to delete client. Please try again.');
                }
            }
        );
    };

    const filteredClients = clients.filter(client =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-4">
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
                <p className="text-slate-400 font-medium">Loading your clients...</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-display font-bold text-white">Clients</h1>
                    <p className="text-slate-400 mt-1">Manage your client relationships and billing rates.</p>
                </div>
                <Link
                    to="/clients/add"
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-glow-primary hover:-translate-y-0.5"
                >
                    <Plus size={20} />
                    Add New Client
                </Link>
            </div>

            {/* Stats & Search Bar */}
            <div className="bg-dark-surface/60 backdrop-blur-xl p-4 rounded-2xl border border-dark-border shadow-glass-dark mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        className="w-full pl-10 pr-4 py-2 bg-dark-bg border border-dark-border rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="text-sm font-medium text-slate-400 bg-dark-bg/50 px-3 py-1 rounded-full border border-dark-border">
                    Total: {filteredClients.length} Clients
                </div>
            </div>

            {/* Table Card */}
            <div className="bg-dark-surface/60 backdrop-blur-xl rounded-2xl border border-dark-border shadow-glass-dark overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-dark-surface/50 border-b border-dark-border">
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                    <div className="flex items-center gap-2 text-md"><User size={14} /> Name</div>
                                </th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                    <div className="flex items-center gap-2 text-md"><Mail size={14} /> Contact</div>
                                </th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                    <div className="flex items-center gap-2 text-md"><DollarSign size={14} /> Default Rate</div>
                                </th>
                                <th className="px-6 py-4 text-md font-bold text-slate-500 uppercase tracking-wider text-right">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-dark-border">
                            {filteredClients.map(client => (
                                <tr key={client._id} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm border border-primary/20">
                                                {client.name.charAt(0).toUpperCase()}
                                            </div>
                                            <span className="font-semibold text-slate-200">{client.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-400">
                                        {client.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-secondary/10 text-secondary border border-secondary/20">
                                            ${client.defaultRate}/hr
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            onClick={() => deleteClient(client._id)}
                                            className="p-2 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-all"
                                            title="Delete Client"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Empty State */}
                {filteredClients.length === 0 && (
                    <div className="py-20 flex flex-col items-center justify-center text-center">
                        <div className="bg-dark-bg/50 p-4 rounded-full mb-4 border border-dark-border">
                            <AlertCircle size={32} className="text-slate-500" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">No clients found</h3>
                        <p className="text-slate-400 max-w-xs mx-auto">
                            {searchTerm
                                ? `We couldn't find any clients matching "${searchTerm}"`
                                : "You haven't added any clients yet. Click the button above to get started."}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ClientList;