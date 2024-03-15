import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'
import iconBehance from '../assets/iconBehance.png'
import iconGithub from '../assets/iconGithub.png'
import iconLinkedin from '../assets/iconLinkedin.png'

function Footer() {
    return (
        <footer className='footer'>
            <nav className='icons_box'>
                <Link
                    className='icon_container'
                    target="_blank"
                    rel="noopener noreferrer"
                    to='https://www.behance.net/pbdias'
                >
                    <img src={iconBehance} alt="" />
                </Link>
                <Link
                    className='icon_container'
                    target="_blank"
                    rel="noopener noreferrer"
                    to='https://github.com/DevPBDias/DevPBDias'
                >
                    <img src={iconGithub} alt="" />

                </Link>
                <Link
                    className='icon_container'
                    target="_blank"
                    rel="noopener noreferrer"
                    to='https://www.linkedin.com/in/devpaulobrunomdias/'
                >
                    <img src={iconLinkedin} alt="" />

                </Link>
            </nav>
            <span className='span_footer'>&copy; 2024 UX Designer Devpbdias</span>
        </footer>
    )
}

export default Footer