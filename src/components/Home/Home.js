import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Animated } from '../AnimatedLetters/Animated';
import LogoM from '../../assets/images/logo-m.png';
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
            <span className={`${letterClass} _15`}> </span>
            <img src={LogoM} alt='developer' size={'2em'} />
            <span className={`${letterClass} _17`}>a</span>
            <span className={`${letterClass} _18`}>x</span>
            <span className={`${letterClass} _19`}> </span>
            <span className={`${letterClass} _20`}>A</span>
            <span className={`${letterClass} _21`}>s</span>
            
            <Animated letterClass={letterClass}
            strArray={nameArray}
            idx={15} />
            <br />
            <Animated letterClass={letterClass}
            strArray={jobArray}
            idx={22} />
            </h1>
            <h2>FULL-STACK DEVELOPER</h2>
            <h2>HTML - CSS - JAVASCRIPT - REACT.JS - NODE.JS - SQL - NoSQL</h2>
            <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>
    </div>
    <span class="loader"></span>
    </>
  )
}
