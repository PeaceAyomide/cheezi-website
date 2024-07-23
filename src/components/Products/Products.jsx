import React from 'react'
import 'animate.css';

const Products = () => {
  return (
    <section class="pt-[10rem] px-[3%] pb-[12rem]  text-white" id="products">
      <div className='flex justify-center pb-[4rem]'>
        <h1 className='text-[1.8rem] font-[600] text-black'> Start here</h1>
      </div>
    <div className='flex custom:flex-col flex-row-reverse justify-center custom:items-center  gap-7'>
        <div className='words w-[30rem] flex flex-col gap-3 ipad:w-[20rem]  custom:items-center'>
          <h2 className='text-[1.4rem] font-[600] text-black'>Want to work with us ?</h2>
          <p className='flex flex-wrap text-black custom:text-center'>
            Share your ideas, possibilities and get production cost
    </p>
    <button className=' bg-black w-[9rem] h-[3rem]  text-[1.3rem] transition duration-300 ease-in-out hover:scale-110 animate__animated animate__pulse animate__infinite'>Book a call</button>
    </div>
  <div className='box h-[15rem] w-[26rem] bg-black rounded-[1rem] ipad:w-[20rem] ipad:h-[13rem] custom:h-[10rem] custom:w-[18rem]'>

  </div>
</div>
</section>
  )
}

export default Products