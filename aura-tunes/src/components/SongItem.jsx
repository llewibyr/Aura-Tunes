import React from 'react';

const SongItem = ({ song, onDelete, onUpdate }) => {
  return (
    <li className="flex justify-between items-center border-b p-2">
      <div>
        <h3 className="font-bold">{song.title}</h3>
        <p className="text-sm">{song.artist?.name || 'Unknown Artist'}</p>
      </div>
      <div>
        <button
          onClick={() => onUpdate(song._id)}
          className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(song._id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default SongItem;

