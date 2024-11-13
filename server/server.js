// Imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


// Middleware
const methodOverride = require('method-override');
const morgan = require("morgan");
const path = require("path");

// App Config
dotenv.config();
const app = express();
const SpotifyWebApi = require("spotify-web-api");

mongoose.connect(process.env.MONGODB_URI);