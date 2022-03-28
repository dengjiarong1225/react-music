import './music.scss'
import LayoutSideBar from './components/layoutSideBar'
import { ReactChild, ReactFragment, ReactPortal } from 'react'

export default function Music(props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) {
  return (
    <div className="content-wrap">
      <LayoutSideBar />
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}
