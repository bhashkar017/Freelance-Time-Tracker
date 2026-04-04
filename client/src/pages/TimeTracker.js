import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import { format } from 'date-fns';
import { useModal } from '../context/ModalContext';
import { 
    Clock, 
    Calendar, 
    MessageSquare, 
    Briefcase, 
    Trash2, 
    Plus,
    Activity
} from 'lucide-react';

const TimeTracker = () => {
    const { showAlert, showConfirm } = useModal();
    const [projects, setProjects] = useState([]);
    const [entries, setEntries] = useState([]);
    const [formData, setFormData] = useState({
        project: '',
        description: '',
        startTime: '',
        endTime: '',
        date: new Date().toISOString().split('T')[0]
    });

    const fetchEntries = async () => {
        try {
            const res = await api.get('/api/time-entries');
            setEntries(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        const fetchProjects = async () => {
            const res = await api.get('/api/projects');
            setProjects(res.data);
        };
        fetchProjects();
        fetchEntries();
    }, []);

    const [loading, setLoading] = useState(false);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        // Calculate duration if needed
        let duration = 0;
        if (formData.startTime && formData.endTime) {
            const start = new Date(`1970-01-01T${formData.startTime}:00`);
            const end = new Date(`1970-01-01T${formData.endTime}:00`);
            duration = (end - start) / 1000 / 60 / 60; // in hours
        }

        setLoading(true);
        try {
            // Create full date objects for start and end
            const startDateTime = new Date(`${formData.date}T${formData.startTime}`);
            const endDateTime = new Date(`${formData.date}T${formData.endTime}`);

            const payload = {
                ...formData,
                startTime: startDateTime.toISOString(),
                endTime: endDateTime.toISOString(),
                duration
            };

            await api.post('/api/time-entries', payload);
            await fetchEntries(); // Wait for fetch
            setFormData({ ...formData, description: '', startTime: '', endTime: '' });
        } catch (err) {
            console.error(err);
            showAlert('Log Error', err.response?.data?.message || 'Failed to log your time. Please check your data and try again.');
        } finally {
            setLoading(false);
        }
    };

    const deleteEntry = async (id) => {
        showConfirm(
            'Delete Entry?',
            'Are you sure you want to delete this time entry? This cannot be undone.',
            async () => {
                try {
                    await api.delete(`/api/time-entries/${id}`);
                    setEntries(entries.filter(entry => entry._id !== id));
                } catch (err) {
                    console.error(err);
                    showAlert('Error', 'Failed to delete time entry.');
                }
            }
        );
    };

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
            <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-2xl flex items-center justify-center">
                    <Clock size={28} />
                </div>
                <div>
                    <h1 className="text-4xl font-display font-bold text-white tracking-tight">Time Tracker</h1>
                    <p className="text-slate-400 mt-1">Log your hours and track your productivity across projects.</p>
                </div>
            </div>

            <div className="bg-dark-surface/60 backdrop-blur-xl border border-dark-border p-8 rounded-3xl shadow-glass-dark mb-10 relative overflow-hidden group">
                <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-primary/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/10 transition-all duration-700"></div>
                
                <h3 className="text-xl font-display font-bold text-white mb-8 flex items-center gap-2">
                    <Activity className="text-primary" size={20} /> Log New Activity
                </h3>
                
                <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 items-end">
                    <div className="space-y-2 group/input">
                        <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                            <Calendar size={14} /> Date
                        </label>
                        <div className="relative">
                            <input 
                                type="date" name="date" value={formData.date} onChange={onChange} required 
                                onClick={(e) => e.target.showPicker && e.target.showPicker()}
                                className="w-full bg-dark-bg border border-dark-border rounded-xl text-white pl-4 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium appearance-none block"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary/70 group-hover/input:text-primary transition-colors">
                                <Calendar size={18} />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2 group/input">
                        <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                            <Briefcase size={14} /> Project
                        </label>
                        <div className="relative">
                            <select 
                                name="project" value={formData.project} onChange={onChange} required
                                className="w-full bg-dark-bg border border-dark-border rounded-xl text-white pl-4 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium appearance-none block"
                            >
                                <option value="">Select Project</option>
                                {projects.map(p => (
                                    <option key={p._id} value={p._id}>{p.name}</option>
                                ))}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary/70 group-hover/input:text-primary transition-colors">
                                <Plus size={18} className="rotate-45" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2 group/input">
                        <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                            <MessageSquare size={14} /> Description
                        </label>
                        <div className="relative">
                            <input 
                                type="text" name="description" value={formData.description} onChange={onChange} 
                                placeholder="What did you do?" required 
                                className="w-full bg-dark-bg border border-dark-border rounded-xl text-white pl-4 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium block"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary/70 group-hover/input:text-primary transition-colors">
                                <MessageSquare size={16} />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2 group/input">
                        <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                            <Clock size={14} /> Start Time
                        </label>
                        <div className="relative">
                            <input 
                                type="time" name="startTime" value={formData.startTime} onChange={onChange} required 
                                onClick={(e) => e.target.showPicker && e.target.showPicker()}
                                className="w-full bg-dark-bg border border-dark-border rounded-xl text-white pl-4 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium appearance-none block"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary/70 group-hover/input:text-primary transition-colors">
                                <Clock size={18} />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2 group/input">
                        <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                            <Clock size={14} /> End Time
                        </label>
                        <div className="relative">
                            <input 
                                type="time" name="endTime" value={formData.endTime} onChange={onChange} required 
                                onClick={(e) => e.target.showPicker && e.target.showPicker()}
                                className="w-full bg-dark-bg border border-dark-border rounded-xl text-white pl-4 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium appearance-none block"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary/70 group-hover/input:text-primary transition-colors">
                                <Clock size={18} />
                            </div>
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="bg-primary text-white py-2.5 px-6 rounded-xl font-bold hover:shadow-glow-primary transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                        {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <Plus size={20} />}
                        Log Time
                    </button>
                </form>
            </div>

            <div className="bg-dark-surface/60 backdrop-blur-xl border border-dark-border rounded-3xl shadow-glass-dark overflow-hidden">
                <div className="px-8 py-6 border-b border-dark-border flex justify-between items-center">
                    <h3 className="text-xl font-display font-bold text-white">Recent Activity</h3>
                    <div className="px-3 py-1 bg-dark-bg/50 border border-dark-border rounded-full text-xs font-semibold text-slate-400">
                        Total: {entries.length} Entries
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-dark-surface/50">
                                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Date</th>
                                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Project</th>
                                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Description</th>
                                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Duration</th>
                                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-dark-border">
                            {entries.map(entry => (
                                <tr key={entry._id} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-8 py-5 text-slate-300 text-sm font-medium">{format(new Date(entry.date), 'MMM dd, yyyy')}</td>
                                    <td className="px-8 py-5">
                                        <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-xs font-bold">
                                            {entry.project ? entry.project.name : 'Unknown'}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-slate-400 text-sm">{entry.description}</td>
                                    <td className="px-8 py-5">
                                        <span className="text-white font-display font-bold">{entry.duration ? entry.duration.toFixed(2) : 0}</span>
                                        <span className="text-slate-500 text-xs ml-1">hrs</span>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <button 
                                            onClick={() => deleteEntry(entry._id)} 
                                            className="p-2 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all"
                                            title="Delete Entry"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {entries.length === 0 && (
                    <div className="py-20 text-center">
                        <Activity className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                        <p className="text-slate-500 font-medium">No activity logged yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TimeTracker;
