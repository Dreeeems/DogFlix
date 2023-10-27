import React, { useState, useEffect } from 'react';
import CategoryList from './categoryList';
import { useParams } from 'react-router-dom';
import Menu from './menu';

const Feed = () => {
  const [data, setData] = useState([]);
  const { category } = useParams(); // Récupère la catégorie à partir des paramètres d'URL

  useEffect(() => {
    fetch(`http://192.168.1.23:3000/video/${category}`)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [category]); // Ajout de 'category' dans le tableau de dépendances

  return (
    <div>
      <Menu/>
      <h2 className='text-white text-lg'>{category}</h2>
      <CategoryList data={data} />
    </div>
  );
};

export default Feed;
