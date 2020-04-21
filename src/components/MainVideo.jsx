import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const MainVideo = ({ video, loading }) => {
  if (loading) return <Typography variant="caption">Loading</Typography>;

  if (!loading) {
    console.log(video);
    const {
      snippet: { title, channelTitle, description },
      id: { videoId }
    } = video;

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
