import React, { useState } from 'react';

const ArtistForm = ({ onSubmit = () => {}, formTitle = 'Add Artist' }) => {
  const [artist, setArtist] = useState({
    name: '',
    bio: '',
    genre: '',
    birthDate: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtist((prevArtist) => ({
      ...prevArtist,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure the onSubmit prop is a function
    if (typeof onSubmit !== 'function') {
      console.error('onSubmit prop is not a function.');
      return;
    }

    // Client-side validation for the required "name" field
    if (!artist.name.trim()) {
      setError('Name is required.');
      return;
    }

    // Clear errors and submit
    setError('');
    onSubmit(artist);

    // Clear form after submission
    setArtist({
      name: '',
      bio: '',
      genre: '',
      birthDate: '',
    });
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">{formTitle}</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={artist.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter artist's name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bio" className="block text-sm font-medium mb-1">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            value={artist.bio}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter artist's bio"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="genre" className="block text-sm font-medium mb-1">
            Genre
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={artist.genre}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter artist's genre"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="birthDate" className="block text-sm font-medium mb-1">
            Birth Date
          </label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={artist.birthDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ArtistForm;
