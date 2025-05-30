import React, { useState, useEffect } from 'react'
import styles from './Card3.module.scss'

export const Card3 = () => {
    const birthDate = new Date('1995-06-03T00:00:00');

    const [duration, setDuration] = useState({
        years: 0,
        months: 0,
        days: 0,
        hours: 0
    })

    useEffect(() => {
        const updateDuration = () => {
          const now = new Date();
          const diff = now - birthDate;
    
          const years = now.getFullYear() - birthDate.getFullYear();
          const months = years * 12 + now.getMonth() - birthDate.getMonth();
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor(diff / (1000 * 60 * 60));
    
          setDuration({ years, months, days, hours });
        };
    
        updateDuration();
        const interval = setInterval(updateDuration, 10000);
    
        return () => clearInterval(interval);
      }, []);
    
      const formatBigNumber = (num) => {
        if (num >= 1000000) {
          return `${(num / 1000000).toFixed(1)} mil`;
        }
        if (num >= 10000) {
          const remainder = num % 1000;
          if (remainder >= 950) {
            return `${Math.round(num / 1000)} tis.`;
          } else {
            return `${(num / 1000).toFixed(1)} tis.`;
          }
        }
        if (num >= 1000) {
          return `${(num / 1000).toFixed(1)} tis.`;
        }
        return num;
      };

  return (
    <div className={styles.card}>
        <div className={styles.boxContainer}>
            <div className={styles.box}>
                <p><span>{duration.years}</span> godina</p>
            </div>
            <div className={styles.box}>
                <p><span>{duration.months}</span> mjeseci</p>
            </div>
            <div className={styles.box}>
                <p>{formatBigNumber(duration.days)} dana</p>
            </div>
            <div className={styles.box}>
                <p>{formatBigNumber(duration.hours)} sati</p>
            </div>
        </div>
        <p className={styles.text}>na ovoj planeti si već</p>
    </div>
  )
}