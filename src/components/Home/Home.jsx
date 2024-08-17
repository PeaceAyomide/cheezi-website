import React from 'react'
import bghome from '../Home/bghome.jpg'
import video from '../Home/video.mp4'

const Home = () => {

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section class="pt-[8rem]  px-[3%] pb-[12rem]  bg-black text-white" id="home" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bghome})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundSize: 'cover'}}>
      <div className='flex flex-row-reverse custom:flex-col  justify-center items-center gap-7'>
        <div className='words w-[30rem] ipad:w-[20rem] flex flex-col gap-2'>
          <p className='flex flex-wrap custom:text-center'>
            Our passion for storytelling and creativity drives us to produce captivating animations that bring your ideas to life
          </p>
          <p className='flex flex-wrap custom:text-center'>
Explore our portfolio and discover the magic of animation with Cheezi Studios.
          </p>
        
          </div>
        <div className='box custom:h-[10rem] custom:w-[18rem] h-[15rem] w-[26rem] overflow-hidden ipad:w-[20rem] ipad:h-[13rem] bg-inherit rounded-[1rem]'>
<video    src={video} 
            controls 
            autoPlay 
            className="w-full h-full object-cover" 
            muted />
        </div>
      </div>
      <div className='flex justify-center pl-[43rem] ipad:pl-[20rem] custom:pl-0 custom:pt-8'>
          <button   className=' rounded-[2rem] border-white border-[0.1rem] border-solid bg-black w-[9rem] h-[3rem]  transition duration-300 ease-in-out hover:scale-110'  onClick={scrollToContact}>Contact Us</button>
       
          </div>
    </section>
  )
}

export default Home