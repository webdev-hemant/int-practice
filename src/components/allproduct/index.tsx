import React from 'react';
import Picode from '@components/pincode';
import styles from './allproduct.module.scss';

const AllProduct = () => {
  return (
    <div className={styles.allProductWrapper}>
      <h3>All Products</h3>
      <Picode />
    </div>
  );
};

export default AllProduct;
