'use client';

import { useEffect, useState } from 'react';
import styles from './FakeUpdateWin10.module.css';

export default function FakeUpdateWin10() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Simulate update progress
    const interval = setInterval(() => {
      setPercentage((prev) => {
        // Slow down progress as it gets higher
        const increment = Math.max(1, Math.floor((100 - prev) / 10));
        const newValue = prev + increment;
        return newValue > 100 ? 100 : newValue;
      });
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.spinner}></div>
          <div className={styles.text}>
            <p>Working on updates {percentage}% complete.</p>
            <p>Please keep your computer on.</p>
          </div>
          <p className={styles.warning}>Your computer will restart automatically.</p>
        </div>
      </div>    

  );
}
