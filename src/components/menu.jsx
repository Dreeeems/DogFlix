import React from 'react'
import Logo from '../assets/img/logo.png'
import { Link, useNavigate,useParams } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate()
    const params = useParams();
    console.log(params)
    const homePage = () => {
        navigate(`/`);
      };
        
    return (
        <div className="bg-gray-900 text-white p-4 lg:flex lg:justify-between lg:items-center lg:fixed w-full">

          <div className="lg:hidden text-2xl font-bold"> <img src={Logo} alt="Your Logo" className="h-20 w-auto" /></div>
    
        
          <div className="hidden lg:flex lg:justify-between lg:items-center lg:w-full">
          <div className="text-2xl font-bold"><img src={Logo} alt="Your Logo" className="h-20 w-auto" onClick={homePage} /></div>
            <div><p className="hover:bg-red-800 p-4 bg-red-500 rounded-lg text-xl font-bold"> {params?.category || params.params}</p></div>
          </div>
        </div>
      );
    };

export default Menu