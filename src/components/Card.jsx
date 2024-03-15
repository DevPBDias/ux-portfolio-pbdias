import React from 'react'
import '../styles/card.css'
import { Link } from 'react-router-dom'

function Card({ data }) {
    console.log(data);

    return (
        <Link
            to={`/project/${data.id}`}
            className='card_container'>
            <img
                className='thumbnail'
                src={data.thumbnail}
                alt={data.name}
            />
        </Link>
    )
}

export default Card