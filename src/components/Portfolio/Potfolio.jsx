import React from 'react'

const Potfolio = () => {
  return (
    <section class="pt-[3rem] px-[3%] pb-[12rem]  text-white">
     
    <div className='flex flex-row justify-center custom:items-center gap-7 custom:flex-col '>
        <div className='words w-[30rem] flex flex-col gap-3 ipad:w-[20rem] custom:text-center custom:justify-center custom:items-center'>
          <h2 className='text-[1.4rem] font-[600] text-black'>Speed up your creative journey</h2>
          <p className='flex flex-wrap text-black'>
            Learn how to use various motion design and animation tools. Also, get various preset that saves you time
    </p>
    <button className=' bg-black custom:text-[1.1rem]  custom:w-[10rem] custom:text-center custom:flex custom:justify-center  w-[19rem] h-[3rem]  text-[1.5rem] transition duration-300 ease-in-out hover:scale-110 flex items-center pl-1 custom:pl-0 '>Check it out</button>
    </div>
  <div className='box h-[15rem] w-[26rem] bg-black rounded-[1rem] ipad:w-[20rem] ipad:h-[13rem] custom:h-[10rem] custom:w-[18rem]'>

  </div>
</div>
</section>
  )
}

export default Potfolio