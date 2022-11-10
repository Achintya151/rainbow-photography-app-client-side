import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Signup = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleSignup = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                handleUpdateUser(name, photoURL)
                console.log(user);
            })
            .catch(e => console.error(e))
    }

    const handleUpdateUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e))
    }

    return (
        <div className="hero min-h-screen min-w-full bg-base-200 ">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left py-5">
                    <h1 className="text-5xl font-bold">Signup now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSignup}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name='photoURL' type="text" placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div>
                            <p className="py-2 text-center"><small>Already have an account? Please <Link to='/login'>Login.</Link></small></p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary md:px-40">Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;