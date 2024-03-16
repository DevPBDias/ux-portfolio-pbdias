import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
import iconBehance from '../assets/iconBehance.png'
import iconGithub from '../assets/iconGithub.png'
import iconLinkedin from '../assets/iconLinkedin.png'

function Header() {
    return (
        <header className='header'>
            <section  className='header_content'>
                <nav className='links_box'>
                    <Link className='links' to='/'>Home</Link>
                    <Link className='links' to='/contact'>Contact</Link>
                </nav>
                <div className='title_box'>
                    <h1 className='title_header'>UX Designer</h1>
                    <h1 className='title_header'>Paulo Dias</h1>
                </div>
                <nav className='icons_box'>
                    <Link
                        className='icon_container'
                        target="_blank"
                        rel="noopener noreferrer"
                        to='https://www.behance.net/pbdias'
                    >
                        <img className='icon' src={iconBehance} alt="" />
                    </Link>
                    <Link
                        className='icon_container'
                        target="_blank"
                        rel="noopener noreferrer"
                        to='https://github.com/DevPBDias/DevPBDias'
                    >
                        <img className='icon' src={iconGithub} alt="" />

                    </Link>
                    <Link
                        className='icon_container'
                        target="_blank"
                        rel="noopener noreferrer"
                        to='https://www.linkedin.com/in/devpaulobrunomdias/'
                    >
                        <img className='icon' src={iconLinkedin} alt="" />

                    </Link>
                </nav>
            </section>
        </header>
    )
}

export default Header