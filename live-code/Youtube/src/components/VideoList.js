import React from 'react';
import VideoListItem from './VideoListItem'
const VideoList = ({videos, onVideoChange}) => {
  return (
    <ul className="col-md-4 list-group">
      {videos.map( (video) => <VideoListItem onVideoChange={onVideoChange} key={video.etag} video={video} /> )}
    </ul>
  )
}

export default VideoList
