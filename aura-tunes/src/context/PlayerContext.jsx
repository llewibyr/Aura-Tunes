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
      

    }
 
 
 
 
 
 
 
 
    return (
   <PlayerContextProvider value={contextValue}>
    {props.children}
   </PlayerContextProvider>
  )


export default PlayerContext
