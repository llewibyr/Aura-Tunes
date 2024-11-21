import React, { useEffect, useState } from 'react';
import SongItem from './SongItem';
import * as SongServices from '../service/SongServices';

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const data = await SongServices.getSongs();
        console.log("Data", data);
        setSongs(data);
      } catch (err) {
        setError('Failed to fetch songs');
        setLoading(false);
      }
    };
    fetchSongs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await SongServices.deleteSong(id);
      setSongs(songs.filter((song) => song._id !== id));
    } catch (err) {
      setError('Failed to delete song');
    }
  };


  // const handleEdit = async (id) => {

   

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Songs</h2>
      <ul>
        {songs?.map((song) => (
          <SongItem key={song._id} song={song} onDelete={handleDelete} onEdit={handleEdit} />
        ))}
      </ul>
    </div>
  );
};

export default SongList;






