import React from 'react';

const SongItem = ({ song, onDelete, onEdit }) => {
  return (
    <li className="mb-4 p-4 border rounded">
      <h3 className="text-xl">{song.title}</h3>
      <p>Artist: {song.artist}</p>
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

