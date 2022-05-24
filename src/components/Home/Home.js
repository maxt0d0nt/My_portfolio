import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import { Animated } from '../AnimatedLetters/Animated';
import './Home.scss';

export const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['c', 'a', 'n', 'i', 'o']
    const jobArray = ['w', 'e', 'b', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r' ] 

    useEffect (() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }, [])  

  return (
    <>
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className={`${letterClass} _14`}> </span>
            <span className={`${letterClass} _15`}>M</span>
            <span className={`${letterClass} _16`}>a</span>
            <span className={`${letterClass} _17`}>x</span>
            <span className={`${letterClass} _14`}> </span>
            <span className={`${letterClass} _15`}>A</span>
            <img src={LogoTitle} alt='developer' />
            <Animated letterClass={letterClass}
            strArray={nameArray}
            idx={15} />
            <br />
            <Animated letterClass={letterClass}
            strArray={jobArray}
            idx={22} />
            </h1>
            <h2>Full-Stack Developer</h2>
            <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>
    </div>
    <span class="loader"></span>
    </>
  )
}
