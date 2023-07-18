import React from 'react';
import Image, { StaticImageData } from 'next/future/image';
import priceTag from '@images/price-tag.png';
import truck from '@images/truck.png';
import certificate from '@images/certificate.png';
import goldBar from '@images/20gm_bar_9999_front.png';
import goldCoin from '@images/gold-coin.png';
import styles from './hero.module.scss';

const cardArr: {
  title: string;
  img: StaticImageData;
}[] = [
  {
    title: '24K Pure Gold Quality Guaranteed',
    img: certificate,
  },
  {
    title: '100% Secure with Delivery Insurance',
    img: truck,
  },
  {
    title: 'Best Prices in the market',
    img: priceTag,
  },
];

const HeroSection: React.FC = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>Get 24k Gold delivered to your doorstep</h1>
          <div className={styles.smallCardWrapper}>
            {cardArr.map((item, index) => {
              return (
                <div key={index} className={styles.cardContainer}>
                  <div className={styles.cardImage}>
                    <Image width={50} height={50} src={item.img} alt="priceTag" />
                  </div>
                  <div className={styles.cardTitle}>{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.allImgWrapper}>
            <Image width={500} src={goldBar} alt="gold" />
            <Image className={styles.coin} width={300} src={goldCoin} alt="gold coin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
