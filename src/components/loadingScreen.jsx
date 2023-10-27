import React, { useEffect, useState } from 'react';
import logo from "../assets/img/logo.png";

const LoadingScreen = ({ onAnimationComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      onAnimationComplete();
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen w-full flex items-center align-center justify-center" >
        <div className="loading-animation animate-pulse">
          <img
            src={logo}
            alt="Loading Animation"
            className='h-96' // Ajoutez ces styles
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default LoadingScreen;
