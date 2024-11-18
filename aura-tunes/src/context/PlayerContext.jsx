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


        const seekSong = (e) => {
            const seekWidth = seekBg.current?.offsetWidth || 1;
            const duration = audioRef.current?.duration || 1;
            const newTime = (e.nativeEvent.offsetX / seekWidth) * duration;
            if (audioRef.current) {
              audioRef.current.currentTime = newTime;
            }
          };


          const fetchDeezerCharts = async () => {
            try {
              const response = await axios.get(deezerChartUrl);
              setSongsData(response.data.tracks.data); // Set top tracks
              setAlbumsData(response.data.albums.data); // Set top albumms
              if (response.data.tracks.data.length > 0) {
                setTrack(response.data.tracks.data[0]); 
              }
            } catch (error) {
              console.error("Error fetching Deezer charts:", error);
            }
          };

          useEffect(() => {
            const updateTime = () => {
              if (audioRef.current) {
                const { currentTime, duration } = audioRef.current;
                seekBar.current.style.width = `${(currentTime / duration) * 100}%`;
                setTime({
                  currentTime: {
                    second: Math.floor(currentTime % 60),
                    minute: Math.floor(currentTime / 60),
                  },
                  totalTime: {
                    second: Math.floor(duration % 60),
                    minute: Math.floor(duration / 60),
                  },
                });
              }
            };
        
            if (audioRef.current) {
              audioRef.current.ontimeupdate = updateTime;
            }
          }, []);
          
          
            useEffect(() => {
                fetchDeezerCharts();
            }, []);


    }
 
 
 
 
 
 
 



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
    previous,
    seekSong,
    albumData,
}

 
    return (
   <PlayerContext.Provider value={contextValue}>
    {children}
   </PlayerContext.Provider>
  )


export default PlayerContextProvider;
