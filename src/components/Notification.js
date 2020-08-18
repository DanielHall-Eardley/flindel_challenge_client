import React from 'react';
import styles from './Notification.module.css';

const Notification = ({notification}) => {
  if (!notification) {
    return null
  } 

  return <h3 className={styles.text}>{notification}</h3>
}

export default Notification