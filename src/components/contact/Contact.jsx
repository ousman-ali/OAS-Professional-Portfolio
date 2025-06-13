import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import './contact.scss'

export default function Contact() {
   const [responseMessage, setResponseMessage] = useState('');
   const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sje328c', 'template_8nry8ug', form.current, {
        publicKey: '7xZxvwOtVMTNgcZy5',
      })
      .then(
        () => {
          setResponseMessage('Message sent successfully!');
          form.current.reset(); // Reset the form after sending
        },
        (error) => {
          console.log('FAILED...', error.text);
          setResponseMessage('Failed to send message. Please try again.');
          console.error('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact' id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Let's get in touch.</h2>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" placeholder='name' />
          <input type="text" placeholder='email' />
          <textarea placeholder='Message'></textarea>
          <button type="submit">Send</button>
           {responseMessage && <span>{responseMessage}</span>}
        </form>
      </div>
    </div>
  )
}
