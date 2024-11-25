const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`;

export const getSongs = async () => {
  try {
    const response = await fetch(`${BASE_URL}songs`);
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const getSong = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}songs/${id}`);
    return response.json();
  } catch (error) {}
};

export const createSong = async (songData) => {
  console.log(songData);
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(songData),
    };
    const response = await fetch(`${BASE_URL}songs/add`, options);
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const updateSong = async (id, songData) => {
  try {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(songData),
    };
    const response = await fetch(`${BASE_URL}songs/${id}/update`, options);
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const deleteSong = async (id) => {
  try {
    const options = {
      method: "DELETE",
    };
    const response = await fetch(`${BASE_URL}songs/${id}`, options);
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const getArtists = async () => {
  try {
    const response = await fetch(`${BASE_URL}artists`);
    return response.json();
  } catch (error) {
    throw error;
  }
};

export default {
  getSongs,
  createSong,
  updateSong,
  deleteSong,
  getArtists,
  getSong,
};
