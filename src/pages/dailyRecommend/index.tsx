import { Outlet, NavLink } from 'react-router-dom'
import './index.scss'

export default function DailyRecommend() {
  return (
    <div className="mainContent">
      <TopNav />
      <div className="contentWrapper">
        <Outlet />
      </div>
    </div>
  )
}

function TopNav() {
  return (
    <div className="mainHeader">
      <a className="menuLinkMain" href="/meirituijian">每日推荐</a>
      <div className="headerMenu">
        <NavLink to="/music/dailyRecommend/default" className={(isActive) => isActive ? "isActive" : ' ' }>专辑</NavLink>
        <NavLink to="/music/dailyRecommend/rank" className={(isActive) => isActive ? "isActive" : ' ' }>排行榜</NavLink>
        <NavLink to="/music/dailyRecommend/singerList" className={(isActive) => isActive ? "isActive" : ' ' }>歌手</NavLink>
        <NavLink to="/classification" className={(isActive) => isActive ? "isActive" : ' ' }>分类</NavLink>
      </div>
    </div>
  )
}
