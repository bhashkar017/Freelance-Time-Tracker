import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import { format } from 'date-fns';
import { useModal } from '../context/ModalContext';
import { FileText, Download, Printer, User, Search, Loader2 } from 'lucide-react';

const InvoiceView = () => {
    const [clients, setClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState('');
    const [invoiceData, setInvoiceData] = useState(null);
    const [generating, setGenerating] = useState(false);
    const { showAlert } = useModal();

    useEffect(() => {
        const fetchClients = async () => {
            const res = await api.get('/api/clients');
            setClients(res.data);
        };
        fetchClients();
    }, []);

    const generateInvoice = async () => {
        if (!selectedClient) {
            showAlert('Selection Required', 'Please select a client from the dropdown to generate an invoice.');
            return;
        }

        setGenerating(true);
        try {
            const entriesRes = await api.get('/api/time-entries');
            const clientEntries = entriesRes.data.filter(e => {
                return e.project &&
                    e.project.client &&
                    (e.project.client._id === selectedClient || e.project.client === selectedClient);
            });

            if (clientEntries.length === 0) {
                showAlert('No Data', 'No time entries found for this client. Try logging some hours first!');
                setInvoiceData(null);
                return;
            }

            const totalAmount = clientEntries.reduce((acc, curr) => {
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
            showAlert('Generation Error', 'Could not generate invoice. Please check the console for logs.');
        } finally {
            setGenerating(false);
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
            <div className="flex items-center gap-4 mb-10 no-print">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-2xl flex items-center justify-center">
                    <FileText size={28} />
                </div>
                <div>
                    <h1 className="text-4xl font-display font-bold text-white tracking-tight">Invoices</h1>
                    <p className="text-slate-400 mt-1">Generate professional PDF-ready invoices for your clients.</p>
                </div>
            </div>

            <div className="bg-dark-surface/60 backdrop-blur-xl border border-dark-border p-8 rounded-3xl shadow-glass-dark mb-10 no-print">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative flex-1">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <select 
                            value={selectedClient} 
                            onChange={e => setSelectedClient(e.target.value)}
                            className="w-full bg-dark-bg border border-dark-border rounded-xl text-white pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
                        >
                            <option value="">Select Client for Invoice</option>
                            {clients.map(c => (
                                <option key={c._id} value={c._id}>{c.name}</option>
                            ))}
                        </select>
                    </div>
                    <button 
                        onClick={generateInvoice} 
                        disabled={generating}
                        className="w-full md:w-auto bg-primary text-white px-8 py-3 rounded-xl font-bold transition-all shadow-glow-primary hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        {generating ? <Loader2 className="animate-spin" size={20} /> : <Search size={20} />}
                        Generate Invoice
                    </button>
                </div>
            </div>

            {invoiceData && (
                <div className="bg-white text-slate-900 rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto animate-fade-in" id="invoice">
                    <div className="flex justify-between items-start mb-16 pb-8 border-b border-slate-100">
                        <div>
                            <div className="text-primary font-display font-black text-3xl mb-1 tracking-tighter uppercase">TIME TRACKER</div>
                            <h1 className="text-5xl font-display font-bold text-slate-800 mb-4 uppercase tracking-tight">INVOICE</h1>
                            <div className="space-y-1">
                                <p className="text-slate-500 flex items-center gap-2 font-medium">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                    Date: {format(new Date(), 'MMM dd, yyyy')}
                                </p>
                                <p className="text-slate-500 flex items-center gap-2 font-medium">
                                    <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
                                    Invoice No: #INV-{Math.floor(Math.random() * 10000)}
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 text-right">Billed To</h3>
                            <p className="text-xl font-bold text-slate-800">{invoiceData.client.name}</p>
                            <p className="text-slate-500">{invoiceData.client.email}</p>
                            <p className="text-slate-500 mt-2 italic leading-tight max-w-[200px] ml-auto text-right">{invoiceData.client.address}</p>
                        </div>
                    </div>

                    <table className="w-full mb-12">
                        <thead>
                            <tr className="border-b-2 border-slate-800 text-left">
                                <th className="py-4 text-sm font-bold uppercase tracking-wider text-slate-800 text-left">Item Details</th>
                                <th className="py-4 text-center text-sm font-bold uppercase tracking-wider text-slate-800 text-center">Date</th>
                                <th className="py-4 text-center text-sm font-bold uppercase tracking-wider text-slate-800 text-center">Qty (Hrs)</th>
                                <th className="py-4 text-right text-sm font-bold uppercase tracking-wider text-slate-800 text-right">Unit Price</th>
                                <th className="py-4 text-right text-sm font-bold uppercase tracking-wider text-slate-800 text-right">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {invoiceData.entries.map(entry => (
                                <tr key={entry._id}>
                                    <td className="py-6">
                                        <p className="font-bold text-slate-800">{entry.project ? entry.project.name : 'Unknown Project'}</p>
                                        <p className="text-sm text-slate-500">{entry.description || 'No description'}</p>
                                    </td>
                                    <td className="py-6 text-center text-slate-600 italic text-center">{entry.date ? format(new Date(entry.date), 'MMM dd, yyyy') : 'N/A'}</td>
                                    <td className="py-6 text-center font-bold text-slate-800 text-center">{entry.duration ? entry.duration.toFixed(2) : '0.00'}</td>
                                    <td className="py-6 text-right text-slate-600 text-right">${entry.project?.hourlyRate || 0}</td>
                                    <td className="py-6 text-right font-black text-slate-800 text-right">${((entry.duration || 0) * (entry.project?.hourlyRate || 0)).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex justify-end pt-8 border-t-2 border-slate-800">
                        <div className="w-64 text-right">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-slate-500 font-bold uppercase text-xs tracking-widest text-right">Total Amount Due</span>
                                <span className="text-3xl font-display font-black text-primary text-right">${invoiceData.totalAmount.toFixed(2)}</span>
                            </div>
                            <div className="text-[10px] text-slate-400 font-medium leading-tight text-right">
                                Payment is due within 30 days. Thank you for your business!
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 flex justify-center gap-4 no-print">
                        <button 
                            onClick={() => window.print()} 
                            className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-xl"
                        >
                            <Printer size={20} /> Print & Save PDF
                        </button>
                    </div>
                </div>
            )}

            <style>{`
                @media print {
                    .no-print, nav, .btn, .AnimatePresence {
                        display: none !important;
                    }
                    body, .max-w-6xl, .App, .App > div {
                        background: white !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        color: black !important;
                    }
                    #invoice {
                        box-shadow: none !important;
                        border: none !important;
                        width: 100% !important;
                        max-width: none !important;
                        padding: 0 !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default InvoiceView;
