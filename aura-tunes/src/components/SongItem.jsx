import React from 'react';

const SongItem = ({ song, onDelete, onEdit }) => {
  return (
    <li className="min-w-[180px] p-2 px-3 rounded cursor-pointer">
      <h3 className="text-xl">{song.title}</h3>
      <p className='font-bold mt-2 mb-1'>Artist: {song.artist}</p>
      <p>Genre: {song.genre}</p>
      <p>Release Date: {new Date(song.releaseDate).toLocaleDateString()}</p>
      <div>
        <button onClick={() => onEdit(song._id)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Edit
        </button>
        <button onClick={() => onDelete(song._id)} className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Delete
        </button>
      </div>
    </li>
  );
};

export default SongItem;

