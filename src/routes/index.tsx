import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
const Music = React.lazy(() => import('src/pages/music'));
const DefaultList = React.lazy(() => import('src/pages/defaultList'));


function FirstRoute() {
  return (
    <Routes>
      <Route path="/music" element={<Music />}>

      </Route>
    </Routes>
  )
}