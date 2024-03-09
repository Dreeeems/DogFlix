import React from 'react'
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player'
import Menu from '../components/menu';
const Player = () => {
    const  video  = useParams();
  return (
    <div>
      <Menu/>
    
    <div className='mt-20'>

<ReactPlayer url={`http://192.168.1.23:3000/videos/${video.name}/${video.type}/${video.video}`}  playing={false} controls={true} playIco={true}/>
    </div>
    </div>
  )
}

export default Player