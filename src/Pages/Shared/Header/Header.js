import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(e => console.error(e))
    }

    return (
        <div className="navbar bg-base-100 mb-5">
            <div className="navbar-start">
                <button className="btn btn-ghost normal-case text-xl"><Link to='/'>Rainbow Photography</Link></button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    {
                        user?.email ?
                            <>
                                <li><Link to='/addservice'>Add Service</Link></li>
                                <li><Link to='/myreviews'>My Reviews</Link></li>
                            </>
                            :
                            <></>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ?
                        <>
                            <div className="avatar">
                                <div className="w-auto h-12 flex rounded-full">
                                    <img src={user?.photoURL} alt='' />
                                </div>
                            </div>
                            <span className='mx-4'>{user?.displayName}</span>
                            <button className='btn mr-2' onClick={handleLogOut} >Logout</button>
                        </>
                        :
                        <>
                            <button className='btn mr-2'><Link to='/login'>Login</Link></button>
                            <button className='btn'><Link to='/signup'>Signup</Link></button>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;