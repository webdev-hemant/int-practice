import React from 'react';
import Image from 'next/future/image';
import Logo from '@images/logo.svg';
import { useRouter } from 'next/router';
import styles from './navbar.module.scss';

const linkArr = [
  'Jewellery Exchange',
  'For Customers',
  'Buy Coins',
  'Lease',
  'Partner With Us',
  'About Us',
  'Login',
  'Signup',
] as const;

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.header}>
      <div onClick={() => router.push('/')} className={styles.img_wapper}>
        <Image src={Logo} alt="img" />
      </div>
      <ul className={`${styles.links_container}`}>
        {linkArr.map((item, index) => {
          return (
            <li key={index} className={item === 'Signup' ? styles.signup : ''}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
