import React from 'react';
import Image, { StaticImageData } from 'next/future/image';
import percentageSvg from '@images/percent-svgrepo-com.svg';
import firstCoin from '@images/1gm_back.png';
import secondCoin from '@images/5gm_coin_999_front.png';
import thirdCoin from '@images/5gm_front.png';
import styles from './productcard.module.scss';

const ImageArr: StaticImageData[] = [firstCoin, secondCoin, thirdCoin];

const ProductCard: React.FC = () => {
  return (
    <div className={styles.productCardWrapper}>
      <div className={styles.cardInnerContainer}>
        <div className={styles.imgWrapper}>
          <Image width={100} src={ImageArr[Math.floor(Math.random() * 3)]} alt="pd image" />
        </div>
        <div className={styles.allPdInfoWrapper}>
          <h2>
            0.5 Gram SafeGold Coin <br /> (99.99%)
          </h2>
          <h4>₹3,525.31</h4>
          <div className={styles.savingWrapper}>
            <s>₹3,825.31</s> <p>Save 300</p>
          </div>
          <button>View Details</button>
        </div>
      </div>
      <p className={styles.offerBadge}>
        <Image width={20} src={percentageSvg} alt="percentage" /> Akshaya Tritaya Offers
      </p>
    </div>
  );
};

export default ProductCard;
