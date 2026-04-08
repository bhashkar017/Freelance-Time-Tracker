import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import api from '../api/axios';
import { useModal } from '../context/ModalContext';
import { Briefcase, User, DollarSign, Activity, Save, X } from 'lucide-react';

const ProjectForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        client: '',
        hourlyRate: '',
        status: 'Active'
    });
    const [clients, setClients] = useState([]);
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { showAlert } = useModal();

    const { name, client, hourlyRate, status } = formData;

    useEffect(() => {
        const fetchClients = async () => {
            if (user?.isGuest) {
                // Return some mock clients to allow project creation in demo
                setClients([
                    { _id: 'mock1', name: 'Acme Corp (Demo)' },
                    { _id: 'mock2', name: 'Global Tech (Demo)' }
                ]);
                return;
            }
            const res = await api.get('/api/clients');
            setClients(res.data);
        };
        fetchClients();
    }, [user]);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        
        if (user?.isGuest) {
            showAlert('Demo Mode: Success', 'New project "created" in demo environment. Note: Changes are not saved to the cloud in demo mode.');
            navigate('/projects');
            return;
        }

        try {
            await api.post('/api/projects', formData);
            navigate('/projects');
        } catch (err) {
            console.error(err);
            showAlert('Creation Failed', 'Could not create the project. Please ensure all fields are valid.');
        }
    };

    return (
        <div className="max-w-2xl mx-auto px-4 pt-24 pb-12">
            <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-2xl flex items-center justify-center">
                    <Briefcase size={28} />
                </div>
                <div>
                    <h1 className="text-4xl font-display font-bold text-white tracking-tight">Add Project</h1>
                    <p className="text-slate-400 mt-1">Initialize a new engagement and set your billing terms.</p>
                </div>
            </div>

            <div className="bg-dark-surface/60 backdrop-blur-xl border border-dark-border p-10 rounded-3xl shadow-glass-dark relative overflow-hidden group">
                <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-primary/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/10 transition-all duration-700"></div>

                <form onSubmit={onSubmit} className="space-y-6 relative z-10">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                            <Briefcase size={14} /> Project Name
                        </label>
                        <input 
                            type="text" name="name" value={name} onChange={onChange} required 
                            placeholder="e.g. Website Redesign"
                            className="w-full bg-dark-bg border border-dark-border rounded-xl text-white px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                            <User size={14} /> Assign Client
                        </label>
                        <select 
                            name="client" value={client} onChange={onChange} required
                            className="w-full bg-dark-bg border border-dark-border rounded-xl text-white px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                        >
                            <option value="">Select Client</option>
                            {clients.map(c => (
                                <option key={c._id} value={c._id}>{c.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                                <DollarSign size={14} /> Hourly Rate ($)
                            </label>
                            <input 
                                type="number" name="hourlyRate" value={hourlyRate} onChange={onChange} required 
                                placeholder="0.00"
                                className="w-full bg-dark-bg border border-dark-border rounded-xl text-white px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                                <Activity size={14} /> Initial Status
                            </label>
                            <select 
                                name="status" value={status} onChange={onChange}
                                className="w-full bg-dark-bg border border-dark-border rounded-xl text-white px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                            >
                                <option value="Active">Active</option>
                                <option value="Completed">Completed</option>
                                <option value="On Hold">On Hold</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <button 
                            type="button" 
                            onClick={() => navigate('/projects')}
                            className="flex-1 py-4 bg-dark-surface border border-dark-border text-white rounded-xl font-bold hover:bg-dark-surface/50 transition-all flex items-center justify-center gap-2"
                        >
                            <X size={18} /> Cancel
                        </button>
                        <button 
                            type="submit" 
                            className="flex-[2] py-4 bg-primary text-white rounded-xl font-bold hover:shadow-glow-primary transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            <Save size={18} /> Create Project
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProjectForm;
