import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Review = ({ singleReview }) => {
    const { user } = useContext(AuthContext);
    const { _id, email, name, serviceName, rating, review, reviewerImg } = singleReview;
    return (
        <div className="card w-full bg-base-100 shadow-xl mb-4">
            <div className="card-body">
                <h2 className="card-title">
                    <div className="avatar">
                        <div className="h-16 rounded-full">
                            <img src={reviewerImg ? reviewerImg : 'no image'} alt='' />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-sm mb-2'>{name}</span>
                        <span className='text-xs'>{email}</span>
                    </div>
                </h2>
                <p className='font-semibold'>{serviceName}</p>
                <p>{review}</p>
                <div className="text-end">
                    <p>Rating: {rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;