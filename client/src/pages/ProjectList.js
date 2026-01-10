import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

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
        if (window.confirm('Are you sure?')) {
            try {
                await api.delete(`/api/projects/${id}`);
                setProjects(projects.filter(project => project._id !== id));
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2>Projects</h2>
                <Link to="/projects/add" className="btn">Add Project</Link>
            </div>
            <div className="card">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Client</th>
                            <th>Hourly Rate</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map(project => (
                            <tr key={project._id}>
                                <td>{project.name}</td>
                                <td>{project.client ? project.client.name : 'Unknown'}</td>
                                <td>${project.hourlyRate}/hr</td>
                                <td>
                                    <span style={{
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        backgroundColor: project.status === 'Active' ? '#d1fae5' : '#f3f4f6',
                                        color: project.status === 'Active' ? '#065f46' : '#374151',
                                        fontSize: '0.875rem'
                                    }}>
                                        {project.status}
                                    </span>
                                </td>
                                <td>
                                    <button onClick={() => deleteProject(project._id)} style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {projects.length === 0 && <p style={{ textAlign: 'center', marginTop: '20px' }}>No projects found.</p>}
            </div>
        </div>
    );
};

export default ProjectList;
