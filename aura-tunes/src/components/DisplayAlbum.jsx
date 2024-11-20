import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
import Navbar from "./NavBar";

const DisplayAlbum = () => {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState(null);
  const { playWithId, albumsData } = useContext(PlayerContext);

  useEffect(() => {
    const album = albumsData.find((item) => item.id === parseInt(id));
    setAlbumData(album);
  }, [id, albumsData]);

  return albumData ? (
    <>
      <Navbar />

      {/* Album Header */}
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img
          className="w-48 rounded"
          src={albumData.cover_big}
          alt={albumData.title}
        />
        <div className="flex flex-col">
          <p>Album</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.title}</h2>
          <h4 className="text-gray-400">{albumData.artist.name}</h4>
          <p className="mt-1">
            <b>Deezer</b> • {albumData.nb_tracks} tracks •{" "}
            {Math.ceil(albumData.duration / 60)} min
          </p>
        </div>
      </div>

      {/* Track List Header */}
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Artist</p>
        <p className="hidden sm:block">Duration</p>
      </div>

      <hr />

      {/* Track List */}
      {albumData.tracks.data.map((track, index) => (
        <div
          onClick={() => playWithId(track.id)}
          key={track.id}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <span className="ml-2">{track.title}</span>
          </p>
          <p className="text-[15px]">{track.artist.name}</p>
          <p className="text-[15px] hidden sm:block">
            {Math.floor(track.duration / 60)}:{track.duration % 60 < 10 ? "0" : ""}
            {track.duration % 60}
          </p>
        </div>
      ))}
    </>
  ) : (
    <p className="text-center text-white">Loading album...</p>
  );
};

export default DisplayAlbum;
