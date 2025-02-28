import React from 'react';
import './contactForm.css';

const ContactForm = () => {
  return (
    <>
      <div className="contact-form">
        <h1>Contact Us</h1>
        <form>
          <div>
          <label htmlFor="name">Name:</label>
          </div>
          <div>
          <input type="text" id="name" name="name" placeholder="Your name.." required />
          </div>
          <div>
          <label htmlFor="email">Email:</label>
          </div>
          <div>
          <input type="email" id="email" name="email" placeholder="Your email.." required />
          </div>
          <div>
          <label htmlFor="message">Message:</label>
          </div>
           <div>
           <textarea id="message" name="message" placeholder="Write something.." required></textarea>
          
           </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default ContactForm
