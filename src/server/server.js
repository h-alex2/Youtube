const express = require("express");
const app = express();
const morgan = require('morgan'); // 터미널에 속도, 등등 표시됨
const port = 3000;
const { youtube } = require("./youtube");
const path = require('path');
const fs = require("fs");
const videos = JSON.parse(fs.readFileSync(__dirname + "/videos.json", "utf8"));
const channels = JSON.parse(fs.readFileSync(__dirname + "/channels.json", "utf8"));
const homeVideo = JSON.parse(fs.readFileSync(__dirname + "/homeVideo.json", "utf8"));

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("This is Youtube API");
});

app.get("/api/videos", async(req, res, next) => {
  try {
    const response = homeVideo;
    res.send(response);
  } catch (err) {
    next(err);
  }
})

app.get("/api/result", (req, res, next) => {
  const searchQuery = req.query.search_query;
  const response = videos;
  const data = response.data.items.map((item) => {
    return {
      id: item.id.videoId,
      channelId: item.snippet.channelId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high.url,
      channelTitle: item.snippet.channelTitle,
      publishedAt: item.snippet.publishedAt,
    }
  });
  res.send(data);
});

app.get("/api/channel", async(req, res, next) => {
  try {
    const channelId = req.query.channelId;
    const response = channels;
    const thumbnail = response.data.items.map((item) => item.snippet.thumbnails.default.url)
    res.send(thumbnail[0]);
  } catch (err) {
    next(err);
  }
})


// api

// app.get("/api/videos", async(req, res, next) => {
//   try {
//     const response = await youtube.videos.list({
//       part: "snippet",
//       chart: "mostPopular",
//       maxResults: 20,
//       regionCode: "KR",
//     });
//     const data = response.data.items.map((item) => {
//       return {
//         id: item.id.videoId,
//         channelId: item.snippet.channelId,
//         title: item.snippet.title,
//         description: item.snippet.description,
//         thumbnail: item.snippet.thumbnails.high.url,
//         channelTitle: item.snippet.channelTitle,
//         publishedAt: item.snippet.publishedAt,
//       }
//     });
//     res.send(response);
//   } catch (err) {
//     next(err);
//   }
// })


// app.get("/api/result", async(req, res, next) => {
//   try {
//     const searchQuery = req.query.search_query;
//     const response = await youtube.search.list({
//       part: "snippet",
//       maxResults: 20,
//       q: searchQuery,
//       type: "video",
//     });
//     const data = response.data.items.map((item) => {
//       return {
//         id: item.id.videoId,
//         channelId: item.snippet.channelId,
//         title: item.snippet.title,
//         description: item.snippet.description,
//         thumbnail: item.snippet.thumbnails.high.url,
//         channelTitle: item.snippet.channelTitle,
//         publishedAt: item.snippet.publishedAt,
//       }
//     });
//     res.send(data);
//   } catch (err) {
//     next(err);
//   }
// })

// app.get("/api/channel", async(req, res, next) => {
//   try {
//     const channelId = req.query.channelId;
//     const response = await youtube.channels.list({
//       part: "snippet",
//       maxResults: 5,
//       id: channelId,
//     });
//     const thumbnail = response.data.items.map((item) => item.snippet.thumbnails.default.url)
//     res.send(thumbnail[0]);
//   } catch (err) {
//     next(err);
//   }
// });

// app.get("/api/guideCategories", async(req, res, next) => {
//   try {
//     const channelId = req.query.channelId;
//     const response = await youtube.guideCategories.list({
//       part: "snippet",
//       // maxResults: 5,
//       id: "22",
//     });
//     // const thumbnail = response.data.items.map((item) => item.snippet.thumbnails.default.url)
//     res.send(response);
//   } catch (err) {
//     next(err);
//   }
// });

app.listen(port, () => {
  console.log("App is started");
});