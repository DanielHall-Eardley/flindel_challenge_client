import React from 'react';
import styles from './Refund.module.css';

const Refund = ({refund}) => {
  return (
    <footer className={styles.container}>
      <p>Total Refund: ${refund}</p>
    </footer>
  )
}

export default Refund