
import './baseBackground.scss'

export default function BaseBackground() {
  return (
    <div className="video-bg">
      <video width="320" height="240" autoPlay loop muted>
        <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4"></source>
        {/* <source src={require('src/assets/video/music_background.mp4')} type="video/mp4"></source> */}
        Your browser does not support the video tag.
      </video>
    </div>
  )
}