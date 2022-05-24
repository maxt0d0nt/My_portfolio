import React, { useEffect, useState } from 'react';
import { Animated } from '../AnimatedLetters/Animated';
import './Contact.scss';


export const Contact = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect (() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, []) 

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
          <form>
            <ul>
              <li className='half'>
                <input type='text' name='name' placeholder='Name' required />
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
