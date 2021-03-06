import React, { useEffect, useState }from 'react';
import { Animated } from '../AnimatedLetters/Animated';
import { FaCss3 } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import './About.scss';

export const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect (() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, []) 

  return (
    <>
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <Animated letterClass={letterClass}
                    strArray={["A", 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={20}
                />
            </h1>
            <p>I am a Full-Stack developer looking for a role in established company with the opportunity to work with the latest technologies on challeging and diverse projects</p>

            <p>I am quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time</p>

            <p>If I need to define my self in one sentence that would be I'm a family man, sport fanatic and tech geek with the drive to constantly learn new things</p>
        </div>
    </div>

    <div className='stage-cube-cont'>
        <div className='cubespinner'>
            <div className='face1'>
                < FaCss3 color={'#28a4d9'} />
            </div>

            <div className='face2'>
                < FaGitAlt color={'red'} />
            </div>

            <div className='face3'>
                < FaJs color={'#efd81d'} />
            </div>
            
            <div className='face4'>
                < FaReact color={'#28a4d9'} />
            </div>
            
            <div className='face5'>
                < FaHtml5 color={'#f06529'} />
            </div>
            
            <div className='face6'>
                < FaLinkedin color={'blue'} />
            </div>
        </div>
    </div>
    <span class="loader" id='spiner'></span>
 </>
  )
}
