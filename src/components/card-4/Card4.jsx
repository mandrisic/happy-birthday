import React from 'react'
import styles from './Card4.module.scss'
import img from '../../assets/IMG-20250418-WA0000.jpg'

export const Card4 = () => {
  return (
    <div className={styles.card}>
        <img src={img} className={styles.cardImg} alt="Us as cartoon" />
        <p className={styles.text}>nadolazeće vrijeme ćeš morati provesti sa mnom (ja sam poklon)</p>
    </div>
  )
}