import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import portfolioData from '../data/portfolioData';
import '../styles/project.css'

function Project() {
    const { id } = useParams();

    const [filterProject] = portfolioData.filter(elem => elem.id === id)

    return (
        <main className='project_container'>
            <h1 className='title_project'>{filterProject?.name}</h1>
            <p className='description'>Você pode ver o estudo de caso do projeto abaixo.</p>
            <div className='project_img_container'>
                <img 
                className='full_img'
                src={filterProject?.project} 
                alt={filterProject?.name}
                />
            </div>
        </main>
    )
}

export default Project