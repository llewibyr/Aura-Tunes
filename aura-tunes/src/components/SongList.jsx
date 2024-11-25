import React, { useState, useEffect } from 'react';
// import SongItem from './SongItem';
import * as SongServices from '../service/SongServices';
import { Link ,useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const SongList = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

let { id } = useParams();
  
// const navigate = useNavigate();

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const data = await SongServices.getSongs();
        setSongs(data || []);
      } catch (err) {
        setError(err.message || 'Failed to fetch songs');
      } finally {
        setLoading(false);
      }
    };
    fetchSongs();
  }, []);

//  const handleUpdate = async (id) => {
//     try {
//       await SongServices.updateSong(id);
//       setSongs((prevSongs) => prevSongs.filter((song) => song._id !== id));
//     } catch (err) {
//       setError('Failed to update song');
//     }
//   };
    
  const handleDelete = async (id) => {
    try {
      await SongServices.deleteSong(id);
      setSongs((prevSongs) => prevSongs.filter((song) => song._id !== id));
    } catch (err) {
      setError('Failed to delete song');
    }
  };

 
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className=' justify-center text-xl font-semibold flex items-center flex-row'>
      <h2 className="text-2xl font text-center p-2 font-semibold"> Songs:</h2>
    <ul className='items-center justify-between'>
      {songs?.map((song) => (
        <li
        className="mb-4 p-5 text-center border rounded-md border-blue-950 text-2xl"
         key= {song._id}>
          <h3>
            {song.title}
          </h3>
          <p>
            Artist: {song.artist.name }</p>
            <p>Genre: {song.genre}</p>
            <p>Release Date: {new Date(song.releaseDate).toLocaleDateString()}</p>
            <img src={song.imageUrl} 
            alt={song.title}
            className="w-full h-48 object-cover rounded-md" />

          <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 shadow-lg shadow-orange-400" onClick={()=> handleDelete(song._id)}>Delete</button>
          <Link to={`/songs/${song._id}/update`} ><button>Edit</button></Link>
        </li>
      ))}
    </ul>
    </div>
  );
};


export default SongList;






