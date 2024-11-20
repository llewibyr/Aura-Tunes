
import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
const TopTracks = () => {

    const { songsData, playWithId } = useContext(PlayerContext);


    if (!songsData) {
      return <p className="text-white">Loading songs...</p>;
    }
  
    if (songsData.length === 0) {
      return <p className="text-white">No songs available.</p>;
    }


  return (
    <div className="p-4">
    <h2 className="text-white text-lg font-semibold mb-4">Songs List</h2>
    <ul className="list-none">
      {songsData.map((song) => (
        <li
          key={song.id}
          className="text-white bg-gray-800 p-4 rounded-lg mb-2 cursor-pointer hover:bg-gray-700"
          onClick={() => playWithId(song.id)} 
        >
          <div className="flex items-center gap-4">
            <img
              src={song.album.cover}
              alt={song.title}
              className="w-16 h-16 rounded-lg"
            />
            <div>
              <p className="font-semibold">{song.title}</p>
              <p className="text-sm text-gray-400">{song.artist.name}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
};
 

export default TopTracks