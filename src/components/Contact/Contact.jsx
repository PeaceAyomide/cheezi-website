import React from 'react'
import { MdLocalPhone } from "react-icons/md";
import { ImBehance } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
const Contact = () => {
  return (
    <div>
      <div className=" flex-col gap-6 pt-[3rem] px-[3%] pb-[8rem] bg-[rgb(22,22,22)] text-white flex justify-center">
        <p className='text-[1.4rem] font-[600] flex justify-center'>Lets Connect</p>
        <div className='flex justify-center gap-4'>
          <div className='bg-white p-3 rounded-[2rem] transition duration-300 ease-in-out hover:scale-110 cursor-pointer'><MdLocalPhone className='text-black text-[1.5rem]' /></div>
          
          <div className='bg-white p-3 rounded-[2rem] transition duration-300 ease-in-out hover:scale-110 cursor-pointer'><ImBehance  className='text-black text-[1.5rem]' /></div>
          
          <div className='bg-white p-3 rounded-[2rem] transition duration-300 ease-in-out hover:scale-110 cursor-pointer'><FaInstagram className='text-black text-[1.5rem]' /></div>
           
          <div className='bg-white p-3 rounded-[2rem] transition duration-300 ease-in-out hover:scale-110 cursor-pointer'><FiMail className='text-black  text-[1.5rem]' /></div>
           
<div className='bg-white p-3 rounded-[2rem] text-black text-[1rem] font-[600] transition duration-300 ease-in-out hover:scale-110 cursor-pointer'>CV</div>
        </div>
      </div>
      <div className=" flex-col  pt-[3rem] px-[3%] pb-[4rem] bg-[rgb(12,12,12)] text-white flex justify-center items-center text-[1.5rem]"> Faith Melodi </div>
    </div>
  )
}

export default Contact