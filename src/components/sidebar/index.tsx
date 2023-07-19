import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';
import OutsideClickHandler from '@components/OutsideClickHandler';
import { linkArr } from '@components/navbar';
import styles from './sidebar.module.scss';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(true);

  return (
    <>
      <nav className={styles.navWrapper}>
        <div className={`${styles.mobileNav} `}>
          <div className={styles.imgWrapper}></div>
          {showNav ? (
            <GiHamburgerMenu
              onClick={() => {
                setShowNav(false);
              }}
              style={{ width: '40px', height: '40px' }}
              className={styles.hamBurger}
            />
          ) : null}
        </div>
        <OutsideClickHandler onOutsideClick={() => setShowNav(true)}>
          <div className={`${styles.hiddenNavbarContainer} ${showNav && styles.width_0}`}>
            <ul className={styles.navListContainer}>
              <RxCross2
                onClick={() => {
                  setShowNav(true);
                }}
                style={{ width: '40px', height: '40px', stroke: 'white' }}
                className={styles.crossIcon}
              />
              {linkArr.map((item, index) => (
                <li key={index} className={styles.titleName}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </OutsideClickHandler>
      </nav>
    </>
  );
};

export default Sidebar;
