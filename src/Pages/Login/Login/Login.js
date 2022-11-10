import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { FaBeer, FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { login, providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(e => console.error(e))
    }

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user);
            })
            .catch(e => console.error(e))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left py-5">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div>
                            <p className="py-2"><small>New to Rainbow Photography? Please <Link to='/signup'>Signup.</Link></small></p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
                <div className="divider">OR</div>
                <button className='btn btn-ghost' onClick={handleGoogleLogin} ><span className='pr-2'><FaGoogle /></span> Login with Google</button>
            </div>
        </div>
    );
};

export default Login;