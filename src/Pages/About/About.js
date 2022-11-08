import React from 'react';
import Banner2 from '../../Assets/Images/Banner/Banner-2.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={Banner2} alt='' className="max-w-lg rounded-lg shadow-2xl h-screen" />
                <div>
                    <h1 className="text-5xl font-bold">About us</h1>
                    <p className="py-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects.</p>
                </div>
            </div>
        </div>
    );
};

export default About;