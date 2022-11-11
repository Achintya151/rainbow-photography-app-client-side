import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Review from '../Reviews/Review';


const MyReviews = () => {
    const [myReviews, setMyReviews] = useState([]);
    console.log(myReviews);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])
    return (
        <div>
            {
                myReviews.map(singleReview => <Review key={singleReview._id} singleReview={singleReview}></Review>)
            }
        </div>
    );
};

export default MyReviews;