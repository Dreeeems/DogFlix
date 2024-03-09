import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const EpisodeList = ({ data }) => {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);
  const setCategory = () => {
    console.log("ok");
    navigate(
      `/playerEpisode/${params.params}/${params.type}/${params.videoName}/${
        data.url
      }/${data.id + 1}`
    );
  };

  return (
    <div className="my-5 mx-2 md:mx-4 lg:mx-8 xl:mx-16" onClick={setCategory}>
      <div className="w-full flex flex-col md:flex-row bg-gray-300 items-center">
        <div className="p-4 md:p-8 text-3xl">{data.id + 1}</div>
        <div className="w-full md:w-1/3 lg:w-1/4 h-auto">
          <img
            className="w-full h-auto"
            src={`https://image.tmdb.org/t/p/w200${data.tmdbData.backdrop_path}`}
            alt=""
          />
        </div>
        <div className="p-4 md:p-8 text-center md:text-left">{data.name}</div>
      </div>
    </div>
  );
};

export default EpisodeList;
