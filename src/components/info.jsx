import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EpisodeList from './episodeList';
import Menu from './menu';

const Info = () => {
  const [data, setData] = useState([]);
  const params = useParams(); // Récupère la catégorie à partir des paramètres d'URL

  useEffect(() => {
   
       
      
    const fetchData = async () => {
      try {
        const response = await fetch(`http://192.168.1.23:3000/video/${params.params}/${params.type}/${params.videoName}`);
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [params.params, params.type, params.videoName]);

  return (
    <div className='w-full flex flex-col bg-gray-800'>
      <Menu />
      <div className='overflow-x mt-20 p-4'>
        {data.map((video) => (
          <EpisodeList key={video.id} data={video} />
        ))}
      </div>
    </div>
  );
};

export default Info;
