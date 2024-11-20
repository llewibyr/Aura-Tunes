import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const { play, pause, playWithId, songsData, track, playStatus, audioRef } = useContext(PlayerContext);

  const trackTitle = track?.title || "Select a song";

  return (
    <div className="player-container bg-black flex justify-between items-center text-white px-4">
      <h1 className="text-xl font-semibold text-white mb-4">Now Playing: {trackTitle}</h1>

      <audio ref={audioRef} controls className="w-full">
        Your browser does not support the audio element.
      </audio>

      <div className="flex flex-col gap-4 mt-4">
        <button onClick={play} disabled={playStatus} className="play-pause-btn">
          Play
        </button>
        <button onClick={pause} disabled={!playStatus} className="play-pause-btn">
          Pause
        </button>
      </div>

      <div className="song-list bg-black flex items-center gap-1 mt-6">
        {songsData.length > 0 ? (
          songsData.map((song) => (
            <div key={song.id} className="song-item flex justify-between items-center p-2 bg-gray-800 rounded-lg mb-2">
              <span className="text-white">{song.title}</span>
              <button onClick={() => playWithId(song.id)} className="play-btn bg-green-500 text-white py-1 px-4 rounded-lg">
                Play
              </button>
            </div>
          ))
        ) : (
          <p className="text-white">Loading songs...</p>
        )}
      </div>
    </div>
  );
};

export default Player;




