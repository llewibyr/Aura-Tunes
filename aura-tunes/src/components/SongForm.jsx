import React, { useState, useEffect } from 'react';
import SongService from '../service/SongServices';

const SongForm = ({ selectedSong, songSaved }) => {
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    album: "",
    duration: "",
    genre: "",
  });

  useEffect(() => {
    if (selectedSong && selectedSong.title) {
      setFormData({
        title: selectedSong.title || "",
        artist: selectedSong.artist || "",
        album: selectedSong.album || "",
        duration: selectedSong.duration || "",
        genre: selectedSong.genre || "",
      });
    }
  }, [selectedSong]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (selectedSong && selectedSong._id) {
        // Update song
        await SongService.updateSong(selectedSong._id, formData);
      } else {
        // Create new song
        await SongService.createSong(formData);
      }

      // Notify parent component that the song was saved
      songSaved();

      // Clear form after submission
      setFormData({
        title: "",
        artist: "",
        album: "",
        duration: "",
        genre: "",
      });
    } catch (error) {
      console.log("Error saving the song:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedSong ? "Edit Song" : "Add A New Song"}</h2>
      
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          placeholder="Title"
        />
      </div>

      <div>
        <label>Artist</label>
        <input
          type="text"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
          required
          placeholder="Artist"
        />
      </div>

      <div>
        <label>Album</label>
        <input
          type="text"
          name="album"
          value={formData.album}
          onChange={handleChange}
          required
          placeholder="Album"
        />
      </div>

      <div>
        <label>Duration</label>
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          required
          placeholder="Duration"
        />
      </div>

      <div>
        <label>Genre</label>
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
          placeholder="Genre"
        />
      </div>

      <button type="submit">Save Song</button>
    </form>
  );
};

export default SongForm;
