import React from 'react';
import Collapsible from '@components/collapsable';
import styles from './faq.module.scss';

const FaqArray = [
  {
    title: 'How does the gold get delivered to me?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo modi aspernatur voluptas quis consequatur inventore saepe quo amet repudiandae unde expedita cupiditate, libero ea. Id in esse laudantium doloremque mollitia.',
  },
  {
    title: 'Is it posible to store my withdrawn gold coins in safe custody and have them delivered late?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo modi aspernatur voluptas quis consequatur inventore saepe quo amet repudiandae unde expedita cupiditate, libero ea. Id in esse laudantium doloremque mollitia.',
  },
  {
    title: 'Can I change my delivery address?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo modi aspernatur voluptas quis consequatur inventore saepe quo amet repudiandae unde expedita cupiditate, libero ea. Id in esse laudantium doloremque mollitia.',
  },
  {
    title: 'Where is delivery of gold available?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo modi aspernatur voluptas quis consequatur inventore saepe quo amet repudiandae unde expedita cupiditate, libero ea. Id in esse laudantium doloremque mollitia.',
  },
  {
    title: 'Are there any changes for delivery of gold?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo modi aspernatur voluptas quis consequatur inventore saepe quo amet repudiandae unde expedita cupiditate, libero ea. Id in esse laudantium doloremque mollitia.',
  },
  {
    title: 'How does safegold ensures secured delivery of gold?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo modi aspernatur voluptas quis consequatur inventore saepe quo amet repudiandae unde expedita cupiditate, libero ea. Id in esse laudantium doloremque mollitia.',
  },
];

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
