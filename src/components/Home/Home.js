import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import { Animated } from '../AnimatedLetters/Animated';
import './Home.scss';

export const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animated')
    const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n']
    const jobArray = ['w', 'e', 'b'] 

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
            <img src={LogoTitle} alt='developer' />
            <Animated letterClass={letterClass}
            strArray={nameArray}
            idx={15} />
            <br />
            <Animated letterClass={letterClass}
            strArray={jobArray}
            idx={22} />
            developer</h1>
            <h2>Full-Stack Developer</h2>
            <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>
    </div>
    </>
  )
}
