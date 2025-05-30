import React from 'react'
import styles from './App.module.scss'
import { Card1 } from './components/card-1/Card1'
import { Card2 } from './components/card-2/Card2'
import { Card3 } from './components/card-3/Card3'
import { Card4 } from './components/card-4/Card4'
import { Card5 } from './components/card-5/Card5'
import { Carousel } from './components/carousel/Carousel'

function App() {
  const cards = [
    <Card1 key="card1" />,
    <Card2 key="card2" />,
    <Card3 key="card3" />,
    <Card4 key="card4" />,
    <Card5 key="card5" />
  ];

  return (
      <div className={styles.cardContainer}>
        <Carousel cards={cards} />
      </div>
  )
}

export default App
