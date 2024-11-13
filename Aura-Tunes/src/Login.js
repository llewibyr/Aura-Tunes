import React from "react";


const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=e86c24b13adb4e8c943ec7419b36fd6d&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing";

export default function Login() {
    return(
        <a className="bg-green-500 text-white py-2 px-4 rounded-lg text-lg hover:bg-green-600" href={AUTH_URL}>Login With Spotify</a>
    )
}