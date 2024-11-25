import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as SongServices from '../service/SongServices';

const SongForm = ({ handleAddSong,handleUpdateSong}) => {  
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    genre: '',
    image: '',
    releaseDate: '',
  });
  const [artists, setArtists] = useState([]);

  const { id } = useParams();


  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const artistsData = await SongServices.getArtists();
        setArtists(artistsData);
      } catch (error) {
        console.error('Error fetching artists:', error);
      }
    };

    const fetchSong = async () => {
      if (id) {
        try {
          const songData = await SongServices.getSong(id);
          setFormData({
            title: songData.title || '',
            artist: songData.artist || '',
            genre: songData.genre || '',
            releaseDate: songData.releaseDate || '',
            image: songData.image || '',
          });
        } catch (error) {
          console.log('Error fetching song:', error);
        }
      }
    };

    fetchArtists();
    fetchSong();
  }, [id]);

  useEffect(() => {
    if (artists.length > 0 && !formData.artist) {
      setFormData((prevData) => ({
        ...prevData,
        artist: artists[0]._id,
      }));
    }
  }, [artists]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      // If there's an id, it's an update
      handleUpdateSong(id, formData);
    } else {
      // If no id, it's a new song
      handleAddSong(formData);
    }
  };


  

  return (
    <form className=' justify-center font-semibold text-center flex flex-col text-2xl m-3 w-screen items-center' onSubmit={handleSubmit}>
      <h2 className="text-2xl text-center font-semibold mb-3">
        {id ? 'Edit Song' : 'New Song'}
      </h2>

      <div className="w-80 grid p-5 mb-5 border-2 bg-white rounded-xl shadow-xl">
        <label htmlFor="title-input"> Song Name</label>
        <input
          id="title-input"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          placeholder="Enter song title"
          className="p-1 w-full"
        />
      </div>

      <div className="w-80 grid p-5 mb-7 border-2 bg-white rounded-xl shadow-xl">
        <label htmlFor="artist-input">Artist</label>
        <select
          id="artist-input"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
          required
          className="p-1 w-full"
        >
          <option value="" disabled>Select an artist</option>
          {artists.map((artist) => (
            <option key={artist._id} value={artist._id}>
              {artist.name}
            </option>
          ))}
        </select>
      </div>

      <div className="w-80 grid p-5 mb-7 border-2 bg-white rounded-xl shadow-xl">
        <label htmlFor="genre-input">Genre</label>
        <input
          id="genre-input"
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
          placeholder="Enter song genre"
          className="p-1 w-full"
        />
      </div>

      <div className="w-80 grid p-5 mb-7 border-2 bg-white rounded-xl shadow-xl">
        <label htmlFor="releaseDate-input">Release Date</label>
        <input
          id="releaseDate-input"
          type="text"
          name="releaseDate"
          value={formData.releaseDate}
          onChange={handleChange}
          placeholder="Enter release date"
          required
          className="p-1 w-full"
        />
      </div>

      <div className="w-80 grid p-5 mb-7 border-2 bg-white rounded-xl shadow-xl">
        <label htmlFor="image-input">Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter image URL"
          id="image-input"
          className="p-1 w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 shadow-xl"
      >
        {id ? 'Edit Song' : 'Save Song'}
      </button>

    </form>
  );
};

export default SongForm;



