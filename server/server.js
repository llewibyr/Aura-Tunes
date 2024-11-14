// // Imports
// const express = require('express');
// const dotenv = require('dotenv');
// const mongoose = require('mongoose');


// Middleware
const methodOverride = require('method-override');
const morgan = require("morgan");
const path = require("path");

// App Config
dotenv.config();
const app = express();
const SpotifyWebApi = require("spotify-web-api-node");

mongoose.connect(process.env.MONGODB_URI);


app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'e86c24b13adb4e8c943ec7419b36fd6d',
        clientSecret: '94ab3e3f771e4a9d9df5f679a381ed2c'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
    })
    .catch(() => {
        res.sendStatus(400)
    })
})