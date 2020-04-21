import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core";

const VideoItem = ({
  video: {
    id,
    snippet: {
      title,
      thumbnails: {
        high: { url }
      }
    }
  }
}) => {
  return (
    <>
      <Grid item xs={12}>
        <Paper
          elevation={1}
          styles={{
            display: "flex",
            alignItems: "center",
            padding: "1em"
          }}
        >
          <img src={url} alt={"thumbnail"} style={{ width: "100%" }} />
          <Typography
            variant="subtitle1"
            style={{ fontWeight: "bold", padding: "1em" }}
          >
            {title}
          </Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default VideoItem;
