import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initalState = {
  name: "",
  bio: "",
  genre: "",
  birthDate: "",
};

const ArtistForm = (props) => {
  const [formData, setFormData] = useState(initalState);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addArtist(formData);
    setFormData(initalState);
    navigate("/artist-list");
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <main>
       <h2 className="text-4xl text-center font-semibold mb-1 mt-4">Add Artist</h2>
      <form
        className="justify-center font-semibold text-center flex flex-col text-2xl m-3 w-screen h-screen items-center"
        onSubmit={handleSubmit}
      >
       
        <div className="w-80 grid p-5 mb-5 border-2 bg-white rounded-xl shadow-xl">
          <label htmlFor="name">Artist Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Artist Name"
          />
        </div>

        <div className="w-80 grid p-5 mb-5 border-2 bg-white rounded-xl shadow-xl">
          <label htmlFor="bio">Bio:</label>
          <input
            type="text"
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Bio"
          />
        </div>

        <div className="w-80 grid p-5 mb-5 border-2 bg-white rounded-xl shadow-xl">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            placeholder="Genre"
          />
        </div>
        <div className="w-80 grid p-5 mb-5 border-2 bg-white rounded-xl shadow-xl">
          <label htmlFor="birthDate">Birth Date</label>
          <input
            type="text"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            placeholder="Birth Date"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 shadow-xl"
        >
          Add Artist
        </button>
      </form>
    </main>
  );
};
export default ArtistForm;
