import './contact.scss'

export default function Contact() {

  return (
    <div className='contact' id="contact">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/shake.svg" alt="" />
        </div>
      </div>
      <div className="right">
        <h2>Let's get in touch.</h2>
        <form >
          <input type="text" placeholder='name' />
          <input type="text" placeholder='email' />
          <textarea placeholder='Message'></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}
