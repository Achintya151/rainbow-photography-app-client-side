import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Review from '../Reviews/Review';
import { Helmet } from 'react-helmet'


const MyReviews = () => {
    const [myReviews, setMyReviews] = useState([]);
    console.log(myReviews);
    const { user } = useContext(AuthContext);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remaining = myReviews.filter(review => review._id !== id);
                        setMyReviews(remaining)
                    }
                })
        }
    }

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])
    return (
        <div>
            <Helmet>
                <title>My reviews</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            {myReviews.length === 0 ?
                <h2 className='text-4xl text-center my-10 font-bold'>No were review added</h2>
                :
                myReviews.map(singleReview => <Review
                    key={singleReview._id}
                    singleReview={singleReview}
                    handleDelete={handleDelete}
                ></Review>)
            }
        </div>
    );
};

export default MyReviews;