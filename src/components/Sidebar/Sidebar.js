import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';
import LogoM from '../../assets/images/logo-m.png';
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export const Sidebar = () => {
  return (
    <>
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoM} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='Ascanio' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                < FaHome  />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                < FaUserAlt  />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                < FaEnvelope  />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="http://www.linkedin.com/in/max-ascanio-485210233" > 
                 < FaLinkedin size={"25px"} />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/maxt0d0nt" >
                 < FaGithub size={"25px"} />.
                </a>
            </li>
        </ul>
    </div>
    </>
  )
}
