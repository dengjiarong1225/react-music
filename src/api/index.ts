
// 获取搜索内容信息
export const getMusicInfoApi = (params: { keywords: any; limit: any; offset: any; type: any }) => `cloudsearch?keywords=${params.keywords}&limit=${params.limit}&offset=${params.offset}&type=${params.type}`
//获取音乐连接
export const playMusicApi = (params: { id: any; }) => `song/url?id=${params.id}`
//获取歌词
export const getLyricApi = (params: { id: any; }) => `lyric?id=${params.id}`
//获取歌曲信息
export const getdetailApi = (params: { id: any; }) => `song/detail?ids=${params.id}`
//获取热门评论
export const getcommentApi = (params: { id: any; }) => `comment/hot?type=0&id=${params.id}`
//MV
export const getMVApi = (params: { id: any; }) => `mv/url?id=${params.id}`
//获取歌单 ( 网友精选碟 )
export const getsongList = (params: { limit: any; offset: any; }) => `top/playlist?limit=${params.limit}&offset=${params.offset}`
// 获取MV评论
export const getcommentMV = (params: { id: any; limit: any; offset: any; }) => `/comment/mv?id=${params.id}&limit=${params.limit}&offset=${params.offset}`
//推荐新音乐
export const getnewmusic = () => `/personalized/newsong`
// 最新mv
export const getnewMV = () => `/mv/first`
//热门电台
export const getradio = (params: { limit: any; offset: any; }) => `/dj/hot?limit=${params.limit}&offset=${params.offset}`
//下载歌曲
export const getsongurl = (params: { id: any; }) => `/song/download/url?id=${params.id}`
//歌单详情
export const getplaylist = (params: { id: any; }) => `/playlist/detail?id=${params.id}`
//歌单评论
export const getcomment = (params: { id: any; limit: any; offset: any; }) => `/comment/playlist?id=${params.id}&limit=${params.limit}&offset=${params.offset}`
//榜单
export const getlead = () => "/toplist"
//歌手榜单
export const getsingerlis = (params: { type: any; }) => `/toplist/artist?type=${params.type}`
//获取歌手专辑
export const getsingerapi = (params: { id: any; limit: any; offset: any; })=>`artist/album?id=${params.id}&limit=${params.limit}&offset=${params.offset}`
// 推荐新音乐
export const getNewSong = (params: { limit: number }) => `/personalized/newsong?limitA${params.limit}`
