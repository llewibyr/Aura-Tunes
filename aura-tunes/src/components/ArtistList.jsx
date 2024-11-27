import React, { useEffect, useState } from "react";
import ArtistService from "../service/ArtistService";

const ArtistList = () => {
  const [artists, setArtists] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState();

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const data = await ArtistService.getArtists();
        setArtists(data);
      } catch (error) {
        setError(error.message || "Failed to fetch artists");
      } finally {
        setLoading(false);
      }
    };
    fetchArtists();
  }, []);

  const handleDelete = async (id) => {
    try {
      await ArtistService.deleteArtist(id);
      setArtists((prevArtists) =>
        prevArtists.filter((artist) => artist._id !== id)
      );
    } catch (error) {
      setError("Failed to delete artist");
    }
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <h2 className="text-3xl font text-center p-2 font-semibold ">Artists:</h2>
      <div className="text-xl  font-semibold flex items-center flex-row shadow-lg w-screen">
        <ul className="items-center  shadow-lg border rounded-md shadow-amber-500">
          {artists.map((artist) => (
            <li
              key={artist._id}
              className="mb-4 p-5  border rounded-md border-black  text-center text-2xl"
            >
              <h3 className="text-3xl"> {artist.name}</h3>
              <p>Bio: {artist.bio || "Not Avaliable"}</p>
              <p>Genre: {artist.genre}</p>
              <p>Born: {new Date(artist.birthDate).toLocaleDateString()}</p>
              <button
                onClick={() => handleDelete(artist._id)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 shadow-lg shadow-orange-400"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ArtistList;
