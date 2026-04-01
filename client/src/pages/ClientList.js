import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';

const ClientList = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const res = await api.get('/api/clients');
                setClients(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchClients();
    }, []);

    const deleteClient = async (id) => {
        if (window.confirm('Are you sure?')) {
            try {
                await api.delete(`/api/clients/${id}`);
                setClients(clients.filter(client => client._id !== id));
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <div className="container" style={{ paddingTop: '80px', minHeight: '80vh' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2>Clients</h2>
                <Link to="/clients/add" className="btn">Add Client</Link>
            </div>
            <div className="card">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Default Rate</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map(client => (
                            <tr key={client._id}>
                                <td>{client.name}</td>
                                <td>{client.email}</td>
                                <td>${client.defaultRate}/hr</td>
                                <td>
                                    <button onClick={() => deleteClient(client._id)} style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {clients.length === 0 && <p style={{ textAlign: 'center', marginTop: '20px' }}>No clients found.</p>}
            </div>
        </div>
    );
};

export default ClientList;
