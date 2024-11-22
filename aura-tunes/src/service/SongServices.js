
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`;

// const getSongs = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}songs`);
//     return response.data;
//   } catch (error) {
//     console.log('Error fetching songs:', error);
//     throw error; 
//   }
// };


// const createSong = async (songData) => {
//   console.log(songData)
//   try { 
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(songData),
//     };
//     const response = await fetch(`${BASE_URL}songs/add`, options);
//     console.log(response)
//     return response.json(); 
//   } catch (error) {
//     console.log('Error creating song:', error);
//     throw error;
//   }
// };


// const updateSong = async (id, songData) => {
//   try {
//     const response = await fetch(`${BASE_URL}songs/${id}`,);
//     return response.data; 
//   } catch (error) {
//     console.log('Error updating song:', error);
//     throw error;
//   }
// };


// const deleteSong = async (id) => {
//   try {
//     const response = await fetch(`${BASE_URL}songs/${id}`);
//     return response.data; 
//   } catch (error) {
//     console.log('Error deleting song:', error);
//     throw error;
//   }
// };


// const getArtists = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}artists`);
//     return response.json(); // Parse and return the JSON data
//   } catch (error) {
//     console.log('Error fetching artists:', error);
//     throw error; // Re-throw the error for handling elsewhere
//   }
// };



export const getSongs = async () => {
  try {
    const response = await fetch(`${BASE_URL}songs`);
    return response.data;
  } catch (error) {
    console.log('Error fetching songs:', error);
    throw error; 
  }
};

export const createSong = async (songData) => {
  console.log(songData);
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(songData),
    };
    const response = await fetch(`${BASE_URL}songs/add`, options);
    console.log(response);
    return response.json(); 
  } catch (error) {
    console.log('Error creating song:', error);
    throw error;
  }
};

export const updateSong = async (id, songData) => {
  try {
    const response = await fetch(`${BASE_URL}songs/${id}`);
    return response.data; 
  } catch (error) {
    console.log('Error updating song:', error);
    throw error;
  }
};

export const deleteSong = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}songs/${id}`);
    return response.data; 
  } catch (error) {
    console.log('Error deleting song:', error);
    throw error;
  }
};

export const getArtists = async () => {
  try {
    const response = await fetch(`${BASE_URL}artists`);
    return response.json(); // Parse and return the JSON data
  } catch (error) {
    console.log('Error fetching artists:', error);
    throw error; // Re-throw the error for handling elsewhere
  }
};



export default {
  getSongs,
  createSong,
  updateSong,
  deleteSong,
  getArtists,
};



