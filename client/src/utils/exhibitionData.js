export const exhibitionStats = {
    financials: {
        totalEarnings: 12840.50,
        monthlyRevenue: 4200.00,
        pendingPayments: 850.25
    },
    time: {
        totalHours: 186.4,
        weeklyHours: 42.5,
        avgDailyHours: 7.2
    },
    projects: {
        active: 6,
        total: 15,
        completed: 9
    },
    clients: {
        active: 8,
        total: 12
    }
};

export const exhibitionActivities = [
    { _id: 'e1', project: { name: 'Quantum UI Redesign' }, description: 'Developed high-fidelity glassmorphism components', duration: 4.5, date: new Date().toISOString() },
    { _id: 'e2', project: { name: 'Neural API Integration' }, description: 'Implemented fallback logic for edge computing nodes', duration: 2.2, date: new Date().toISOString() },
    { _id: 'e3', project: { name: 'Cyber-Security Audit' }, description: 'Security vulnerability assessment for login pipeline', duration: 6.0, date: new Date().toISOString() },
    { _id: 'e4', project: { name: 'E-Commerce Platform' }, description: 'Fixed checkout performance bottleneck in production', duration: 3.5, date: new Date().toISOString() },
    { _id: 'e5', project: { name: 'Mobile App Refactor' }, description: 'Migrated state management to Context API', duration: 5.23, date: new Date().toISOString() }
];

export const exhibitionClients = [
    { _id: 'c1', name: 'Acme Global Inc.', email: 'billing@acme.com', address: 'Tech Plaza, Silicon Valley', defaultRate: 85 },
    { _id: 'c2', name: 'Neural Softworks', email: 'hr@neural.io', address: 'Quantum Hub, Bangalore', defaultRate: 120 },
    { _id: 'c3', name: 'Apex Design Studio', email: 'contact@apex.design', address: 'Creative District, London', defaultRate: 95 },
    { _id: 'c4', name: 'Stellar Logistics', email: 'ops@stellar.com', address: 'Transport Way, Dubai', defaultRate: 75 }
];

export const exhibitionProjects = [
    { _id: 'p1', name: 'Quantum UI Redesign', client: { name: 'Acme Global Inc.' }, hourlyRate: 85, status: 'Active' },
    { _id: 'p2', name: 'Neural API Integration', client: { name: 'Neural Softworks' }, hourlyRate: 120, status: 'Active' },
    { _id: 'p3', name: 'Cyber-Security Audit', client: { name: 'Apex Design Studio' }, hourlyRate: 95, status: 'Completed' },
    { _id: 'p4', name: 'Cloud Migration', client: { name: 'Stellar Logistics' }, hourlyRate: 75, status: 'Active' },
    { _id: 'p5', name: 'AI Dashboard Build', client: { name: 'Neural Softworks' }, hourlyRate: 125, status: 'On Hold' }
];
