import { useState } from 'react';
import './contact.scss';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [error, setError]=useState("");

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    toast.info("Thank you for Sending me a message...", { autoClose: 2000 });

    try {
      await axios.post("https://formspree.io/f/myzjddzw", formData);
      toast.success("You have successfully sent the message!"); // Show success message
      setFormData({ name: '', email: '', message: ''});

    } catch (error) {
      setError('Please try again');
      toast.error("Error sending message. Please try again."); // Show error message
    }
  }

  console.log(formData)

  return (
    <div className='contact' id="contact">
      <div className="left">
        <div className="imgContainer">
           <img src="/assets/shake.svg" alt="" />
        </div>
      </div>
      <div className="right">
        <h2>Let's get in touch.</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            placeholder='your name'
            onChange={handleChange} 
            value={formData.name}
            required
          />
          <input 
            type="text" 
            name="email"
            placeholder='your email'
            onChange={handleChange} 
            value={formData.email}
            required
          />
          <textarea 
            name='message'
            placeholder='Message...'
            onChange={handleChange} 
            value={formData.textarea}
            required
          >
          </textarea>
          <button type="submit">Send</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}
