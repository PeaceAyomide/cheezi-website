import React, { useState, useEffect }  from 'react'
import Logo from '../Navbar/Logo.png'


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
    
  
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const closeNavbar = () => {
    setIsOpen(false);
  };
  

  return (
    <div className={`Navbar custom:gap-[7rem]  h-[6rem] flex justify-center items-center bg-black text-white  ${isSticky ? 'sticky top-0 z-50' : ''}`
}  
   
    >
      <img src={Logo} className='h-img custom:m-19px ' alt="CHEEZI STUDIOS" />
      <div className="nav-items  custom:hidden flex pl-[20rem] ipad:pl-[6rem]">
        <a href="#" className=' text-white no-underline relative opacity-0.9  text-16px m-29px transition duration-0.8s hover:text-aqua'>Home</a>
        <a href="https://www.behance.net/faithmelodi"  className=' text-white no-underline relative opacity-0.9  text-16px m-29px transition duration-0.8s hover:text-aqua'>Portfolio</a>
        <a href="#portfolio"  className=' text-white no-underline relative opacity-0.9 text-16px m-29px transition duration-0.8s hover:text-aqua'>Academy</a>
        <a href="#contact"  className=' text-white no-underline relative opacity-0.9 text-16px m-29px transition duration-0.8s hover:text-aqua'>Contact</a>
      
      </div>

      <div className={`nav-items2 hidden custom:flex fixed top-60px pt-3rem items-center gap-1rem text-1.2rem flex-col left-0 w-full h-full z-100  bg-black bg-opacity-95 transform -translate-x-full transition-all duration-500 ${isOpen ? 'transform translate-x-0' : '-translate-x-full'}`}>
        <a href="#home" className=' transition duration-0.4s hover:text-aqua' onClick={closeNavbar}>Home</a>
        <a href="https://www.behance.net/faithmelodi"  className=' transition duration-0.4s hover:text-aqua' onClick={closeNavbar}>Portfolio</a>
        <a href="#portfolio"  className=' transition duration-0.4s hover:text-aqua' onClick={closeNavbar}>Academy</a>
        <a href="#contact"  className=' transition duration-0.4s hover:text-aqua' onClick={closeNavbar}>Contact</a>
      
      </div>
      <div className="md:hidden flex items-center pr-3">
        <div className="w-8 h-8 flex flex-col justify-between cursor-pointer " onClick={() => setIsOpen(!isOpen)}>
          <div className={`w-full h-1 bg-white transition duration-500 ${isOpen ? 'transform rotate-45 translate-y-4' : ''}`}></div>
          <div className={`w-full h-1 bg-white transition duration-500 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-full h-1 bg-white transition duration-500 ${isOpen ? 'transform -rotate-45 -translate-y-3' : ''}`}></div>
        </div>
      </div>
    </div> )
}
  

export default Navbar