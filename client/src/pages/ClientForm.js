import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const ClientForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        defaultRate: ''
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

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
            alert('Error creating client. Make sure the backend and database are running.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ maxWidth: '600px', paddingTop: '80px', minHeight: '80vh' }}>
            <div className="card">
                <h2>Add Client</h2>
                <form onSubmit={onSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Name</label>
                        <input type="text" name="name" value={name} onChange={onChange} required />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Email</label>
                        <input type="email" name="email" value={email} onChange={onChange} required />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Address</label>
                        <input type="text" name="address" value={address} onChange={onChange} />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Default Hourly Rate ($)</label>
                        <input type="number" name="defaultRate" value={defaultRate} onChange={onChange} />
                    </div>
                    <button type="submit" className="btn" disabled={loading}>
                        {loading ? 'Saving...' : 'Save Client'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ClientForm;
