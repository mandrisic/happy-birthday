import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from './Carousel.module.scss';

export const Carousel = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getIndex = (index) => (index + cards.length) % cards.length;

  const handlers = useSwipeable({
    onSwipedLeft: () => setActiveIndex((prev) => getIndex(prev + 1)),
    onSwipedRight: () => setActiveIndex((prev) => getIndex(prev - 1)),
    trackMouse: true,
  });

  const prevCard = cards[getIndex(activeIndex - 1)];
  const activeCard = cards[activeIndex];
  const nextCard = cards[getIndex(activeIndex + 1)];

  return (
    <div className={styles.carouselWrapper} {...handlers}>
      <div className={styles.card + ' ' + styles.prev}>
        {prevCard}
      </div>
      <div className={styles.card + ' ' + styles.active}>
        {activeCard}
      </div>
      <div className={styles.card + ' ' + styles.next}>
        {nextCard}
      </div>
    </div>
  );
};