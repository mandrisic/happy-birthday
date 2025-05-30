import React from 'react'
import styles from './Card5.module.scss'
import img from '../../assets/petal_20250529_234415.mp4'

export const Card5 = () => {
  return (
    <div className={styles.card}>
        <video src={img} className={styles.cardImg} autoPlay loop controls={true} muted={true} playsInline />
        <p className={styles.text}>tako da bez brige možeš uživati u svakom sljedećem danu</p>
    </div>
  )
}