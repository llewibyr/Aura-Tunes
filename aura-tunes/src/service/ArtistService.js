import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL;


const getAllArtists = async () => {
  try {
    const response = await fetch(`${BASE_URL}/artists`);
    console.log("Response",response)
    return response.json();
  } catch (error) {
    console.log('Error fetching a artists:', error);
    throw error; 
  }
};

const createArtist = async (artistData) => {
  try {
    const response = await axios.post(`${BASE_URL}/artists/add`, artistData);
    return response.data; 
  } catch (error) {
    console.log('Error creating a artist:', error);
    throw error;
  }
};

const updateArtist = async (id, artistData) => {
  try {
    const response = await axios.put(`${BASE_URL}/artists/${id}`, artistData);
    return response.data; 
  } catch (error) {
    console.log('Error updating a artist:', error);
    throw error;
  }
};


const deleteArtist = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/artists/${id}`);
    return response.data; 
  } catch (error) {
    console.log('Error deleting a artist:', error);
    throw error;
  }
};


export default {
  getAllArtists,
  createArtist,
  updateArtist,
  deleteArtist,
};
