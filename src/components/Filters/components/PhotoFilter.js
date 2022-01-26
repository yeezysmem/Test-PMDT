import React, { useEffect, useState } from "react";
// import './App.css';
import { connect } from "react-redux";
import "../../ResumeCard/ResumeCard.scss";
import {
  getSummary as getSummaryAction,
  deletePost as deletePostAction,
} from "../../../redux/modules/posts";
import Post from "../../Post";
import { Container, Grid } from "@material-ui/core";
import {
  Typography,
  FormControlLabel,
  FormGroup,
  Switch,
} from "@material-ui/core";
import loudSpeaker from "../../../static/images/loudSpeaker.svg";

//ToggleFilter
function PhotoFilter({ getSummary, withPhotos }) {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
    getSummary(event.target.checked);
  };
  //how to implement toggle react mui

  return (
    <Grid item xs={12} style={{ marginBottom: 55 }}>
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item style={{ display: "flex" }}>
            <img src={loudSpeaker}></img>
            <Typography
              variant="subtitle1"
              style={{ color: "#202020", paddingTop: 1, fontSize: 14 }}
            >
              Только с фотографией
            </Typography>
          </Grid>
          <Grid item>
            <FormControlLabel
              control={<Switch onChange={handleChange} checked={checked} />}
            />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getSummary: getSummaryAction,
})(PhotoFilter);
