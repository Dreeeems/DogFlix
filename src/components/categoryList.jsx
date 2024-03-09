import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

const CategoryList = ({ data }) => {
  const params = useParams();
  const navigate = useNavigate();
  const setCategory = (video, category) => {
    if (category == "films") {
      navigate(`/player/${params.category}/${category}/${video.url}`);
    } else {
      navigate(`/info/${params.category}/${category}/${video.name}`);
    }
  };

  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [hoveredVideoName, setHoveredVideoName] = useState(null);
  return (
    <div className="w-full p-4 py-24">
      {data.map((category) => (
        <div key={category.folder} className="mb-8">
          <h2 className="text-white font-black">
            {category.folder.toUpperCase()}
          </h2>
          <div
            className={`flex flex-nowrap overflow-x-auto gap-1 ${
              data.length > 0
                ? "justify-start"
                : "justify-left sm:justify-center sm:items-center"
            }`}
            style={{ flexWrap: "nowrap", overflowX: "auto" }}
          >
            {category.videos.map((video) => (
              <div
                className="flex-shrink-0 w-64 p-4 cursor-pointer"
                key={video.id}
                onClick={() => setCategory(video, category.folder)}
                style={{ flex: "0 0 auto" }}
                onMouseOver={() => {
                  setHoveredVideo(video.id);
                  setHoveredVideoName(video.name);
                }}
                onMouseLeave={() => setHoveredVideo(null)}
              >
                <div className="rounded overflow-hidden ">
                  <img
                    className="h-64 object-fill w-96"
                    src={`https://image.tmdb.org/t/p/w500/${video?.tmdbData?.poster_path}`}
                    alt={video.name}
                  />
                  <div
                    className={`px-6 py-4 bg-gray-900`}
                    style={{
                      transition: "opacity 0.3s",
                      opacity:
                        hoveredVideo === video.id &&
                        hoveredVideoName === video.name
                          ? 1
                          : 0,
                    }}
                  >
                    <p className="text-white xl"> {video.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
