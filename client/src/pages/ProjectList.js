import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';
import { useModal } from '../context/ModalContext';
import { 
    Briefcase, 
    Plus, 
    Trash2, 
    User, 
    DollarSign, 
    Activity 
} from 'lucide-react';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const { showAlert, showConfirm } = useModal();

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await api.get('/api/projects');
                setProjects(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProjects();
    }, []);

    const deleteProject = async (id) => {
        showConfirm(
            'Delete Project?',
            'Are you sure you want to delete this project? This will remove all associated time entries.',
            async () => {
                try {
                    await api.delete(`/api/projects/${id}`);
                    setProjects(projects.filter(project => project._id !== id));
                } catch (err) {
                    console.error(err);
                    showAlert('Error', 'Failed to delete project. Please try again.');
                }
            }
        );
    };

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 text-primary rounded-2xl flex items-center justify-center">
                        <Briefcase size={28} />
                    </div>
                    <div>
                        <h1 className="text-4xl font-display font-bold text-white tracking-tight">Projects</h1>
                        <p className="text-slate-400 mt-1">Track and manage your active freelance engagements.</p>
                    </div>
                </div>
                <Link 
                    to="/projects/add" 
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-glow-primary hover:-translate-y-0.5"
                >
                    <Plus size={20} />
                    Add New Project
                </Link>
            </div>

            <div className="bg-dark-surface/60 backdrop-blur-xl border border-dark-border rounded-3xl shadow-glass-dark overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-dark-surface/50 border-b border-dark-border">
                                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                                    <div className="flex items-center gap-2"><Briefcase size={14} /> Name</div>
                                </th>
                                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                                    <div className="flex items-center gap-2"><User size={14} /> Client</div>
                                </th>
                                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                                    <div className="flex items-center gap-2"><DollarSign size={14} /> Hourly Rate</div>
                                </th>
                                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                                    <div className="flex items-center gap-2"><Activity size={14} /> Status</div>
                                </th>
                                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-dark-border">
                            {projects.map(project => (
                                <tr key={project._id} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-8 py-5 text-white font-semibold">{project.name}</td>
                                    <td className="px-8 py-5 text-slate-400">
                                        {project.client ? (
                                            <span className="flex items-center gap-2 italic text-slate-500">
                                                {project.client.name}
                                            </span>
                                        ) : 'Unknown'}
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-lg text-xs font-bold">
                                            ${project.hourlyRate}/hr
                                        </span>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                                            project.status === 'Active' 
                                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                                            : 'bg-slate-500/10 text-slate-400 border-slate-500/20'
                                        }`}>
                                            {project.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <button 
                                            onClick={() => deleteProject(project._id)} 
                                            className="p-2 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all"
                                            title="Delete Project"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {projects.length === 0 && (
                    <div className="py-20 text-center">
                        <Briefcase className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                        <p className="text-slate-500 font-medium">No projects found. Add your first one above!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectList;
