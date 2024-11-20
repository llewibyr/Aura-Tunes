import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";

export const PlayerContext = React.createContext();

const PlayerContextProvider = (props) => {
 
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [songsData, setSongsData] = useState([]);
  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: { minutes: 0, seconds: 0 },
    totalTime: { minutes: 0, seconds: 0 },
  });

//   const deezerChartUrl = "/api/deezer/chart/";  

  
  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlayStatus(true);
    }
  };


  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayStatus(false);
    }
  };

 
  const playWithId = (id) => {
    const song = songsData.find((item) => item.id === id);
    if (song && audioRef.current) {
      setTrack(song);
      audioRef.current.src = song.preview;  
      play(); 
    } else {
      console.log("Song not found or audioRef is not initialized.");
    }
  };

  const fetchDeezerCharts = async () => {
    try {
      const response = await axios.get(deezerChartUrl);
      setSongsData(response.data.tracks.data);
      if (response.data.tracks.data.length > 0) {
        setTrack(response.data.tracks.data[0]);
      }
    } catch (error) {
      console.log("Error fetching Deezer charts:", error);
    }
  };

  
  useEffect(() => {
    fetchDeezerCharts();
  }, []);

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    songsData,
    track,
    playStatus,
    time,
    play,
    pause,
    playWithId,
    setTime,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;



