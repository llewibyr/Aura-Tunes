import React, { useEffect, useState } from 'react';
import ArtistService from '../service/ArtistService';

const ArtistList = () => {
  const [artists, setArtists] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState();

 
 useEffect(() => {

    const fetchArtists = async () => {
        try {
          const data = await ArtistService.getAllArtists();
          console.log("Artists", artists);
          console.log("Data", data);
          setArtists(data);
        } catch (error) {
          console.log(error);
          setError('Failed to fetch artists');
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
    } catch {
      setError('Failed to delete artist'); 
      console.log("can't delete artist",error);
    }
   
  };
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
console.log("Artists",artists)
  return (
    <div>
      <h2 className="text-2xl font-bold">Artists</h2>
        <ul>
            {artists?.map((artist) => (
            <li key={artist._id} className="mb-4 p-4 border rounded">
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

