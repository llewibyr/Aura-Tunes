import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TopTracks({ accessToken }) {
    const [topTracks, setTopTracks] = useState([]);

    useEffect(() => {
        if (!accessToken) return;

        const fetchTopTracks = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/top-tracks', {
                    params: { accessToken },
                });
                setTopTracks(response.data);
            } catch (error) {
                console.error("Error fetching top tracks:", error);
            }
        };

        fetchTopTracks();
    }, [accessToken]);

    return (
        <div>
            <h1>Top Tracks</h1>
            {topTracks.length > 0 ? (
                <ul>
                    {topTracks.map(({ name, artists, id }) => (
                        <li key={id}>
                            {name} by {artists.map((artist) => artist.name).join(", ")}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading your top tracks...</p>
            )}
        </div>
    );
}



