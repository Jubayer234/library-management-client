import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import png from '../../assets/image 1.png'
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {

    const {createUser,updateUserProfile} = useContext(AuthContext);
    const location = useLocation ();
    const navigate = useNavigate();


    const handleRegister = event => {
        
        event.preventDefault()
        const form = event.target;
        const displayName = form.displayName.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length < 6){
            toast.error("Your password is less then 6 character")
            return;
        }
        else if(!/[A-Z]/.test(password)){
            toast.error("Your password should have  at Least one Capital letter")
            return;
        }else if(!/(?=.*[@$!%*?&])/.test(password)){
            toast.error("Password doesn't have a special character")
            return;
        }else {
            createUser(email, password)
                .then(result => {
                    console.log(result.user)
                    updateUserProfile(displayName, photo)
                    .then(result => {
                        Swal.fire('successfully registered!')
                        console.log(result.user)
                        navigate(location?.state ? location.state : '/' )
                    })
                    .catch(error => {
                        console.error(error)
                    })
                })
        }
        }

    return (
        <div className='bg-[#e6ecf0] min-h-screen pt-10'>
            <h2 className='text-center font-serif font-semibold pb-8 text-4xl text-[#434a8c]'>Create An Account</h2>
            <div className='bg-[#93A2B5] max-w-7xl mx-auto md:rounded-tl-[100px] md:rounded-br-[100px] grid lg:flex items-center justify-center pt-20 pb-20 px-5'>
                <div>
                    <img className='bg-[#b8cefc] lg:h-[650px] p-16 lg:rounded-tl-[100px]' src={png} />
                </div>
                <div className='bg-[#b8cefc] lg:h-[650px] pr-8 lg:rounded-br-[100px]'>
                    <form onSubmit={handleRegister} className="card-body lg:w-[450px] mx-auto">
                        <h1 className='text-center text-2xl font-bold border-b border-black pb-4'>
                            Register
                        </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" name='displayName' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Provide password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#ff9391] text-white font-bold">Register</button>
                        </div>
                        <p className='text-lg mt-5 text-center'>Already have an account? <Link className='text-blue-600 font-serif font-semibold' to="/login" >Login</Link></p>
                    </form>
                </div>
            </div>
           <div>
           <Toaster></Toaster>
           </div>
        </div>
    )
}

export default Register