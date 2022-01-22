import { useEffect, useState } from "react";
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

function PhotoFilter({ posts, getSummary, deletePost }) {
  useEffect(() => {
    getSummary();
  }, []);

  return (
    <Grid item xs={12}>
      <Container>
      <Grid container justifyContent="space-around" alignItems="center">
        <Grid item style={{display:"flex"}}>
          <img src={loudSpeaker}></img>
          <Typography variant="subtitle1" style={{color:"#202020"}}>Только с фотографией</Typography>
        </Grid>
        <Grid item>
          <FormControlLabel control={<Switch defaultChecked />} />
        </Grid>
      </Grid>
      </Container>
    </Grid>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getSummary: getSummaryAction,
})(PhotoFilter);
