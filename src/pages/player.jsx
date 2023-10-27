import React from 'react'
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player'
const Player = () => {
    const  video  = useParams();
  return (
    <div>

<ReactPlayer url={`http://192.168.1.23:3000/videos/${video.name}/${video.type}/${video.video}`}  playing={false} controls={true} playIco={true}/>
    </div>
  )
}

export default Player