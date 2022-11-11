import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const ReviewForm = ({ serviceId, title }) => {
    const { user } = useContext(AuthContext);

    const handleReview = e => {
        e.preventDefault();
        const form = e.target;
        const rating = form.rating.value;
        const email = user?.email || 'unregistered';
        const name = user?.displayName || 'not provided';
        const review = form.review.value;
        const submittedTime = new Date();

        const submittedReview = {
            serviceId: serviceId,
            serviceName: title,
            reviewerImg: user?.photoURL,
            name,
            email,
            rating,
            review,
            submittedTime
        }
        console.log(submittedReview);

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submittedReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    form.reset();
                }
            })
            .catch(e => console.error(e))
    }

    return (
        <form className='my-10' onSubmit={handleReview}>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input name='name' type="text" placeholder="Type here" defaultValue={user?.displayName} className="input input-bordered w-full max-w-xs" readOnly />
                <br />
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input name='email' type="text" placeholder="Type here" defaultValue={user?.email} className="input input-bordered w-full max-w-xs" readOnly />
                <br />
                <label className="label">
                    <span className="label-text">Rate the quality of service</span>
                </label>
                <select className="select select-bordered" name='rating' required>
                    <option disabled selected>Select One</option>
                    <option>Very good</option>
                    <option>good</option>
                    <option>Average</option>
                    <option>bad</option>
                    <option>very bad</option>
                </select>
            </div>
            <br />
            <div className="form-control">
                <textarea name='review' className="textarea textarea-bordered h-24" placeholder="Write a review" required></textarea>
            </div>
            <br />
            <input className='btn btn-success' type="submit" value="Submit Review" />
        </form>
    );
};

export default ReviewForm;