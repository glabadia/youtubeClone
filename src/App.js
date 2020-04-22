import React, { useState, useEffect } from "react";

import "./styles.css";

import { Grid } from "@material-ui/core";

import { MainVideo, SearchBar, VideoList } from "./components";
import { youtube, apikey } from "./utils";

export default function App() {
  const [keyword, setKeyword] = useState("dogs");
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setLoading(true);

    const fetchData = async q => {
      const {
        data: { items }
      } = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key: apikey,
          q
        }
      });
      console.log(items);

      setVideos(items);
      setSelectedVideo(items[0]);
      setLoading(false);
    };

    fetchData(keyword);
  }, [keyword]);

  useEffect(() => {}, [keyword]);

  console.log(videos);
  if (!selectedVideo) return null;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <SearchBar onEnter={setKeyword} />
      </Grid>
      <Grid item xs={8}>
        <MainVideo video={selectedVideo} loading={loading} />
      </Grid>
      <Grid item xs={4}>
        <VideoList videos={videos} loading={loading} />
      </Grid>
    </Grid>
  );
}
