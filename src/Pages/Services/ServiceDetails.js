import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { title, img, description } = useLoaderData();
    return (
        <div>
            <h2 className='text-5xl font-bold capitalize text-center my-2'>{title}</h2>
            <div className='flex justify-between items-center'>
                <img src={img} alt="" className='h-screen' />
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;