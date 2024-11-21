import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'; 
import SongList from './components/SongList';  
import SongForm from './components/SongForm'; 
import LandingPage from './components/LandingPage';
import ArtistList from './components/ArtistList';
import ArtistForm from './components/ArtistForm';

const App = () => {
  return (
    <div className="bg-grey-400 flex flex-col">
      <NavBar />
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/songs" element={<SongList />} /> 
        <Route path="/new-song" element={<SongForm />} />
        <Route path="/artist-list" element={<ArtistList/>} />
        <Route path="/new-artist" element={<ArtistForm/>} />
      </Routes>
    </div>
  );
};

export default App;





