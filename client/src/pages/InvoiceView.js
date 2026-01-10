import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import { format } from 'date-fns';

const InvoiceView = () => {
    const [clients, setClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState('');
    const [invoiceData, setInvoiceData] = useState(null);

    useEffect(() => {
        const fetchClients = async () => {
            const res = await api.get('/api/clients');
            setClients(res.data);
        };
        fetchClients();
    }, []);

    const generateInvoice = async () => {
        if (!selectedClient) return;

        try {
            // Fetch all entries for this client
            // Backend's populate('project') is crucial here
            const entriesRes = await api.get('/api/time-entries');

            // Filter entries where entry.project.client matches selectedClient
            const clientEntries = entriesRes.data.filter(e => {
                // Ensure project and client exist (population check)
                return e.project &&
                    e.project.client &&
                    (e.project.client._id === selectedClient || e.project.client === selectedClient);
            });

            const totalAmount = clientEntries.reduce((acc, curr) => {
                // Use the hourly rate from the project directly
                const rate = curr.project.hourlyRate || 0;
                const duration = curr.duration || 0;
                return acc + (duration * rate);
            }, 0);

            setInvoiceData({
                client: clients.find(c => c._id === selectedClient),
                entries: clientEntries,
                totalAmount
            });

        } catch (err) {
            console.error('Error generating invoice:', err);
            alert('Could not generate invoice. See console for details.');
        }
    };

    return (
        <div className="container">
            <h2>Invoices</h2>
            <div className="card no-print">
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <select value={selectedClient} onChange={e => setSelectedClient(e.target.value)} style={{ marginBottom: 0 }}>
                        <option value="">Select Client for Invoice</option>
                        {clients.map(c => (
                            <option key={c._id} value={c._id}>{c.name}</option>
                        ))}
                    </select>
                    <button onClick={generateInvoice} className="btn">Generate</button>
                </div>
            </div>

            {invoiceData && (
                <div className="card" id="invoice">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
                        <div>
                            <h1>INVOICE</h1>
                            <p>Date: {format(new Date(), 'MMM dd, yyyy')}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <h3>Billed To:</h3>
                            <p>{invoiceData.client.name}</p>
                            <p>{invoiceData.client.email}</p>
                            <p>{invoiceData.client.address}</p>
                        </div>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Description</th>
                                <th>Date</th>
                                <th>Hours</th>
                                <th>Rate</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoiceData.entries.map(entry => (
                                <tr key={entry._id}>
                                    <td>{entry.project ? entry.project.name : 'Unknown Project'}</td>
                                    <td>{entry.description || 'No description'}</td>
                                    <td>{entry.date ? format(new Date(entry.date), 'MMM dd, yyyy') : 'N/A'}</td>
                                    <td>{entry.duration ? entry.duration.toFixed(2) : '0.00'}</td>
                                    <td>${entry.project && entry.project.hourlyRate ? entry.project.hourlyRate : 0}</td>
                                    <td>${((entry.duration || 0) * (entry.project?.hourlyRate || 0)).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div style={{ marginTop: '30px', textAlign: 'right' }}>
                        <h3>Total Due: ${invoiceData.totalAmount.toFixed(2)}</h3>
                    </div>

                    <div style={{ marginTop: '50px', textAlign: 'center' }} className="no-print">
                        <button onClick={() => window.print()} className="btn">Print Invoice</button>
                    </div>
                </div>
            )}

            <style>{`
                @media print {
                    .no-print, nav, .btn {
                        display: none !important;
                    }
                    body, .container {
                        background: white;
                        margin: 0;
                        padding: 0;
                    }
                    .card {
                        box-shadow: none;
                        border: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default InvoiceView;
