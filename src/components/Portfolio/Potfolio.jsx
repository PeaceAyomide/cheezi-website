import React from 'react'
import man from '../Portfolio/3dman.jpg'

const Potfolio = () => {
  return (
    <section class="pt-[8rem] px-[3%] pb-[10rem]  text-white" id="portfolio">
     
    <div className='flex flex-row justify-center custom:items-center gap-7 custom:flex-col '>
        <div className='words w-[30rem] flex flex-col gap-3 ipad:w-[20rem] custom:text-center custom:justify-center custom:items-center'>
          <h2 className='text-[1.4rem] font-[600] text-black'>Speed up your creative journey</h2>
          <p className='flex flex-wrap text-black'>
            Learn how to use various motion design and animation tools. Also, get various preset that saves you time
    </p>
    <button className=' bg-black custom:text-[1.1rem]  custom:w-[10rem] custom:text-center custom:flex custom:justify-center  w-[19rem] h-[3rem]  text-[1.5rem] transition duration-300 ease-in-out hover:scale-110 flex items-center pl-1 custom:pl-0 '>Check it out</button>
    </div>
  <div className='box h-[21.3rem] w-[26rem] overflow-hidden bg-black rounded-[1rem] ipad:w-[20rem] ipad:h-[15rem] custom:h-[13rem] custom:w-[18rem]'>
<img src={man} alt="" />
  </div>
</div>
</section>
  )
}

export default Potfolio