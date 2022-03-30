import React from 'react'
import { Routes, Route } from "react-router-dom";
const Music = React.lazy(() => import('src/pages/music'));
const DefaultList = React.lazy(() => import('src/pages/defaultList'));
const Recommend = React.lazy(() => import('src/pages/dailyRecommend/index'))
const NewList = React.lazy(() => import('src/pages/dailyRecommend/newList'))
const RankBoard = React.lazy(() => import('src/pages/dailyRecommend/rankBoard'))
const SingerList = React.lazy(() => import('src/pages/dailyRecommend/newList'))

export function FirstRoute() {
  return (
    <Routes>
      <Route path="/music" element={<Music />}>
        <Route index element={<DefaultList />} />
        <Route path="/music/dailyRecommend" element={<Recommend />}>
          <Route index element={<NewList />} />
          <Route path="/music/dailyRecommend/rankBoard" element={<RankBoard />} />
          <Route path="/music/dailyRecommend/singerList" element={<SingerList />} />
        </Route>
      </Route>
    </Routes>
  )
}
