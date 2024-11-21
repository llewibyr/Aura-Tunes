import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

  const initalState = {
    name: '',
    bio: '',
    genre: '',
    birthDate: '',
  };
  
 const ArtistForm = (props) => {
    const [formData, setFormData] = useState(initalState);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        props.addArtist(formData);
        setFormData(initalState);
        navigate('/artist-list');
    };

   const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
   }

   return (
    <main>
        <h2>
            Add Artist
        </h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Artist Name:</label>
            <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Artist Name'
                />
            <label htmlFor='bio'>Bio:</label>
            <input
                type='text'
                id='bio'
                name='bio'
                value={formData.bio}
                onChange={handleChange}
                placeholder='Bio'
                />
            <label htmlFor='genre'>Genre:</label>
            <input
                type='text'
                id='genre'
                name='genre'
                value={formData.genre}
                onChange={handleChange}
                placeholder='Genre'
                />
            <label htmlFor='birthDate'>Birth Date:</label>
            <input
                type='text'
                id='birthDate'
                name='birthDate'
                value={formData.birthDate}
                onChange={handleChange}
                placeholder='Birth Date'
                />
                <button type='submit'>Add Artist</button>
        </form>
    </main>
   )

 }
;



export default ArtistForm;
