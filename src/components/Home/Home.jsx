import React from 'react'

const Home = () => {
  return (
    <section class="pt-[8rem]  px-[3%] pb-[12rem]  bg-black text-white" id="home">
      <div className='flex flex-row-reverse custom:flex-col  justify-center items-center gap-7'>
        <div className='words w-[30rem] ipad:w-[20rem] flex flex-col gap-2'>
          <p className='flex flex-wrap custom:text-center'>
            Our passion for storytelling and creativity drives us to produce captivating animations that bring your ideas to life
          </p>
          <p className='flex flex-wrap custom:text-center'>
Explore our portfolio and discover the magic of animation with Cheezi Studios.
          </p>
        
          </div>
        <div className='box custom:h-[10rem] custom:w-[18rem] h-[15rem] w-[26rem] ipad:w-[20rem] ipad:h-[13rem] bg-white rounded-[1rem]'>

        </div>
      </div>
      <div className='flex justify-center pl-[43rem] ipad:pl-[20rem] custom:pl-0 custom:pt-8'>
          <button className=' rounded-[2rem] border-white border-[0.1rem] border-solid bg-black w-[9rem] h-[3rem]  transition duration-300 ease-in-out hover:scale-110'>Contact Us</button>
       
          </div>
    </section>
  )
}

export default Home