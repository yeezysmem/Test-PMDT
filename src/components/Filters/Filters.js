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
import FeeFilter from "./components/FeeFilter";
import ExperienceFilter from "./components/ExperienceFilter";
import LanguageFilter from "./components/LanguageFilter.jsx";
import EmploymentType from "./components/EmploymentType";
import EducationFilter from "./components/EducationFilter";

function Filters() {
  // useEffect(() => {
  //   getSummary();
  // }, []);

  return (
    <Grid item xs={4}>
      <Container>
        <Typography variant="h4" component="h5" style={{marginBottom:34}}>
          Фильтры
        </Typography>
        <PhotoFilter />
        <AgeFilter />
        <SexFilter />
        <FeeFilter />
        <ExperienceFilter />
        <LanguageFilter />
        <EmploymentType />
        <EducationFilter />
      </Container>
    </Grid>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getSummary: getSummaryAction,
})(Filters);
