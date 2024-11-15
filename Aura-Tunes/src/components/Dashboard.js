import React, { useEffect, useState } from 'react';

export default function Dashboard({ accessToken }) {
  const [topTracks, setTopTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!accessToken) return;

    const fetchTopTracks = async () => {
      try {
        const response = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=5', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        
        const data = await response.json();
        setTopTracks(data.items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching top tracks:", error);
      }
    };

    fetchTopTracks();
  }, [accessToken]);

  return (
    <div>
      <h2>Your Top Tracks</h2>
      {loading && <p>Loading...</p>}
      <ul>
        {topTracks.map(track => (
          <li key={track.id}>
            <img src={track.album.images[0].url} alt={track.name} width="50" height="50"/>
            <p>{track.name} by {track.artists.map(artist => artist.name).join(',')}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

