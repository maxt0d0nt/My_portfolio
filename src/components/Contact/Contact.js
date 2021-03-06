import React, { useEffect, useRef, useState } from 'react';
import { Animated } from '../AnimatedLetters/Animated';
import emailjs from '@emailjs/browser'
import './Contact.scss';


export const Contact = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef()


  useEffect (() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, []) 

    const sendEmail = (e) => {
      e.preventDefault()

      emailjs
      .sendForm(
        'service_elsbeun',
        'template_25gubc9',
        refForm.current,
        'NJ-zwgUcr4gzxQqAo'
      )
      .then(
        () => {
          alert('Message Successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the mesaage, please try again')
        }
      )
    }

  return (
    <>
    <div className='container contact-page'>
      <div className='text-zone'>
        <h1>
          < Animated letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />
        </h1>
        <p>
          I'm interested in freelance opportunities - especially ambitious or large projects.
          However, if you have other request or question, don't hesitate to contact me using below form either.
        </p>

        <div className='contact-form'>
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className='half'>
                <input type='text' name='name' placeholder='Name' autoFocus required />
              </li>

              <li className='half'>
                < input placeholder='Email' name='email' type='email' required />
              </li>

              <li>
                <input placeholder='Subject' name='subject' type='text' required />
              </li>

              <li>
                <textarea placeholder='Message'
                name='message' required></textarea>
              </li>
              
              <li>
                <input type='submit' className='flat-button' value='SEND' />              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
