import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import Menu from "../components/menu";

const EpisodePlayer = () => {
  const video = useParams();
  const [captions_arr, setCaptions] = useState([
    {
      kind: "subtitles",
      src: `http://192.168.1.23:3000/videos/${video.name}/${video.type}/${video.videoName}/s${video.id}.vtt`,
      srcLang: "en",
      lang: "fr",
      name: "fr",
      default: true,
    },
  ]);
  return (
    <div>
      <Menu />
      <div className="mt-20 w-screen">
        <ReactPlayer
          url={`http://192.168.1.23:3000/videos/${video.name}/${video.type}/${video.videoName}/${video.video}`}
          playing={false}
          controls={true}
          config={{
            file: {
              attributes: {
                crossOrigin: "true",
              },
              tracks: captions_arr,
            },
          }}
        />
      </div>
    </div>
  );
};

export default EpisodePlayer;
