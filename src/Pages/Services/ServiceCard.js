import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, title, charge, description } = service;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='h-full w-40' src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title capitalize">{title}</h2>
                <p>{description}</p>
                <p><strong>Price: ${charge}</strong></p>
                <div className="card-actions justify-end">
                    <Link to={`/service/${_id}`}>
                        <button className="btn btn-primary">View details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;