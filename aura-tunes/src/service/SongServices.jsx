import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BACKEND_URL;



const SongService = {
  // Search for tracks, albums, or artists
  search: async (query) => {
    try {
      const response = await axios.get(`${BASE_URL}/search`, {
        params: { q: query },
      });
      return response.data;
    } catch (error) {
      console.error("Error searching songs:", error);
      throw error;
    }
  },




  // Get details for a specific track
  getTrackDetails: async (trackId) => {
    try {
      const response = await axios.get(`${BASE_URL}/track/${trackId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching track details:", error);
      throw error;
    }
  },



  // Get details for a specific artist
  getArtistDetails: async (artistId) => {
    try {
      const response = await axios.get(`${BASE_URL}/artist/${artistId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching artist details:", error);
      throw error;
    }
  },
};

export default SongService;
