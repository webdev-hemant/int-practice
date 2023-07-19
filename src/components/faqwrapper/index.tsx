import React from 'react';
import Collapsible from '@components/collapsable';
import { FaqArray } from '@constants/faqconstant';
import styles from './faq.module.scss';

const FaqWrapper: React.FC = () => {
  return (
    <div className={styles.faqWrapper}>
      <h3>Frequently asked questions</h3>
      {FaqArray.map((item, index) => {
        return <Collapsible key={index} title={item.title} description={item.description} open />;
      })}
    </div>
  );
};

export default FaqWrapper;
