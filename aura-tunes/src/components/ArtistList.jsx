import React, { useEffect, useState } from 'react';
import ArtistService from '../service/ArtistService';
import { useNavigate } from 'react-router-dom';


const ArtistList = () => {
  const [artists, setArtists] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState();

 
 useEffect(() => {

  const fetchArtists = async () => {
    try {
      const data = await ArtistService.getArtists();
      console.log("Data", data);
      setArtists(data);
    } catch (error) {
      console.log("Error fetching artists:", error);
      setError(error.message || 'Failed to fetch artists');
    } finally {
      setLoading(false);
    }
  };
  
  
      

    fetchArtists(); 
  }, []);

 
  const handleDelete = async (id) => {
    try {
      await ArtistService.deleteArtist(id);
      setArtists((prevArtists) => prevArtists.filter((artist) => artist._id !== id));
    } catch (error) {
      setError('Failed to delete artist'); 
      console.log("Can't delete artist:", error);
    }
  };
  
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
console.log("Artists",artists)
  return (
    <div className='bg-grey-200'>
      <h2 className="text-3xl font text-center">Artists</h2>
        <ul className='items-center'>
            {artists?.map((artist) => (
            <li key={artist._id} className="mb-4 p-4 border rounded text-xl">
                <h3 className="text-xl font-semibold">{artist.name}</h3>

                <p><strong>Bio:</strong> {artist.bio || 'Not Avaliable'}</p>

                <p><strong>Genre:</strong> {artist.genre}</p>
                <p><strong>Born:</strong> {new Date(artist.birthDate).toLocaleDateString()}</p>
                <button 
                onClick={() => handleDelete(artist._id)} 
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;

