import React from 'react'
import myPhoto from '../assets/photo.png'
import '../styles/contact.css'

function Contact() {
  return (
    <main className='contact_container'>
      <div className='text_container'>
        <h1 className='title_contact'>Vamos nos conectar!</h1>
        <p className='email'>Email: devpbdias@gmail.com</p>
      </div>
      <div className='photo_container'>
        <img className='photo' src={myPhoto} alt="my photo" />
      </div>
    </main>
  )
}

export default Contact