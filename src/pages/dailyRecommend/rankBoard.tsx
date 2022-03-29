import './rankBoard.scss'
import { getlead } from 'src/api/index'
import { useRequest } from 'ahooks'

export default function RankBoard() {
  const { data, loading, error } = useRequest(getlead())
  if (loading || !data) { return <div>Loading...</div> }
  if (error) { return <div>Error....</div> }

  return (
    <div className="content-wrapper">
      <div className="content-section">
        <div className="apps-card">
          {data.list.map((item: { name: string, id: number, coverImgUrl: string }) => 
            <div className="block" key={item.id}>
              <img className="songlistimg app-card" width="208" height="208" src={item.coverImgUrl} alt="" />
              <h5 className="songlisttext">{item.name}</h5>
            </div>
          )}
        </div>
      </div>
  </div>
  )
}
