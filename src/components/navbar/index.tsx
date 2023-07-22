import React, { useState, useEffect } from 'react';
import Image from 'next/future/image';
import Logo from '@images/logo.svg';
import { useRouter } from 'next/router';
import Sidebar from '@components/sidebar';
import styles from './navbar.module.scss';

interface IProps {
  loginWithGoogle: () => void;
  logout: () => void;
  disPlayName: string;
}

export const linkArr = [
  'Jewellery Exchange',
  'For Customers',
  'Buy Coins',
  'Lease',
  'Partner With Us',
  'About Us',
  'Login',
  'Signup',
];

const Navbar: React.FC<IProps> = (props) => {
  const { loginWithGoogle, disPlayName, logout } = props;
  const [newLinkArr, setNewLinkArr] = useState<string[]>([]);

  useEffect(() => {
    if (disPlayName) {
      const newArr = linkArr.filter((item) => !['Login', 'Signup'].includes(item));
      newArr.push('Logout');
      setNewLinkArr(newArr);
    } else {
      setNewLinkArr(linkArr);
    }
  }, [disPlayName]);

  const router = useRouter();

  const handleLoginClick = (state: string) => {
    if (['Login', 'Signup'].includes(state)) {
      loginWithGoogle();
    }
    if (state === 'Logout') {
      logout();
    }
  };

  return (
    <>
      <div className={styles.header}>
        <div onClick={() => router.push('/')} className={styles.img_wapper}>
          <Image src={Logo} alt="img" />
        </div>
        <ul className={`${styles.links_container}`}>
          {newLinkArr.map((item, index) => {
            return (
              <li key={index} onClick={() => handleLoginClick(item)} className={item === 'Signup' ? styles.signup : ''}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <Sidebar />
    </>
  );
};

export default Navbar;
