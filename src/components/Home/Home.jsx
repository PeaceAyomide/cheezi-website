import React, { useRef } from 'react'
import './Home.css'
import  intro from '../Home/video.mp4'

const Home = () => {


    
  return (
      <section className='home'>
          <div className="content">
              <h1 className='heading'>Welcome to Cheezi Studious</h1>
              <p>reach out to us for 3d animation</p>
              <div className="btn-border">
              <button className='btn'>Contact Us</button>
                
              </div>            
          </div>
          <video autoPlay controls className="custom-video"><source src={intro} type="video/mp4" />
            </video>
   </section>
  )
}

export default Home