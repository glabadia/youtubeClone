import React from "react";
import { Grid, Paper } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const styledVideos = videos.map((video, idx) => (
    <VideoItem key={idx} video={video} />
  ));
  return (
    <Grid container spacing={1}>
      {styledVideos}
    </Grid>
  );
};

export default VideoList;
