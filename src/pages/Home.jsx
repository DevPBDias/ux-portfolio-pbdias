import React from 'react'
import portfolioData from '../data/portfolioData'
import Card from '../components/Card'
import '../styles/card.css'

function Home() {
  return (
    <main className='main_container'>
      {
        portfolioData.map(elem => (
          <Card key={elem.id} data={elem} />
        ))
      }
    </main>
  )
}

export default Home