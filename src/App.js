import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Feed from './components/feed';
import HomePage from './pages/HomePage';
import Player from './pages/player';
function App() {
  return (
    <div className="App flex flex-col flex">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feed/:category" element={<Feed />} />
           <Route path="/player/:name/:type/:video" element={<Player />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;
