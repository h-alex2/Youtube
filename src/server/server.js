const express = require("express");
const app = express();
const morgan = require('morgan'); // 터미널에 속도, 등등 표시됨
const port = 3000;
const { youtube } = require("./youtube");
const path = require('path');
const fs = require("fs");
const data = JSON.parse(fs.readFileSync(__dirname + "/data.json", "utf8"));

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("This is Youtube API");
});

app.get("/api/search", (req, res, next) => {
  const response = data;
  const titles = response.data.items.map((item) => item.snippet.title);
  const snippet = response.data.items.map((item) => item.snippet);
  const thumbnails = response.data.items.map(item => item.snippet.thumbnails.default.url)
  res.send(snippet);
});

// app.get("/api/search", async(req, res, next) => {
//   try {
//     const searchQuery = req.query.search_query;
//     const response = await youtube.search.list({
//       part: "snippet",
//       maxResults: 5,
//       q: searchQuery,
//       type: "video",
//     });
//     const titles = response.data.items.map((item) => item.snippet.title);
//     const snippet = response.data.items.map((item) => item.snippet);
//     res.send(snippet);
//     console.log(searchQuery);
//   } catch (err) {
//     next(err);
//   }
// })

app.listen(port, () => {
  console.log("App is started");
});