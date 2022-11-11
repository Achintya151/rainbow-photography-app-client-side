import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [count, setCount] = useState(0);
    const [size, setSize] = useState(3)
    console.log(count, services);

    useEffect(() => {
        fetch(`http://localhost:5000/services?size=${size}`)
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                setServices(data.services)
            })
    }, [size])

    return (
        <div className='my-20 flex flex-col items-center '>
            <h2 className='text-5xl font-bold text-center'>Our Services</h2>
            <div className='grid grid-cols-1 gap-4'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <br />
            {
                size === 3 ?
                    <button className='btn btn-primary w-1/3' onClick={() => setSize(count)}><Link to='/services'>see all</Link></button>
                    :
                    <></>
            }
        </div>
    );
};

export default Services;