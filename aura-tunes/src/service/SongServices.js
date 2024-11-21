import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL; 

const getAllSongs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/songs`);
    return response.data;
  } catch (error) {
    console.log('Error fetching songs:', error);
    throw error; 
  }
};


const createSong = async (songData) => {
  console.log(songData)
  try { 
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(songData),
    };
    const response = await fetch(`${BASE_URL}/songs/add`, options);
    console.log(response)
    return response.json(); 
  } catch (error) {
    console.log('Error creating song:', error);
    throw error;
  }
};


const updateSong = async (id, songData) => {
  try {
    const response = await axios.put(`${BASE_URL}/songs/${id}`, songData);
    return response.data; 
  } catch (error) {
    console.log('Error updating song:', error);
    throw error;
  }
};


const deleteSong = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/songs/${id}`);
    return response.data; 
  } catch (error) {
    console.log('Error deleting song:', error);
    throw error;
  }
};

export default {
  getAllSongs,
  createSong,
  updateSong,
  deleteSong,
};


