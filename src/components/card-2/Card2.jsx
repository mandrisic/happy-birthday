import React, { useState, useRef, useEffect } from 'react'
import styles from './Card2.module.scss'
import img from '../../assets/IMG-20240617-WA0000.jpg'
import song from '../../assets/pjesma.mp3'

export const Card2 = () => {
    const lyrics = [
        {time: 0, text: '𝄞'},
        {time: 21, text: 'Samom sebi ne verujem'},
        {time: 27, text: 'Trideseta meni dođe'},
        {time: 32, text: 'Čini mi se tek sam rođen tako vreme brzo prođe'},
        {time: 40, text: 'Čini mi se tek sam rođen tako vreme brzo prođe'},
        {time: 48, text: 'Prođe leto trideseto godina mi žao nije'},
        {time: 57, text: 'Nije važno šta je bilo, sad je važno kako mi je'},
        {time: 65, text: 'Prođe leto trideseto godina mi žao nije'},
        {time: 73, text: 'Nije važno šta je bilo, sad je važno kako mi je'},
        {time: 80, text: '𝄞'},
        {time: 101, text: 'Ja sam crtu podvukao'},
        {time: 106, text: 'Ispod svojih trideset leta'},
        {time: 112, text: 'Kad saberem život celi osta kratka mladost lepa'},
        {time: 120, text: 'Kad saberem život celi osta kratka mladost lepa'},
        {time: 128, text: 'Prođe leto trideseto godina mi žao nije'},
        {time: 136, text: 'Nije važno šta je bilo, sad je važno kako mi je'},
        {time: 144, text: 'Prođe leto trideseto godina mi žao nije'},
        {time: 152, text: 'Nije važno šta je bilo, sad je važno kako mi je'},
        {time: 160, text: '𝄞'},
        {time: 180, text: 'Ovaj život, dragi druže'},
        {time: 186, text: 'Kratak je ko miris ruže'},
        {time: 191, text: 'Tek što život zamiriše, a mladosti nema više'},
        {time: 199, text: 'Tek što život zamiriše, a mladosti nema više'},
        {time: 207, text: 'Prođe leto trideseto godina mi žao nije'},
        {time: 215, text: 'Nije važno šta je bilo, sad je važno kako mi je'},
        {time: 222, text: 'Prođe leto trideseto godina mi žao nije'},
        {time: 231, text: 'Nije važno šta je bilo, sad je važno kako mi je'},
        {time: 238, text: 'Sad je važno kako mi je...'}
    ]
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const audioRef = useRef(null);
    const containerRef = useRef(null);

    const handlePlayPause = () => {
        const audio = audioRef.current;

        if (!audio) return;

        if (isPlaying) {
        audio.pause();
        } else {
        audio.play();
        }

        setIsPlaying(!isPlaying);
    }

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
    
        const handleTimeUpdate = () => {
          const currentTime = audio.currentTime;
          const index = lyrics.findIndex((line, i) => {
            const next = lyrics[i + 1];
            return currentTime >= line.time && (!next || currentTime < next.time);
          });
          if (index !== -1 && index !== currentIndex) {
            setCurrentIndex(index);
            const lineHeight = 30;
            if (containerRef.current) {
              containerRef.current.scrollTop = lineHeight * index;
            }
          }
        };
    
        audio.addEventListener('timeupdate', handleTimeUpdate);
        return () => audio.removeEventListener('timeupdate', handleTimeUpdate);
      }, [currentIndex]);

    useEffect(() => {
        if (audioRef.current) {
          audioRef.current.volume = 0.4;
        }
      }, []);

      const handleSongEnd = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
        }
        setCurrentIndex(0);
        setIsPlaying(false);
    };
    
  return (
    <div className={styles.card}>
        <div className={`${styles.overlay} ${!isPlaying ? styles.hidden : ''}`}>
            <div className={styles.lyricsContainer} ref={containerRef}>
            {lyrics.slice(currentIndex, currentIndex + 4).map((line, index) => (
    <div
        key={currentIndex + index}
        className={`${styles.lyricLine} ${index === 0 ? styles.activeLine : ''}`}
    >
        {line.text}
    </div>
))}
            </div>
        </div>
            <img src={img} className={styles.cardImg} alt="Description" />
            <audio ref={audioRef} src={song} preload="auto" onEnded={handleSongEnd} />
            <div className={styles.musicContainer}>
                {isPlaying ? (
                    <div onClick={handlePlayPause} className={styles.musicStop}>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                    </div>
                ) : (
                <div onClick={handlePlayPause} className={styles.musicStart}></div>
            )}
            </div>
            <p className={styles.text}>red je da imaš i rođendansku pjesmu</p>
        </div>
  )
}
