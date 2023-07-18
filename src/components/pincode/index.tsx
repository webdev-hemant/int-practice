import React from 'react';
import Image from 'next/future/image';
import locationTag from '@images/location.svg';
import styles from './pincode.module.scss';

const Picode = () => {
  return (
    <div className={styles.inputWrapper}>
      <Image width={20} src={locationTag} alt="location" />
      <input placeholder="Enter your pincode" type="text" />
      <p>check availibilty</p>
    </div>
  );
};

export default Picode;
