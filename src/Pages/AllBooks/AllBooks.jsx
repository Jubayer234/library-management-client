import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import SeeBooks from './SeeBooks';

const AllBooks = () => {
    useEffect(() => {
      fetch('https://library-management-server-rho.vercel.app/bookAdd')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setFilterData(data)
      })
      .catch(err => console.log(err));
    },[])
    const [data,setData] = useState([]);
    const [filterData,setFilterData] = useState([]);
    const handleSearch = (value) => {
      const res = filterData.filter(f => f.name.toLowerCase().includes(value))
      setData(res);
      if(value === data){
        setData();
      }
    }
  
    return (
      <div className='pt-28'>
        <div className='max-w-7xl mx-auto'>
          <h4 className='label-text text-xl font-semibold text-center mb-2'>Search Here...</h4>
          <form onChange={e => handleSearch(e.target.value)} className='items-center flex mb-10 justify-center'>
            <input type='text' placeholder='Search Pets' name='search' className='input input-bordered' required />
          </form>
        </div>
        <div>
          <SeeBooks data={data}></SeeBooks>
        </div>
      </div>
    );
  };

export default AllBooks