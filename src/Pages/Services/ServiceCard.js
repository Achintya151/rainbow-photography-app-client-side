import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, img, title, charge, description } = service;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img className='h-full w-40' src={img} alt="Movie" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title capitalize">{title}</h2>
                <p>{
                    description.length > 100 ?
                        <>
                            {description.slice(0, 100) + '...'}
                        </>
                        :
                        description
                }</p>
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