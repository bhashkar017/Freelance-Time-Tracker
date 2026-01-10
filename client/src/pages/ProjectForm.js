import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const ProjectForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        client: '',
        hourlyRate: '',
        status: 'Active'
    });
    const [clients, setClients] = useState([]);
    const navigate = useNavigate();

    const { name, client, hourlyRate, status } = formData;

    useEffect(() => {
        const fetchClients = async () => {
            const res = await api.get('/api/clients');
            setClients(res.data);
        };
        fetchClients();
    }, []);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await api.post('/api/projects', formData);
            navigate('/projects');
        } catch (err) {
            console.error(err);
            alert('Error creating project');
        }
    };

    return (
        <div className="container" style={{ maxWidth: '600px' }}>
            <div className="card">
                <h2>Add Project</h2>
                <form onSubmit={onSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Name</label>
                        <input type="text" name="name" value={name} onChange={onChange} required />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Client</label>
                        <select name="client" value={client} onChange={onChange} required>
                            <option value="">Select Client</option>
                            {clients.map(c => (
                                <option key={c._id} value={c._id}>{c.name}</option>
                            ))}
                        </select>
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Hourly Rate ($)</label>
                        <input type="number" name="hourlyRate" value={hourlyRate} onChange={onChange} required />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Status</label>
                        <select name="status" value={status} onChange={onChange}>
                            <option value="Active">Active</option>
                            <option value="Completed">Completed</option>
                            <option value="On Hold">On Hold</option>
                        </select>
                    </div>
                    <button type="submit" className="btn">Save Project</button>
                </form>
            </div>
        </div>
    );
};

export default ProjectForm;
