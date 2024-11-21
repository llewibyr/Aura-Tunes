import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as SongServices from '../service/SongServices';


const SongForm = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    genre: '',
    image: '',
    releaseDate: '',
  });
const {songId} = useParams();
  

// useEffect(() => {
//   const fetchSong = async () => {
//     const songData = await SongServices.getSong(songId);
//     setFormData(songData);
//     console.log(
//       "SongData",songData);
//     };
//     if(songId) fetchSong();
//   }, [songId]);


  // useEffect(() => {
  //   if (selectedSong) {
  //     setFormData({
  //       title: selectedSong.title || '',
  //       artist: selectedSong.artist || '',
  //       genre: selectedSong.genre || '',
  //       releaseDate: selectedSong.releaseDate || '', 
  //       image: selectedSong.image || '',
  //     });
  //   }
  // }, [songId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log("event", event);
  };

// const handleChange = (event) => {
//   setFormData({
//     ...formData,
//     [event.target.name]: event.target.value
//   })
// }


// const handleSubmit = (event) => {
//   event.preventDefault();
//   props.handleAddSong(formData);
// };




const handleSubmit = (event) => {
  event.preventDefault();
  if (songId) {
    props.handleUpdateSong(songId, formData);
    console.log("songId", songId);
  } else {
    props.handleAddSong(formData);
    console.log("formData", formData);
}
  setFormData({
    title: '',
    artist: '',
    genre: '',
    image: '',
    releaseDate: '',
  });
}
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-lg font-bold mb-4">
        {/* {songId ? 'Edit Song' : 'Add A New Song'} */}
      </h2>
      <div className="mb-4">
        <label htmlFor='title-input'
         className="block text-sm font-medium mb-2">Song Name</label>
        <input
        id='title-input'
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
        <label htmlFor='artist-input'
         className="block text-sm font-medium mb-2">Artist</label>
        <input
        id='artist-input'
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
        <label htmlFor='genre-input' 
        className="block text-sm font-medium mb-2">Genre</label>
        <input
          id='genre-input'
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
        <label htmlFor='releaseDate-input' 
        className="block text-sm font-medium mb-2">Release Date</label>
        <input
        id='releaseDate-input'
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
        <label htmlFor='image-input' 
        className="block text-sm font-medium mb-2">Image URL</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter image URL"
          id='image-input'
          className="border rounded p-2 w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Save Song
      </button>
      <button type='submit'
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Edit Song 
      </button>
    </form>
  );
};

export default SongForm;

