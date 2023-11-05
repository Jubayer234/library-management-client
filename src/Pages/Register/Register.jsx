import React from 'react'
import { Link } from 'react-router-dom'
import png from '../../assets/image 1.png'

const Register = () => {
    return (
        <div className='bg-[#e6ecf0] min-h-screen pt-10'>
            <h2 className='text-center font-serif font-semibold pb-8 text-4xl text-[#434a8c]'>Create An Account</h2>
            <div className='bg-[#93A2B5] max-w-7xl mx-auto md:rounded-tl-[100px] md:rounded-br-[100px] grid lg:flex items-center justify-center pt-28 pb-28 px-5'>
                <div>
                    <img className='bg-[#e8efff] lg:h-[595px] p-10 lg:rounded-tl-[100px]' src={png} />
                </div>
                <div className='bg-[#e8efff] lg:h-[595px] lg:rounded-br-[100px]'>
                    <form className="card-body lg:w-[450px] mx-auto">
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
                    <input  type="email" placeholder="Enter your email" name='email' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input  type="password" name='password' placeholder="Provide password" className="input input-bordered" required />
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
        </div>
    )
}

export default Register