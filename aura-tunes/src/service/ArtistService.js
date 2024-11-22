

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`;




const getArtists = async () => {
  try {
    const response = await fetch(`${BASE_URL}artists`);
    return response.json();
  } catch (error) {
    throw error; 
  }
};

const createArtist = async (artistData) => {
  try {
   const response = await fetch (`${BASE_URL}artists/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(artistData),
    });
    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(`Error: ${errorDetails.message}`);
    }
    return response.json(); 
  } catch (error) {
  }
};

const updateArtist = async (id, artistData) => {
  try {
    const response = await fetch(`${BASE_URL}artists/${id}`, {
      method: 'PUT',  // Use 'PUT' for update
      headers: {
        'Content-Type': 'application/json', // Make sure the content type is set to JSON
      },
      body: JSON.stringify(artistData), // Send the artist data in the request body
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(`Error: ${errorDetails.message}`);
    }

    return await response.json(); 
  } catch (error) {
    throw error;
  }
};



const deleteArtist = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}artists/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(`Error: ${errorDetails.message}`);
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};



export default {
  getArtists,
  createArtist,
  updateArtist,
  deleteArtist,
};