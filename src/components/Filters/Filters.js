// import './App.css';
import React from "react";
import "../PostsList/ResumeCard.scss";
import { makeStyles } from "@material-ui/core/styles";

import { Container, Typography } from "@material-ui/core";

import AgeFilter from "./components/AgeFilter";
import PhotoFilter from "./components/PhotoFilter";
import SexFilter from "./components/SexFilter";
import FeeFilter from "./components/FeeFilter";
import ExperienceFilter from "./components/ExperienceFilter";
import LanguageFilter from "./components/LanguageFilter.jsx";
import EmploymentType from "./components/EmploymentType";
import EducationFilter from "./components/EducationFilter";

const useStyles = makeStyles((theme) => ({
  filters: {
    marginBottom: 34,
    [theme.breakpoints.down("sm")]: {
      marginTop: 100,
    },
  },
}));

export default function Filters() {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h4" component="h5" className={classes.filters}>
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
  );
}
