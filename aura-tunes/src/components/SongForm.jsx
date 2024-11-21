import React, { useState, useEffect } from 'react';
import SongServices from '../service/SongServices';

const SongForm = ({ selectedSong }) => {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    album: '',
    genre: '',
    albumImage: '',
    releaseDate: '',
  });

  
  useEffect(() => {
    if (selectedSong) {
      setFormData({
        title: selectedSong.title || '',
        artist: selectedSong.artist || '',
        album: selectedSong.album || '',
        genre: selectedSong.genre || '',
        albumImage: selectedSong.albumImage || '',
        releaseDate: selectedSong.releaseDate || '', 
      });
    }
  }, [selectedSong]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (selectedSong?._id) {
        await SongServices.updateSong(selectedSong._id, formData);
      } else {
        await SongServices.createSong(formData);
      }

      
      // songSaved();
      setFormData({
        title: '',
        artist: '',
        album: '',
        genre: '',
        albumImage: '',
        releaseDate: '', 
      });
    } catch (error) {
      console.error('Error saving the song:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-lg font-bold mb-4">
        {selectedSong ? 'Edit Song' : 'Add A New Song'}
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Title</label>
        <input
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
        <label className="block text-sm font-medium mb-2">Artist</label>
        <input
          type="text"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
          required
          placeholder="Enter artist name"
          className="border rounded p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Album</label>
        <input
          type="text"
          name="album"
          value={formData.album}
          onChange={handleChange}
          required
          placeholder="Enter album name"
          className="border rounded p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Genre</label>
        <input
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
        <label className="block text-sm font-medium mb-2">Release Date</label>
        <input
          type="date"
          name="releaseDate"
          value={formData.releaseDate}
          onChange={handleChange}
          placeholder="Enter release date"
          required
          className="border rounded p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Image URL</label>
        <input
          type="text"
          name="albumImage"
          value={formData.albumImage}
          onChange={handleChange}
          placeholder="Enter album image URL"
          className="border rounded p-2 w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save Song
      </button>
    </form>
  );
};

export default SongForm;

