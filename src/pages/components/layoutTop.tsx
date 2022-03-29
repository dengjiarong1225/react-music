import './layoutTop.scss'
import { NavLink } from 'react-router-dom';

export default function LayoutTop() {
  return (
    <header className="header">
      <NavBtn></NavBtn>
      <HeaderMenu></HeaderMenu>
      <div className="search-bar">
        <input type="text" placeholder="搜索" />
      </div>
      <HeaderProfile />
    </header>
  )
}

function NavBtn() {
  return ( 
    <div className="top-wrap">
      <ul>
        <li><img src={require('src/assets/images/return.png')} alt=""/></li>
        <li><img src={require('src/assets/images/return2.png')} alt=""/></li>
        <li><img src={require('src/assets/images/refresh.png')} alt=""/></li>
      </ul>
      
    </div>
  )
}

function HeaderMenu() {
  return (
    <div className="header-menu">
      <NavLink to="/music" className={"menu-link is-active"}>音乐</NavLink>
      <NavLink to="/mv" className={"menu-link"}>MV</NavLink>
      <NavLink to="/diantai" className={"menu-link"}>电台</NavLink>
      <NavLink to="/erciyuan" className={"menu-link"}>二次元</NavLink>
    </div>
  )
}

function HeaderProfile() {
  return (
    <div className="header-profile">
      <div className="notification">
        <span className="notification-number">3</span>
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round" className={["feather", "feather-bell"].join(' ')}>
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
        </svg>
      </div>
      <svg viewBox="0 0 512 512" fill="currentColor">
        <path
          d="M448.773 235.551A135.893 135.893 0 00451 211c0-74.443-60.557-135-135-135-47.52 0-91.567 25.313-115.766 65.537-32.666-10.59-66.182-6.049-93.794 12.979-27.612 19.013-44.092 49.116-45.425 82.031C24.716 253.788 0 290.497 0 331c0 7.031 1.703 13.887 3.006 20.537l.015.015C12.719 400.492 56.034 436 106 436h300c57.891 0 106-47.109 106-105 0-40.942-25.053-77.798-63.227-95.449z" />
      </svg>
      <img className="profile-img" src={require('src/assets/images/avater.jpg')} alt="" />
    </div>
  )
}