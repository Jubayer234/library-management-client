import React from 'react'
import { Link } from 'react-router-dom';

const TheBooks = ({ card }) => {
    const { id, category, BookImg1, BookImg2, BookImg3, BookImg4, BookName1, BookName2, BookName3, BookName4, authorName1,authorName2,authorName3,authorName4 } = card || {};


    return (
        <div className='items-center max-w-7xl mx-auto pt-10'>
            <h2 className='text-center font-serif text-[#a38585] text-4xl border-b-4 border-[#a38585] w-4/6 mx-auto pb-5'>All The Books Of This Category</h2>
            <div className="card grid lg:grid-cols-4 gap-5 bg-[#93A2B5] p-12  mx-auto">
                <div className="bg-[#EEF2F5] shadow-xl rounded-3xl">
                    <figure className='px-8 pt-8'>
                        <img src={BookImg1} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body rounded-lg items-center text-center text-2xl font-semibold">
                        <h2>Name: {BookName1}</h2>
                        <p>Author : {authorName1}</p>
                        <p>{category} </p>
                        <div className="rating rating-md">
                            <input type="radio" name="rating-1" className="rating-hidden" />
                            <input type="radio" name="rating-2" className="mask mask-star-2" />
                            <input type="radio" name="rating-3" className="mask mask-star-2" />
                            <input type="radio" name="rating-4" className="mask mask-star-2" />
                            <input type="radio" name="rating-5" className="mask mask-star-2" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2" />
                        </div>
                        <Link to={`/bookDetail/${id}`}><button className='btn mt-8 bg-[#93A2B5] text-white'>
                            Book Details
                        </button></Link>
                    </div>
                </div>
                <div className=" bg-[#EEF2F5]  shadow-xl rounded-3xl">
                    <figure className='px-8 pt-8'>
                        <img src={BookImg2} className="rounded-xl w-full " />
                    </figure>
                    <div className="card-body text-2xl font-semibold items-center text-center">
                        <h2>Name: {BookName2}</h2>
                        <p>Author : {authorName2}</p>
                        <p>{category}</p>
                        <div className="rating rating-md">
                            <input type="radio" name="rating-7" className="rating-hidden" />
                            <input type="radio" name="rating-8" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-10" className="mask mask-star-2" checked/>
                            <input type="radio" name="rating-10" className="mask mask-star-2" />
                            <input type="radio" name="rating-11" className="mask mask-star-2" />
                        </div>
                        <Link to={`/bookDetail2/${id}`}><button className='btn mt-8 bg-[#93A2B5] text-white'>
                            Book Details
                        </button>
                        </Link>
                    </div>
                </div>
                <div className=" bg-[#EEF2F5]  shadow-xl rounded-3xl">
                    <figure className='px-8 pt-8'>
                        <img src={BookImg3} alt="" className="rounded-xl  " />
                    </figure >
                    <div className="card-body text-2xl font-semibold items-center text-center">
                        <h2>Name : {BookName3}</h2>
                        <p>Author : {authorName3}</p>
                        <p>{category}</p>
                        <div className="rating rating-md">
                            <input type="radio" name="rating-9" className="rating-hidden" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" checked />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                        </div>
                        <Link to={`/bookDetail3/${id}`}><button className='btn mt-8 bg-[#93A2B5] text-white'>
                            Book Details
                        </button></Link>
                    </div>
                </div>
                <div className=" bg-[#EEF2F5]  shadow-xl rounded-3xl">
                    <figure className='px-8 pt-8'>
                        <img src={BookImg4} alt="" className="rounded-xl shadow-xl " />
                    </figure>
                    <div className="card-body text-2xl font-semibold items-center text-center">
                        <h2> Name : {BookName4}</h2>
                        <p>Author : {authorName4}</p>
                        <p>{category}</p>
                        <div className="rating rating-md">
                            <input type="radio" name="rating-9" className="rating-hidden" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" checked />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                            <input type="radio" name="rating-9" className="mask mask-star-2" />
                        </div>
                        <Link to={`/productDetail4/${id}`}><button className='btn mt-8 bg-[#93A2B5] text-white'>
                            Book Details
                        </button></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TheBooks