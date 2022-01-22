import { useEffect, useState } from "react";
// import './App.css';
import { connect } from "react-redux";
import "../ResumeCard/ResumeCard.scss";
import {
  getSummary as getSummaryAction,
  deletePost as deletePostAction,
} from "../../redux/modules/posts";
import Post from "../Post";
import { Container, Grid } from "@material-ui/core";
import {
  Typography,
  FormControlLabel,
  FormGroup,
  Switch,
} from "@material-ui/core";
import loudSpeaker from "../../static/images/loudSpeaker.svg";
import AgeFilter from "./components/AgeFilter";
import PhotoFilter from "./components/PhotoFilter";
import SexFilter from "./components/SexFilter";

function Filters({ posts, getSummary, deletePost }) {
  useEffect(() => {
    getSummary();
  }, []);

  return (
    <Grid item xs={4}>
      <Container>
        <Typography variant="h4" component="h5">
          Фильтры
        </Typography>
        <PhotoFilter />
        <AgeFilter />
        <SexFilter />
      </Container>
    </Grid>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getSummary: getSummaryAction,
})(Filters);
