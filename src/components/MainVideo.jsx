import React, { useEffect } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const MainVideo = ({
  video: {
    snippet: { title, channelTitle, description },
    id: { videoId }
  },
  loading
}) => {
  if (loading) return <Typography variant="caption">Loading</Typography>;

  // console.log(`Video: ${video}`);
  if (!loading) {
    // const {
    //   snippet: { title, channelTitle, description },
    //   id: { videoId }
    // } = video;

    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    return (
      <Paper elevation={3} style={{ height: "70%" }}>
        <iframe
          frameBorder="0"
          title="Video Player"
          width="100%"
          height="100%"
          src={videoUrl}
        />
        <Typography variant="h5">
          {title} - {channelTitle}
        </Typography>
        <Typography variant="subtitle1">{channelTitle}</Typography>
        <Typography variant="subtitle2">{description}</Typography>
      </Paper>
    );
  }
};

export default MainVideo;
