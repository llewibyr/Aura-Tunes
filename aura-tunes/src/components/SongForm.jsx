import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as SongServices from '../service/SongServices';

const SongForm = ({ handleAddSong }) => {  // Destructure handleAddSong from props
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    genre: '',
    image: '',
    releaseDate: '',
  });
  const [artists, setArtists] = useState([]);

  const { songId } = useParams();

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
      if (songId) {
        try {
          const songData = await SongServices.getSong(songId);
          setFormData({
            title: songData.title || '',
            artist: songData.artist || '',
            genre: songData.genre || '',
            releaseDate: songData.releaseDate || '',
            image: songData.image || '',
          });
        } catch (error) {
          console.error('Error fetching song:', error);
        }
      }
    };

    fetchArtists();
    fetchSong();
  }, [songId]);

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
    handleAddSong(formData);  // Call the function passed as a prop
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-lg font-bold mb-4">
        {songId ? 'Edit Song' : 'Add A New Song'}
      </h2>

      <div className="mb-4">
        <label htmlFor="title-input" className="block text-sm font-medium mb-2">Song Name</label>
        <input
          id="title-input"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          placeholder="Enter song title"
          className="border rounded p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="artist-input" className="block text-sm font-medium mb-2">Artist</label>
        <select
          id="artist-input"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
          required
          className="border rounded p-2 w-full"
        >
          <option value="" disabled>Select an artist</option>
          {artists.map((artist) => (
            <option key={artist._id} value={artist._id}>
              {artist.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="genre-input" className="block text-sm font-medium mb-2">Genre</label>
        <input
          id="genre-input"
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
          placeholder="Enter song genre"
          className="border rounded p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="releaseDate-input" className="block text-sm font-medium mb-2">Release Date</label>
        <input
          id="releaseDate-input"
          type="text"
          name="releaseDate"
          value={formData.releaseDate}
          onChange={handleChange}
          placeholder="Enter release date"
          required
          className="border rounded p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="image-input" className="block text-sm font-medium mb-2">Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter image URL"
          id="image-input"
          className="border rounded p-2 w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {songId ? 'Edit Song' : 'Save Song'}
      </button>
    </form>
  );
};

export default SongForm;



