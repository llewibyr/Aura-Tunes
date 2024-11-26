import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import SongList from "./components/SongList";
import SongForm from "./components/SongForm";
import LandingPage from "./components/LandingPage";
import ArtistList from "./components/ArtistList";
import ArtistForm from "./components/ArtistForm";
import { useNavigate } from "react-router-dom";
import ArtistService from "./service/ArtistService";
import * as SongServices from "./service/SongServices";

const App = () => {
  const [artists, setArtists] = useState([]);
  const navigate = useNavigate();

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const artistData = await ArtistService.getArtists();
        setArtists(artistData);
      } catch (error) {}
    };
    fetchArtists();
  }, []);

  const addArtist = async (formData) => {
    try {
      const newArtist = await ArtistService.createArtist(formData);
      setArtists([newArtist, ...artists]);
      navigate("/artist-list");
    } catch (error) {}
  };

  const handleDeleteArtist = async (artistid) => {
    try {
      const deletedArtist = await ArtistService.deleteArtist(artistid);
      if (deletedArtist) {
        throw new Error(deletedArtist.error);
      }
      setArtists(artists.filter((artist) => artist._id !== artistid));
      navigate("/artist-list");
    } catch (error) {}
  };

  const handleAddSong = async (formData) => {
    try {
      const newSong = await SongServices.createSong(formData);
      console.log(newSong);
      setSongs([newSong, ...songs]);
      navigate("/song-list");
    } catch (error) {}
  };

  const handleUpdateSong = async (songId, formData) => {
    try {
      const updatedSong = await SongServices.updateSong(songId, formData);
      setSongs((prevSongs) =>
        prevSongs.map((song) => (song._id === songId ? updatedSong : song))
      );

      navigate("/song-list");
    } catch (error) {}
  };

  return (
    <div className=" w-screen bg-indigo-400">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/song-list" element={<SongList songs={songs} />} />
        <Route
          path="/songs/add"
          element={<SongForm handleAddSong={handleAddSong} />}
        />
        <Route
          path="/songs/:id/update"
          element={
            <SongForm
              handleUpdateSong={handleUpdateSong}
              handleAddSong={handleAddSong}
            />
          }
        />
        <Route
          path="/artist-list"
          element={
            <ArtistList artist={artists} onDelete={handleDeleteArtist} />
          }
        />
        <Route
          path="/new-artist"
          element={<ArtistForm addArtist={addArtist} />}
        />
      </Routes>
    </div>
  );
};

export default App;
