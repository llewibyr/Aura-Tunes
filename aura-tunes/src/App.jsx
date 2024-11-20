import React, { useContext } from "react";
import { PlayerContext } from "./context/PlayerContext"; 
import NavBar from "./components/NavBar"; 
import Display from "./components/Display"; 
import Player from "./components/Player"; 
import SongItem from "./components/SongItem"; 
import { Route, Routes } from "react-router-dom";
import TopTracks from "./components/TopTracks";
import SongForm from "./components/SongForm"; 

const App = () => {
  const { songsData } = useContext(PlayerContext); 

  const topTracks = songsData
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5); 

  const renderMainContent = () => (
    <div className="main-content flex flex-grow">
      <div className="content-area flex flex-col p-6 flex-grow">
       
        <div className="song-list mt-6">
          <h2 className="text-2xl font-bold mb-4">Charts/Top Tracks</h2>
          
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-black flex flex-col">
      <NavBar />  
    <Routes>
      <Route path = "/" element = {<main><h1>Aura Tunes</h1></main>} />
     <Route path = "/top-tracks" element = {<TopTracks/>} />
      <Route path = "/new-song" element = {<SongForm/>} /> 
    </Routes>
          <SongItem />
          <Display />
          <Player />
          
      {songsData.length > 0 ? renderMainContent() : <p>No songs available</p>}
      </div>
  );
};

export default App;





