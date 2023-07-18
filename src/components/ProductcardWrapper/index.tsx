import React from 'react';
import ProductCard from '@components/productcard';
import styles from './productCardWrapper.module.scss';

const ProductCardWrapper = () => {
  return (
    <div className={styles.productCardWrapper}>
      {Array(21)
        .fill('demo string')
        .map((item, index) => {
          return <ProductCard key={item + index} />;
        })}
    </div>
  );
};

export default ProductCardWrapper;
