import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";


const formatDuration = (duration) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const SongItem = ({ name, image, desc, id, duration }) => {
  const { playWithId } = useContext(PlayerContext);

  return (
    <div onClick={() => playWithId(id)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img className="rounded" src={image} alt={name} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
      <p className="text-slate-400 text-xs mt-2">{formatDuration(duration)}</p>
    </div>
  );
};



export default SongItem;
