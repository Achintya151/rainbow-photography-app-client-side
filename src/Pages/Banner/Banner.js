import React from 'react';
import { Link } from 'react-router-dom';
import Banner1 from '../../Assets/Images/Banner/Banner-1.jpg';
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Banner1} alt='' className="max-w-md rounded-lg shadow-2xl h-screen" />
                <div className='ml-10'>
                    <h1 className="text-5xl font-bold">Bring life to your memories!</h1>
                    <p className="py-6">Rainbow Photography capture the important moments of your life. You can customize your service and help us to serve you.</p>
                    <button className="btn btn-primary"><Link to='/'>Get Started</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;