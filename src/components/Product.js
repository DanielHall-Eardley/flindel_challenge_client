import React from 'react';
import styles from './Product.module.css';

const Product = ({product}) => {
  return (
    <li className={styles.product}>
      <span className={styles.name}>{product.name}</span>
      <span className={styles.price}>Price: ${product.price}</span>
      <span className={styles.quantity}>Quantity: {product.quantity}</span>
    </li>
  )
}

export default Product