import React, { useState, useEffect } from "react";

import "./styles.css";

import { Grid } from "@material-ui/core";

import { MainVideo, SearchBar, VideoList } from "./components";
import { youtube, apikey } from "./utils";

export default function App() {
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const { items: response } = await youtube(keyword);

      setVideos(response);
      setSelectedVideo(response[0]);
      setLoading(false);
      console.log(response);
    };

    fetchData();
  }, [keyword]);

  if (loading) return <p>Loading...</p>;
  if (!loading) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SearchBar onEnter={setKeyword} />
        </Grid>
        <Grid item xs={8}>
          <MainVideo video={selectedVideo} loading={loading} />
        </Grid>
        <Grid item xs={4}>
          <VideoList videos={videos} />
        </Grid>
      </Grid>
    );
  }
}
