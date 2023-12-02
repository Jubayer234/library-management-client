import React from 'react'
import { Link } from 'react-router-dom';

const BookDetailRoute = ({ card }) => {
    const { id, BookImg1, category, BookName1, authorName1 } = card || {};
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="card w-[350px] md:w-[550px] mx-auto bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={BookImg1} className="w-[500px] lg:h-[500px] rounded-xl" />
                </figure>
                <div className="card-body items-center text-center text-xl font-semibold">
                    <h2 className="card-title">Category : {category}</h2>
                    <p>Book Name : {BookName1}</p>
                    <p>Author Name : {authorName1}</p>
                    <div className="rating rating-md">
                        <input type="radio" name="rating-1" className="rating-hidden" />
                        <input type="radio" name="rating-2" className="mask mask-star-2" />
                        <input type="radio" name="rating-3" className="mask mask-star-2" />
                        <input type="radio" name="rating-4" className="mask mask-star-2" />
                        <input type="radio" name="rating-5" className="mask mask-star-2" checked />
                        <input type="radio" name="rating-6" className="mask mask-star-2" />
                    </div>
                    <div className="card-actions">
                        <Link to={'/read'}>
                            <button className="btn bg-[#93A2B5] text-white">Read</button></Link>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn bg-[#93A2B5] text-white" onSubmit={() => document.getElementById('my_modal_1').showModal()}>Borrow</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className="">
                                    <input type="date" name="returnDate" id="" />
                                    <form method="dialog">
                                        <button className="btn mt-10">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetailRoute