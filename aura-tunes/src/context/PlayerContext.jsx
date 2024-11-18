import React, { useRef } from 'react'
import axios from 'axios';
import { createContext,useEffect,useState } from 'react';





export const PlayerContext = createContext();
 

    const PlayerContextProvider = ({children}) => {


        const audioRef = useRef();
        const seekBg = useRef();
        const seekBar = useRef();




        const [songsDara, setSongsData] = useState([]);
        const [albumData, setAlbumData] = useState([]);
        const [track, setTrack] = useState();
        const [playStatus, setPlayStatus] = useState(false);
        const [time, setTime] = useState({
            currentTime: {
                minutes: 0,
                seconds: 0
            },
            totalTime: {
                minutes: 0,
                seconds: 0
            }
        })

        const deezerChartUrl = 'https://api.deezer.com/chart/';


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
            const song = songsData.find((item)=> item.id === id);
            if (song) {
                setTrack(song);
                audioRef.current.src = song.preview;
                play();
            }
        };


        const previous = () => {
            const currentIndex = songsData.findIndex((item) => item.id === track.id);
            if ( currentIndex > 0) {
                const previousTrack = songsData[currentIndex - 1];
                setTrack(previousTrack);
                audioRef.current.src = previousTrack.preview;
                play();
            }
        };

    }
 
 
 
 
 
 
 



const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    songsData,
    track,
}

 
    return (
   <PlayerContext.Provider value={contextValue}>
    {children}
   </PlayerContext.Provider>
  )


export default PlayerContextProvider;
