

// 获取搜索内容信息
export const getMusicInfoApi = (params: { keywords: any; limit: any; offset: any; type: any; }) => () => fetch(`cloudsearch?keywords=${params.keywords}&limit=${params.limit}&offset=${params.offset}&type=${params.type}`).then(res => res.json())
//获取音乐连接
export const playMusicApi = (params: { id: any; }) => () => fetch(`song/url?id=${params.id}`).then(res => res.json())
//获取歌词
export const getLyricApi = (params: { id: any; }) => () => fetch(`lyric?id=${params.id}`).then(res => res.json())
//获取歌曲信息
export const getdetailApi = (params: { id: any; }) => () => fetch(`song/detail?ids=${params.id}`).then(res => res.json())
//获取热门评论
export const getcommentApi = (params: { id: any; }) => () => fetch(`comment/hot?type=0&id=${params.id}`).then(res => res.json())
//MV
export const getMVApi = (params: { id: any; }) => () => fetch(`mv/url?id=${params.id}`).then(res => res.json())
//获取歌单 ( 网友精选碟 )
export const getsongList = (params: { limit: number; offset: number; }) => () => fetch(`top/playlist?limit=${params.limit}&offset=${params.offset}`).then(res => res.json())
// 获取MV评论
export const getcommentMV = (params: { id: any; limit: any; offset: any; }) => () => fetch(`/comment/mv?id=${params.id}&limit=${params.limit}&offset=${params.offset}`).then(res => res.json())
//推荐新音乐
export const getnewmusic = () => () => fetch(`/personalized/newsong`).then(res => res.json())
// 最新mv
export const getnewMV = () => () => fetch(`/mv/first`).then(res => res.json())
//热门电台
export const getradio = (params: { limit: any; offset: any; }) => () => fetch(`/dj/hot?limit=${params.limit}&offset=${params.offset}`).then(res => res.json())
//下载歌曲
export const getsongurl = (params: { id: any; }) => () => fetch(`/song/download/url?id=${params.id}`).then(res => res.json())
//歌单详情
export const getplaylist = (params: { id: any; }) => () => fetch(`/playlist/detail?id=${params.id}`).then(res => res.json())
//歌单评论
export const getcomment = (params: { id: any; limit: any; offset: any; }) => () => fetch(`/comment/playlist?id=${params.id}&limit=${params.limit}&offset=${params.offset}`).then(res => res.json())
//榜单
export const getlead = () => () => fetch("/toplist").then(res => res.json())
//歌手榜单
export const getsingerlis = (params: { type: any; }) => () => fetch(`/toplist/artist?type=${params.type}`).then(res => res.json())
//获取歌手专辑
export const getsingerapi = (params: { id: any; limit: any; offset: any; })=> () => fetch(`artist/album?id=${params.id}&limit=${params.limit}&offset=${params.offset}`).then(res => res.json())
// 推荐新音乐
export const getNewSong = (params: { limit: number }) => () => fetch(`/personalized/newsong?limitA${params.limit}`).then(res => res.json())
