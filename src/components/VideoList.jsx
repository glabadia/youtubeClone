import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, loading }) => {
  if (loading) return null;
  if (!loading) {
    console.log(`Videos: ${videos}`);

    const styledVideos = videos.map((video, idx) => (
      <VideoItem key={idx} video={video} />
    ));
    return (
      <Grid container spacing={1}>
        {styledVideos}
      </Grid>
    );
  }
};

export default VideoList;
