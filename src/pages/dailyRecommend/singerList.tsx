import './singerList.scss'
import { getsingerlis } from 'src/api/index'
import { useRequest } from 'ahooks'

const TypeMap = {
  '华语': { type: 1 },
  '欧美': { type: 2 },
  '韩国': { type: 3 },
  '日本': { type: 4 }
}
export default function SingerList() {
  const { data, loading, error } = useRequest(getsingerlis(TypeMap['华语']))
  if (loading || !data) { return <div>Loading...</div> }
  if (error) {
    console.log('error...', error);
    return <div>Error...</div>
  }
  console.log('singer data....', data);
  
  return (
    <div className="content-wrapper">
      <div className="content-section qx">
        <ul>
          <li className="content-button status-button">华语</li>
          <li className="content-button status-button">欧美</li>
          <li className="content-button status-button">韩国</li>
          <li className="content-button status-button">日本</li>
        </ul>
        <div className="apps-card">
          {data.list.artists.map((item: { id: number; img1v1Url: string | undefined; name: string | null | undefined }) => 
            <div className="block imgsize" v-for="item in singerlistinfo" key={item.id}>
              <div style={{width: '220px', height: '220px', marginLeft: '15px'}}>
                <img src={item.img1v1Url} alt="" className="songlistimg2 app-card" width="220" height="220" />
              </div>
              <h5 className="songlisttext">{item.name}</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
