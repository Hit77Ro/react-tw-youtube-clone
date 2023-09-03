-----> What To learn  
-> load more button ( api request) ;
-> skeleton animation when loading data
-> reusable compnents
-> React Routers

=> Api requests
// getting categories
-> params : `search?part=snippet&q=${selectedCategory}`

// searching from video channel
-> `search?part=snippet&q=${currentSearchTerm}`

// getting channel info
-> `channels?part=snippet&id=${id}`
-> getting channel videos.. `search?channelId=${id}&part=snippet&order=date`

// get video details to play,,,
-> `videos?part=snippet,statistics&id=${id}
-> get related video
-> `search?part=snippet&relatedToVideoId=${id}&type=video`
-> get video comments : `commentThreads?part=snippet&videoId`