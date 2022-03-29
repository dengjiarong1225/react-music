import { useRequest } from 'ahooks'
import { Link } from 'react-router-dom'
import { getnewmusic, getsongList } from 'src/api/index'
import './newList.scss'
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { computedDuration } from 'src/utils/index'
import { Pagination } from 'antd'

interface SongItem { 
  song: { 
    album: { 
      name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; 
    }; 
    artists: { 
      name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; 
    }[]; 
    duration: string | number | undefined | null; 
    alias: (boolean | ReactChild | ReactFragment | ReactPortal | null | undefined)[]; 
  }; 
}

// 专辑
export default function NewList() {
  return (
    <div>
      <Introduce />
      <SongList />
      <HotList />
    </div>
  )
}

// 介绍
function Introduce() {
  return (
    <div className="content-wrapper-header">
      <div className="content-wrapper-header-padding">
        <div className="content-wrapper-context">
          <h3 className="img-content">
            平行世界
          </h3>
          <div className="content-text">
            邓紫棋（G.E.M.），本名邓诗颖，1991年8月16日出生于上海市，中国香港流行乐女歌手、词曲作者、音乐制作人。2008年，发行个人首张音乐EP《G.E.M.》，凭该EP获得香港叱咤乐坛流行榜“叱咤乐坛生力军女歌手（金奖）”。2009年，发行个人首张音乐专辑《18》。2011年，成为首位登上香港体育馆开唱的90后华语女歌手。
          </div>
          <button className="content-button">
            <Link className="content-button" to="/">试听专辑</Link>
          </button>
        </div>
      </div>
      <img className="content-wrapperImg" width="380" height="260" src={require('src/assets/images/ziqi.webp')} alt="" />
    </div>
  )
}

// 最新歌曲
function SongList() {
  const { data, loading, error } = useRequest(getnewmusic())

  if (loading || !data) { return <div>Loading...</div> }
  if (error) { return <div>Error....</div> }
  return (
    <div className="content-section">
      <div className="content-section-title">最新歌曲</div>
      <ul className="searchUl">
        { data.result.map((item: SongItem, index: number) => (
          <li className="adobe-product" key={index}>
            <div className="products">{item.song.album.name}</div>
            <span className="status">
              <span className={["status-circle", "green"].join(' ')}></span>{item.song.artists[0].name}</span>
            <span className="status">{computedDuration(item.song.duration)}</span>
            <span className="status">{item.song.alias[0]}</span>
            <div className="button-wrapper">
              <div className="clicksvg">
                <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2313" width="40" height="40">
                  <path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z"
                      p-id="2314" fill="#e6e6e6"></path>
                  <path d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z"
                        p-id="2315" fill="#e6e6e6"></path>
                </svg>
              </div>
              <div className="clicksvg">
                <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3387" width="40" height="40">
                  <path
                      d="M0 76.8h158.72v125.952H0V76.8z m209.92 0v870.4h606.208v-870.4H209.92z m147.456 193.536c5.12 0 10.24 1.024 14.336 4.096l153.6 108.544 153.6 108.544c12.288 8.192 15.36 26.624 8.192 39.936-2.048 4.096-5.12 7.168-8.192 9.216l-153.6 108.544-153.6 108.544c-12.288 8.192-27.648 4.096-34.816-9.216-3.072-5.12-4.096-10.24-4.096-15.36V299.008c0-15.36 10.24-27.648 24.576-28.672zM868.352 76.8H1024v125.952H868.352V76.8zM0 260.096h158.72V389.12H0V260.096z m868.352 0H1024V389.12H868.352V260.096zM0 447.488h158.72v129.024H0V447.488z m868.352 0H1024v129.024H868.352V447.488zM0 633.856h158.72v129.024H0V633.856z m868.352 0H1024v129.024H868.352V633.856zM0 820.224h158.72v125.952H0V820.224z m868.352 0H1024v125.952H868.352V820.224z"
                      fill="#e6e6e6" p-id="3388"></path>
                </svg>
              </div>
              <div className="clicksvg">
                <a href="/" target="_blank" download>
                  <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4288" width="40" height="40">
                    <path d="M918.3 468.6c-18.8 0-34 15.2-34 34v309.6c0 6.6-14.4 18.7-38 18.7H190.2c-23.5 0-38-12.1-38-18.7V486c0-18.8-15.2-34-34-34s-34 15.2-34 34v326.3c0 24.8 12.8 48.4 35 64.7 19.4 14.2 44.6 22 71 22h656.1c26.4 0 51.6-7.8 71-22 22.2-16.3 35-39.9 35-64.7V502.6c0-18.7-15.3-34-34-34z"
                        fill="#e6e6e6" p-id="4289"></path>
                    <path
                        d="M450.4 679.4c17.8 18 41.5 28 66.8 28.1h0.5c25.1 0 48.8-9.7 66.6-27.4l154.4-152.8c13.3-13.2 13.5-34.7 0.2-48.1-13.2-13.3-34.7-13.5-48.1-0.2L551.3 617.1c0.6-2.6 1-5.3 1-8.1V149.1c0-18.8-15.2-34-34-34s-34 15.2-34 34V609c0 3.2 0.5 6.3 1.3 9.3L345.9 477.1c-13.2-13.3-34.7-13.5-48.1-0.2-13.3 13.2-13.5 34.7-0.2 48.1l152.8 154.4z"
                          fill="#e6e6e6" p-id="4290"></path>
                  </svg>
                </a>
              </div>
            </div>
          </li>
        )) }
      </ul>
    </div>  
  )
}

// 热门
function HotList() {
  const { data, loading, error } = useRequest(getsongList({
      limit: 15,
      offset: (1 - 1) * 15
    }))
  if (loading || !data) { return <div>Loading...</div> }
  if (error) { return <div>Error....</div> }
  
  return (
    <div className="content-section">
      <div className="content-section-title">热门歌单</div>
      <div className="apps-card">
        {data.playlists.map((item: { coverImgUrl: string | undefined; name: string | undefined; id: number }) =>  
          <div className="block" key={item.id}>
              <img className={["songlistimg", "app-card"].join(' ')} src={item.coverImgUrl} alt="" />
              <h5 className="songlisttext">{item.name}</h5>
          </div>
        )}
      </div>
      <Pagination defaultCurrent={1} total={50} />
    </div>
  )
}
