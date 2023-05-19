import React from 'react'
import './Touch.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
export default function Touch() {

    const form = useRef();

    const sendEmail = (e) => {

        alert('message sent successfully !!')
        emailjs.sendForm('service_27ueuzh', 'template_5rmjuh7', form.current, 'Nx-Ds3avk41e6UDw9')
    };
    return (
        <div className='contact-container'>
            <div className='contact-header'>
                <h2>Contact Me</h2>
                <h4>Get In Touch</h4>
            </div>
            <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Name' required></input>
                    <br></br><br></br><input type='email' name='email' placeholder='Email Id' required></input>
                    <br></br><br></br><input type='text' name='phone' placeholder='Phone no.' required></input>
                    <br></br><br></br><textarea name='message' rows='4' placeholder='How Can I Help You ?'></textarea>
                    <br></br><br></br><button className='btn highlighted-btn'>
                        Send
                    </button>
                </form>
            </div>
        </div>
    )

}