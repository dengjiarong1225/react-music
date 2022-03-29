import './music.scss'
import LayoutSideBar from './components/layoutSideBar'
import { Outlet } from 'react-router-dom'

export default function Music() {
  return (
    <div className="content-wrap">
      <LayoutSideBar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}
