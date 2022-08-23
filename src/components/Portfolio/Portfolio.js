import React, { useEffect, useState} from 'react';
import './Portfolio.scss';
import { Animated } from '../AnimatedLetters/Animated';
import CRS from '../../assets/images/crs front.png';
import IPC from '../../assets/images/ipcweb.jpg';



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
    

    < div className='container-work'>
      <div className='webpage-1'>
      <a target="_blank" href="https://crsproject.netlify.app" rel="noreferrer">
        <img
          className="d-block"
          src={CRS}
          alt="IPC webpage"
          width= "200px"
          height= "130px"  
        />
       </a>
            
      </div>

      <div className='webpage-2'>
      <a target="_blank" href="https://ipc-controls.netlify.app" rel="noreferrer">
        <img
          className="d-block"
          src={IPC}
          alt="CRS webpage"
          width= "200px"
          height= "130px"  
        />
       </a>
            
      </div>

      
    </div>
    </div>
    </>

  )
}
