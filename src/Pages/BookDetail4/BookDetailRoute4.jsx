import React from 'react'

const BookDetailRoute4 = ({card}) => {
    const { id, BookImg4, category, BookName4,authorName4 } = card || {};
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="card w-[350px] md:w-[550px] mx-auto bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={BookImg4} className="w-[500px] lg:h-[500px] rounded-xl" />
                </figure>
                <div className="card-body items-center text-center text-xl font-semibold">
                    <h2 className="card-title">Category : {category}</h2>
                    <p>Book Name : {BookName4}</p>
                    <p>Author Name : {authorName4}</p>
                    <div className="rating rating-md">
                            <input type="radio" name="rating-1" className="rating-hidden" />
                            <input type="radio" name="rating-2" className="mask mask-star-2" />
                            <input type="radio" name="rating-3" className="mask mask-star-2" />
                            <input type="radio" name="rating-4" className="mask mask-star-2" checked/>
                            <input type="radio" name="rating-5" className="mask mask-star-2" />
                            <input type="radio" name="rating-6" className="mask mask-star-2" />
                        </div>
                    <div className="card-actions">
                        <button className="btn bg-[#93A2B5] text-white">Read</button>
                        <button className="btn bg-[#93A2B5] text-white">Borrow</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetailRoute4