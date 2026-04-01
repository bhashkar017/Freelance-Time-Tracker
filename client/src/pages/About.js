import React from 'react';

const About = () => {
    return (
        <div className="container" style={{ maxWidth: '800px', margin: '50px auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>About Us</h1>

            <div className="card" style={{ marginBottom: '30px' }}>
                <h2 style={{ color: 'var(--primary-color)' }}>Our Mission</h2>
                <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
                    Freelancing is hard. Tracking time shouldn't be. <br /><br />
                    We built <strong>FreelanceTracker</strong> to give developers, designers, and consultants a powerful, distraction-free tool to manage their businesses.
                    Our goal is to help you stop worrying about admin work and focus on what you do best: <strong>Creating.</strong>
                </p>
            </div>

            <div className="card">
                <h2 style={{ color: 'var(--secondary-color)' }}>Who We Are</h2>
                <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
                    We are a team of passionate MERN stack developers dedicated to building high-quality, scalable web applications.
                    This project was born out of a need for a simple, yet robust time tracking solution that didn't feel like a corporate spreadsheet.
                </p>
            </div>
        </div>
    );
};

export default About;
