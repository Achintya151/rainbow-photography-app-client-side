import React from 'react';

const FAQ = () => {
    return (
        <div className='my-20'>
            <h2 className='text-5xl font-bold text-center'>FAQ</h2>
            <br />
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What we do?
                </div>
                <div className="collapse-content">
                    <p>We are Photography service provider</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Why are we different from others?
                </div>
                <div className="collapse-content">
                    <p>We are different because we provide customize services. Client can choose and customize which service to provide.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Who are we?
                </div>
                <div className="collapse-content">
                    <p>We are Photography lovers.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;