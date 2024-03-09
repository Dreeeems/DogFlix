import React from 'react'
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom'
import Menu from '../components/menu';

const EpisodePlayer = () => {
    const video = useParams();
    console.log(video)
  return (
    <div>
    <Menu/>
    <div className='mt-20'>

    <ReactPlayer url={`http://192.168.1.23:3000/videos/${video.name}/${video.type}/${video.videoName}/${video.video}`}  playing={false} controls={true}/>
        </div>
        </div>
  )
}

export default EpisodePlayer