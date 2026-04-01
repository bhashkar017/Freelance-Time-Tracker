import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import { format } from 'date-fns';

const TimeTracker = () => {
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
            alert('Error logging time: ' + (err.response?.data?.message || err.message));
        } finally {
            setLoading(false);
        }
    };

    const deleteEntry = async (id) => {
        if (window.confirm('Are you sure?')) {
            try {
                await api.delete(`/api/time-entries/${id}`); // Fixed URL spaces
                setEntries(entries.filter(entry => entry._id !== id));
            } catch (err) {
                console.error(err);
                alert('Error deleting entry');
            }
        }
    };

    return (
        <div className="container" style={{ paddingTop: '80px', minHeight: '80vh' }}>
            <h2>Time Tracker</h2>
            <div className="card" style={{ marginBottom: '30px' }}>
                <h3>Log Hours</h3>
                <form onSubmit={onSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr auto', gap: '10px', alignItems: 'end' }}>
                    <div>
                        <label>Date</label>
                        <input type="date" name="date" value={formData.date} onChange={onChange} required />
                    </div>
                    <div>
                        <label>Project</label>
                        <select name="project" value={formData.project} onChange={onChange} required>
                            <option value="">Select Project</option>
                            {projects.map(p => (
                                <option key={p._id} value={p._id}>{p.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Description</label>
                        <input type="text" name="description" value={formData.description} onChange={onChange} placeholder="What did you do?" required />
                    </div>
                    <div>
                        <label>Start</label>
                        <input type="time" name="startTime" value={formData.startTime} onChange={onChange} required />
                    </div>
                    <div>
                        <label>End</label>
                        <input type="time" name="endTime" value={formData.endTime} onChange={onChange} required />
                    </div>

                    <button type="submit" className="btn" style={{ height: '42px', marginBottom: '10px' }} disabled={loading}>
                        {loading ? 'Adding...' : 'Add'}
                    </button>
                </form>
            </div>

            <div className="card">
                <h3>Recent Activity</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Project</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map(entry => (
                            <tr key={entry._id}>
                                <td>{format(new Date(entry.date), 'MMM dd, yyyy')}</td>
                                <td>{entry.project ? entry.project.name : 'Unknown'}</td>
                                <td>{entry.description}</td>
                                <td>{entry.duration ? entry.duration.toFixed(2) : 0} hrs</td>
                                <td>
                                    <button onClick={() => deleteEntry(entry._id)} style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {entries.length === 0 && <p style={{ textAlign: 'center', marginTop: '20px' }}>No entries found.</p>}
            </div>
        </div>
    );
};

export default TimeTracker;
