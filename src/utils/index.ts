// 计算歌曲时间
export function computedDuration(duration: string | number | null | undefined) {
  if (!duration) { return '' }
  duration = Number(duration)
  let min: string | number = parseInt((duration / 1000 / 60).toString())
  let sec: string | number = parseInt(((duration / 1000) % 60).toString())
  if (min < 10) {
      min = '0' + min
  }
  if (sec < 10) {
      sec = '0' + sec
  }
  return duration = min + ":" + sec;
}
