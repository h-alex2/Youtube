const baseApiUrl = "https://www.googleapis.com/youtube/v3";
const { google } = require("googleapis");

const API_KEY = process.env.YOUTUBE_API_KEY;

exports.youtube = google.youtube({
  version: "v3",
  auth: API_KEY,
});