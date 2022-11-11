import React, { useEffect, useState } from 'react';
import Review from './Review';

const AllReviews = ({ serviceId }) => {
    const [reviews, setReviews] = useState([]);
    console.log(reviews);

    useEffect(() => {

        fetch(`https://service-review-server-side-topaz.vercel.app/reviewsbyserviceid?serviceId=${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                if (data.acknowledged) {
                    alert('Please reload to see the review')
                }
            })
    }, [serviceId])
    return (
        <div>
            {
                reviews.map(singleReview => <Review key={singleReview._id} singleReview={singleReview}></Review>)
            }
        </div>
    );
};

export default AllReviews;