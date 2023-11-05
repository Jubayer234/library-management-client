import React from 'react'
import { Link } from 'react-router-dom'
import svg from '../../assets/login 1.png'

const Login = () => {


        const handleLogIn = event => {
            event.preventDefault();
        }

    return (
        <div className='bg-[#e6ecf0] min-h-screen pt-10'>
            <h2 className='text-center font-serif font-bold pb-5 mb-8 text-4xl text-[#434a8c] border-b border-[#434a8c] md:w-96 mx-auto'>Please Login</h2>
            <div className='bg-[#93A2B5] md:rounded-tr-[100px] md:rounded-bl-[100px] max-w-7xl mx-auto grid lg:flex items-center justify-center pt-28 pb-28 px-5'>
                
        <div>
            <img className=' lg:rounded-bl-[100px]' src={svg}/>
        </div>
        <div>
        <div className="lg:w-[450px] lg:h-[472px] mx-auto lg:rounded-tr-[100px] bg-[#F4F4F4] ">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn font-bold text-white bg-[#b08cf4]">Login</button>
                            </div>
                            <button className='btn bg-[#fc77ae] text-white'>sign In with google</button>
                            <p className='text-lg mt-5 text-center '>Don't have an account? <Link className='text-blue-600 font-serif font-semibold' to="/register" >Register</Link></p>
                            
                        </form>
                        
                    </div>
        </div>
    </div>
        </div>
    )
}

export default Login