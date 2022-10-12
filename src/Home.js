import React from 'react'
import Bloglist from './Bloglist';
import useFetch from './useFetch';
import { useEffect } from 'react';
function Home() {


      
      const {data,isPending,error}=useFetch('http://localhost:8000/blogs');

  return (
    <div className='home'>
        {/* <Bloglist blogs={blogs} title="All Blogs!" /> */}
        {error && <div>{error}</div>}
        {isPending && <div>Loading....</div>}
        {data && <Bloglist data={data} title={"All Blogs!"}/>}
        </div>
  )
}

export default Home