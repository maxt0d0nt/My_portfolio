import React, { useEffect, useState} from 'react';
import './Portfolio.scss';
import { Animated } from '../AnimatedLetters/Animated';



export const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

useEffect (() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, []) 

  return (

    <>
    <div className='container portfolio-page'>
      <div className='text-zone'>
        <h1>
          < Animated letterClass={letterClass} strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']} idx={15} />
        </h1>
        </div>
    </div>
    </>

  )
}
