import React from 'react'
import styles from './App.module.scss'
import { Card1 } from './components/card-1/Card1'

function App() {
  

  return (
      <div className={styles.cardContainer}>
        <Card1 />
      </div>
  )
}

export default App
