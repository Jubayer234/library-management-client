import React from 'react'

const AddBook = () => {
  return (
    <div className=' bg-[#e6ecf0] min-h-screen lg:pt-10'>

        <h2 className='font-serif text-[#a38585] text-center text-5xl mb-8 border-b border-black w-2/6 mx-auto pb-5'>Add Books</h2>
        <div className="hero-content rounded-lg flex-col mb-24 container lg:w-2/5  bg-[#a2aebe] mx-auto">
        <div className="text-center space-y-4">
        </div>
        <div className="card flex-shrink-0 w-full">
          <form className="card-body grid grid-cols-1 md:grid-cols-2">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Book name" name="name" className="input input-bordered" required />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Author Name</span>
              </label>
              <input type="text" name='brand' placeholder="Name of the author" className="input input-bordered" required />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input type="text" name='type' placeholder="Book category" className="input input-bordered" required />
            </div>
            
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input type="text" name='image' placeholder="Image url" className="input input-bordered" required />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input type="text" name='quantity' placeholder=" Quantity of the book" className="input input-bordered" required />
            </div>
            <div className="form-control col-span-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea placeholder="Write description" name="description" className="input input-bordered w-full min-h-16" required />
            </div>
            <div className="form-control mt-6 col-span-full">
              <button className="btn bg-[#EEF2F5] font-bold" type='submit' >Add Book</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddBook