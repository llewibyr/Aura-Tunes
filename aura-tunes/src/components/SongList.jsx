import React, { useEffect, useState } from 'react';
import SongItem from './SongItem';
import * as SongServices from '../service/SongServices';

const SongList = () => {
  const [songs, setSongs] = useState([]); // State for songs
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch songs when the component mounts
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const data = await SongServices.getSongs();
        setSongs(data || []); // Handle empty or null data
      } catch (err) {
        setError(err.message || 'Failed to fetch songs');
      } finally {
        setLoading(false);
      }
    };
    fetchSongs();
  }, []);

  const handleAddSong = async (newSong) => {
    try {
      const createdSong = await SongServices.createSong(newSong);
      setSongs((prevSongs) => [...prevSongs, createdSong]); // Add new song to the list
    } catch (err) {
      setError('Failed to add song');
    }
  };
  
  // Handle deleting a song
  const handleDelete = async (id) => {
    try {
      await SongServices.deleteSong(id);
      setSongs((prevSongs) => prevSongs.filter((song) => song._id !== id)); // Remove song locally
    } catch (err) {
      setError(err.message || 'Failed to delete song');
    }
  };

  // Loading and error UI
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!songs || songs.length === 0) return <div>No songs available.</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Songs</h2>
      <ul>
        {songs.map((song) => (
          <SongItem
            key={song._id}
            song={song}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <button
        onClick={() =>
          handleAddSong({ title: 'New Song', artist: 'Unknown Artist' })
        }
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Song
      </button>
    </div>
  );
};

export default SongList;








