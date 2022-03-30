import { Outlet, NavLink } from 'react-router-dom'
import './index.scss'

export default function DailyRecommend() {
  return (
    <div className="main-content">
      <TopNav />
      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
  )
}

function TopNav() {
  return (
    <div className="main-header">
      <a className="menu-link-main" href="/meirituijian">每日推荐</a>
      <div className="header-menu">
        <NavLink to="/music/dailyRecommend" className="is-active">专辑</NavLink>
        <NavLink to="/music/dailyRecommend/rankBoard" className=" ">排行榜</NavLink>
        <NavLink to="/music/dailyRecommend/singerList" className=" ">歌手</NavLink>
        <NavLink to="/music/dailyRecommend/rankBoard" className=" ">分类</NavLink>
      </div>
    </div>
  )
}
