import { ReactChild, ReactFragment, ReactPortal } from 'react'
import { NavLink } from 'ahooks'
import styles from './index.scss'

export default function DailyRecommend(props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) {
  return (
    <div className={styles.mainContent}>
      <TopNav />
      <div className={styles.contentWrapper}>
        {props.children}
      </div>
    </div>
  )
}

function TopNav() {
  return (
    <div className={styles.mainHeader}>
      <a className={styles.menuLinkMain} href="#">每日推荐</a>
      <div className={styles.headerMenu}>
        <NavLink to="/music/dailyRecommend/default" activeClassName={styles.isActive}>专辑</NavLink>
        <NavLink to="/music/dailyRecommend/rank" activeClassName={styles.isActive}>排行榜</NavLink>
        <NavLink to="/music/dailyRecommend/singerList" activeClassName={styles.isActive}>歌手</NavLink>
        <NavLink to="/classification" activeClassName={styles.isActive}>分类</NavLink>
      </div>
    </div>
  )
}
