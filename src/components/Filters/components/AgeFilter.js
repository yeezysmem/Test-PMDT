import React, { useEffect, useState } from "react";
// import './App.css';
import { connect } from "react-redux";
import "../../ResumeCard/ResumeCard.scss";
import {
  getSummary as getSummaryAction,
  deletePost as deletePostAction,
} from "../../../redux/modules/posts";
import Post from "../../Post";
import { Container, Grid, Slider, Box } from "@material-ui/core";
import {
  Typography,
  FormControlLabel,
  FormGroup,
  Switch,
} from "@material-ui/core";
import loudSpeaker from "../../../static/images/loudSpeaker.svg";

function valuetext(value) {
  return `${value}`;
}

function AgeFilter() {
  const [value, setValue] = React.useState([17,40]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid item xs={12}>
      <Container>
        <Typography variant="h5" component="h5">
          Возраст
        </Typography>
        <Grid container justifyContent="space-around" alignItems="center">
          <Slider
            getAriaLabel={() => "Age range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={17}
            max={50}
            step="1"
          />
          <Grid item style={{display:"flex", alignItems:"center"}}>
              <span>от</span>
              <Box style={{padding:10}}>{value[0]}</Box>
              <span>до</span>
              <Box style={{padding:10}}>{value[1]}</Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getSummary: getSummaryAction,
})(AgeFilter);
