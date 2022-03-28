import styles from './index.scss';
import BaseBackground from './components/baseBackground';
import LayoutTop from './components/layoutTop';
import { ReactChild, ReactFragment, ReactPortal } from 'react';

export default function IndexPage(props: { children: ReactChild | ReactFragment | ReactPortal | null | undefined; }) {
  return (
    <div className={styles.app}>
      <BaseBackground />

      <main className={styles.mainContainer}>
        <LayoutTop />
        {props.children}
      </main>
    </div>
  )
}
