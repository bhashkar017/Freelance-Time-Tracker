import React from 'react';

const Developer = () => {
    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <div className="card animate-slide-up" style={{
                maxWidth: '500px',
                textAlign: 'center',
                padding: '50px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: 'url(https://ui-avatars.com/api/?name=Bhashkar&background=007bff&color=fff&size=256) center/cover',
                    margin: '0 auto 20px',
                    border: '5px solid white',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}></div>

                <h1 style={{ marginBottom: '10px', color: '#2c3e50' }}>Bhashkar</h1>
                <p style={{ color: '#666', marginBottom: '30px', fontStyle: 'italic' }}>
                    "Passionate about building scalable solutions and crafting beautiful user experiences. Committed to continuous learning and innovation in the MERN stack."
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5', fontSize: '1.5rem', transition: 'transform 0.2s' }}>
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: '#333', fontSize: '1.5rem', transition: 'transform 0.2s' }}>
                        <i className="fab fa-github"></i> GitHub
                    </a>
                </div>

                <div style={{ borderTop: '1px solid #eee', paddingTop: '20px' }}>
                    <p style={{ fontFamily: 'Brush Script MT, cursive', fontSize: '2rem', color: '#007bff', margin: 0 }}>
                        Bhashkar
                    </p>
                    <span style={{ fontSize: '0.8rem', color: '#ccc', letterSpacing: '2px' }}>DEVELOPER</span>
                </div>
            </div>
        </div>
    );
};

export default Developer;
