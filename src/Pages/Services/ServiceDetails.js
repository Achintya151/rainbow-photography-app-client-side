import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import AllReviews from '../Reviews/AllReviews';
import ReviewForm from '../Reviews/ReviewForm';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const { _id, title, img, description } = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <h2 className='text-5xl font-bold capitalize text-center'>{title}</h2>
            <div className='flex justify-between items-center my-10'>
                <img src={img} alt="" className='h-screen pr-5' />
                <p>{description}</p>
            </div>
            <h2 className='text-5xl font-bold capitalize text-center'>Reviews</h2>
            <AllReviews key={_id} serviceId={_id} ></AllReviews>
            <br />
            {
                user?.uid ?
                    < ReviewForm key={_id} serviceId={_id} title={title}></ReviewForm>
                    :
                    <>
                        <h2 className='text-center my-6 text-2xl'>To review our work please <strong><Link to='/login'>Login.</Link></strong></h2>
                    </>
            }
        </div >
    );
};

export default ServiceDetails;