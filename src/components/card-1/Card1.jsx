import React from 'react'
import styles from './Card1.module.scss'
import img from '../../assets/IMG-20240619-WA0055.png'

export const Card1 = () => {
  return (
    <div className={styles.card}>
        <img src={img} className={styles.cardImg} alt="Description" />
        <p className={styles.text}>sretan rođendan Filipe</p>
    </div>
  )
}
