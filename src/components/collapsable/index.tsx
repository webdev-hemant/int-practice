import React, { useState } from 'react';
import styles from './collapsable.module.scss';

interface IProps {
  open?: boolean;
  title: string;
  description: string;
}

const Collapsible: React.FC<IProps> = ({ open = false, title = '', description = '' }) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.collapsableWrapper}>
        <div onClick={handleFilterOpening} className={styles.collapsableInner}>
          <h3 className={styles.title}>{title}</h3>
          <div className={`${styles.arrow} ${!isOpen ? styles.open : styles.close}`}></div>
        </div>
        <div className={styles.paragraph}>
          <div className={`${isOpen ? styles.heightZero : null}`}>
            <div>{description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;
