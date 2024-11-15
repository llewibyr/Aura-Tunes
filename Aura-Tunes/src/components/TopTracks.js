import React, { useEffect, useState } from "react";

const token = 'BQC3-PhMUbhTpBejQEFKzy_X6PiQgcmt1GKmJGuj-ZmNJgdt9oXV2BDOMjmMb_XeF61_Dql2-SXLEPwU_WPEIAkGPIdG2sbB7OEqrc1Vuja7ymsz_4o';

export default function TopTracks() {
    const [topTracks, setTopTracks] = useState([]);
    

async function fetchWebApi(endpoint, method = 'GET', body = null) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: { Authorization: `Bearer ${token}` },
        method,
        body: body ? JSON.stringify(body) : undefined,
    });
    return await res.json();
}

async function getTopTracks() {
    return (await fetchWebApi('v1/me/top/tracks?time_range=long_term&limit=5')).items;
}


    useEffect(() => {
        const loadTopTracks = async () => {
            const tracks = await getTopTracks();
            setTopTracks(tracks);
        };
        loadTopTracks();
    }, []);

    return (
        <div>
            <h1>Top Tracks</h1>
            {topTracks.length > 0 ? (
                <ul>
                    {topTracks.map(({ name, artists, id }) => (
                        <li key={id}>{name} by {artists.map(artist => artist.name).join(', ')}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading your top tracks...</p>
            )}
        </div>
    );
}


