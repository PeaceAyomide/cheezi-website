import React from 'react'
import './Contact.css'
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
      <section id="contact" className='contact-begin'>
          <div className="contact">
              <h1>Contact Us</h1>
              <div className="contact-box">
                  <div className="icons">
                      <div className="instagram">
                          <FaInstagram/>
                      </div>
                      <div className="youtube">
                          <FaYoutube/>
                      </div>
                      <div className="email">
                          <MdOutlineEmail/>
                      </div>
                  </div>
                  <div className="emailpage">
                      <div className="name">
                      <label htmlFor="FirstName">First Name</label>
                      <input type="text"  placeholder='Enter Name'/>   
                      </div>
                      <div className="emaile">
                          <label htmlFor="Email">Email</label>
                          <input type="email"  placeholder='Enter Email'/>
                      </div>
                      <div className="message">
                          <label htmlFor="Message">Message</label>
                          <textarea name="message" id="Message" placeholder='Enter Message'></textarea>
                      </div>
                                  <button>Send</button>    </div>
              </div>
          </div>
    </section>
  )
}

export default Contact