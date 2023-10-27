import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReactCountryFlag from "react-country-flag";

const CategoryList = ({ data }) => {
  const params = useParams();
  const navigate = useNavigate();

  const setCategory = (video, category) => {
    navigate(`/player/${params.category}/${category}/${video.url}`);
  };

  return (
    <div className='container p-4 py-24'>
      {data.map((category) => (
        <div key={category.folder} className="mb-8">
          <h2 className='text-white font-black'>{category.folder.toUpperCase()}</h2>
          <div
            className={`flex flex-nowrap overflow-x-auto gap-4 ${
              data.length > 0 ? 'justify-start items-center' : 'justify-left sm:justify-center sm:items-center'
            }`}
            style={{ flexWrap: 'nowrap', overflowX: 'auto' }}
          >
            {category.videos.map((video) => (
              <div
                className="flex-shrink-0 w-64 p-4"
                key={video.id}
                onClick={() => setCategory(video, category.folder)}
                style={{ flex: '0 0 auto' }}
              >
                <div className="rounded overflow-hidden ">
                  <img
                    className="w-full h-40 object-cover"
                    src={`https://image.tmdb.org/t/p/w500/${video?.tmdbData?.backdrop_path}`}
                    alt={video.name}
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-white">{video?.tmdbData?.title}</div>
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
