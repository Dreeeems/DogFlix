import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { colors } from '../util/color';
import user from "../assets/img/test.png";
import LoadingScreen from '../components/loadingScreen';

const HomePage = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [types, setType] = useState([]);
  const [cat, setCat] = useState();
  const navigate = useNavigate();

  const setCategory = (item) => {
    setCat(item);
    navigate(`/feed/${item}`);
  };

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex].code;
  };

  useEffect(() => {
    fetch("http://192.168.1.23:3000/folder-contents")
      .then(response => response.json())
      .then(data => {
        setType(data.folders);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='w-full'>
      <LoadingScreen onAnimationComplete={() => setIsAnimationComplete(true)} />

      {isAnimationComplete && (
        <div>
          <h1 className='text-5xl sm:text-7xl md:text-9xl text-white flex items-center justify-center py-2'>DogFlix</h1>
          <div className="overflow-x-auto m-12">
            <div className="flex flex-wrap gap-4 justify-center">
              {types.length > 0 ? (
                types.map((item) => {
                  const randomColor = getRandomColor();
                  return (
                    <div
                      className="shadow-md rounded-lg p-4 flex flex-col items-center justify-center m-4 cursor-pointer"
                      key={item.key}
                      onClick={() => setCategory(item)}
                      style={{ backgroundColor: randomColor }}
                    >
                      <img className="w-30 h-30 rounded-full mb-2" src={user} alt={item} />
                      <p className='text-lg text-white font-mono font-bold'>{item}</p>
                    </div>
                  );
                })
              ) : (
                <div>No data</div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="space-y-20">
              <div className="w-full">
                <div className="flex-1 g-full w-96 mx-auto">
                  <div className="flex w-full bg-gray-400 shadow rounded-lg py-4 px-16">
                    <p className="m-auto inset-0 text-xl font-semibold leading-7 text-center text-gray-200">Add profile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
