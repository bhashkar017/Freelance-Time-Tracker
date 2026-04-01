import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';

const ConditionalFooter = () => {
    const location = useLocation();

    // Array of paths where the footer should NOT be visible
    const hideOnPaths = [
        '/dashboard',
        '/clients',
        '/projects',
        '/log-time',
        '/invoices'
    ];

    // Check if the current path starts with any of the hidden paths
    const shouldHide = hideOnPaths.some(path => location.pathname.startsWith(path));

    if (shouldHide) {
        return null; // Return nothing if we are on a dashboard page
    }

    return <Footer />;
};

export default ConditionalFooter;
