import React, { useEffect, useState } from "react";
// import './App.css';
import { connect } from "react-redux";
import "../../ResumeCard/ResumeCard.scss";
import {
  getSummary as getSummaryAction,
  deletePost as deletePostAction,
} from "../../../redux/modules/posts";
import Post from "../../Post";
import { Container, Grid, Typography } from "@material-ui/core";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function SexFilter() {
  const [alignment, setAlignment] = React.useState("Любой");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Grid item xs={12}>
      <Container>
        <Typography variant="h5" component="h5">
          Пол
        </Typography>
        <ToggleButtonGroup
        //   color="secondary"
          value={alignment}
          exclusive
          
          onChange={handleChange}
        >
          <ToggleButton value="Любой">Любой</ToggleButton>
          <ToggleButton value="Мужчины">Мужчины</ToggleButton>
          <ToggleButton value="Женщины">Женщины</ToggleButton>
        </ToggleButtonGroup>
      </Container>
    </Grid>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getSummary: getSummaryAction,
})(SexFilter);
