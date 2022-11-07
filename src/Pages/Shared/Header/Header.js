import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100 mb-5">
            <div className="navbar-start">
                <button className="btn btn-ghost normal-case text-xl"><Link to='/'>Rainbow Photography</Link></button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/addservice'>Add Service</Link></li>
                    <li><Link to='/myreviews'>My Reviews</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className='btn mr-2'><Link to='/login'>Login</Link></button>
                <button className='btn'><Link to='/signup'>Signup</Link></button>
            </div>
        </div>
    );
};

export default Header;