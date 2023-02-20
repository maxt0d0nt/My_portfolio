import React, { useEffect, useState } from 'react';
import './Portfolio.scss';
import { Animated } from '../AnimatedLetters/Animated';
import CRS from '../../assets/images/crs front.png';
import IPC from '../../assets/images/ipcweb.jpg';
import blog from '../../assets/images/redblog.png';
import UR from '../../assets/images/UR_IMG.png'



export const Portfolio = () => {

  const websites = [
    {
      webpage: 1,
      link: "https://ipc-controls.netlify.app",
      src: IPC,
      alt: "IPC webpage"
    },
    {
      webpage: 2,
      link: "https://ur-page.netlify.app/",
      src: UR,
      alt: "UR webpage"
    },
    {
      webpage: 3,
      link: "https://crsproject.netlify.app",
      src: CRS,
      alt: "CRS wesite"
    },
    {
      webpage: 4,
      link: "https://myredblog.netlify.app/",
      src: blog,
      alt: "blog webpage"
    },
    
  ]


  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
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
          {websites.map((item, i) => {
            return (
              <div className='webpage' key={i}>
                <a target="_blank" href={item.link} rel="noreferrer">
                  <img
                    className="d-block"
                    src={item.src}
                    alt={item.alt}
                    width="220px"
                    height="120px"        
                  />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
