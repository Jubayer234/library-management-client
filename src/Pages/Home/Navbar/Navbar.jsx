import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import NavLogo from '../../../assets/book-stack 1.png'
import { AuthContext } from '../../../Provider/AuthProvider';
import UserProfile from '../../UserProfile/UserProfile';

const Navbar = () => {

    const navLinks = <div className='lg:flex gap-10 text-lg text-black font-semibold'>
        <p>
            <NavLink className={({ isActive }) =>
                isActive ? " underline text-[#8E6841]" : ""} to="/">Home</NavLink>
        </p>
        <p>
            <NavLink className={({ isActive }) =>
                isActive ? " underline text-[#8E6841]" : ""} to="/addBook">Add Book</NavLink>
        </p>
        <p>
            <NavLink className={({ isActive }) =>
                isActive ? " underline text-[#8E6841]" : ""} to="/myCart">All Books</NavLink>
        </p>
        <p>
            <NavLink className={({ isActive }) =>
                isActive ? " underline text-[#8E6841]" : ""} to="/borrowedBooks">Borrowed
                Books</NavLink>
        </p>
        <p>
            <NavLink className={({ isActive }) =>
                isActive ? " underline text-[#8E6841]" : ""} to="/register">Register</NavLink>
        </p>
        <p>
            <NavLink className={({ isActive }) =>
                isActive ? " underline text-[#8E6841]" : ""} to="/login">Login</NavLink>
        </p>

    </div>

    return (
        <div className='max-w-7xl mx-auto  pt-6 pb-5 border-b border-black'>
            <div className="navbar flex gap-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className='w-8 lg:w-10 items-center ' src={NavLogo} />
                    <p className="btn btn-ghost normal-case text-lg md:text-4xl">Bookoe</p>
                </div>
                <div className="navbar-center hidden lg:flex mr-20">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div>
                <UserProfile></UserProfile>
                </div>
            </div>
        </div>
    )
}

export default Navbar