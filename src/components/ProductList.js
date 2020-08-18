import React from 'react';
import styles from './ProductList.module.css';

import Product from './Product'

const ProductList = ({productList}) => {
  return (
    <ul className={styles.list}>
      {productList.map(product => {
        return <Product product={product} key={product.id}/>
      })}
    </ul>
  )
}

export default ProductList