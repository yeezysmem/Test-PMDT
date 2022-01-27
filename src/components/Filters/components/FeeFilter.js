import React from "react";
// import './App.css';
import { connect } from "react-redux";
import "../../ResumeCard/ResumeCard.scss";
import {
  getSummary as getSummaryAction,
} from "../../../redux/modules/posts";

import { Container, Grid, Slider, Divider,Typography } from "@material-ui/core";


function valuetext(value) {
  return `${value}`;
}

function FeeFilter() {
  const [value, setValue] = React.useState([1800,8980]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid item xs={12} style={{marginBottom:55}}>
      <Container>
        <Typography variant="h5" component="h5" style={{marginBottom:12}}>
          Желаемая зарплата
        </Typography>
        <Divider light style={{marginBottom:30}}/>
        {/* <Grid container justifyContent="space-around" alignItems="center"> */}
          <Slider
            getAriaLabel={() => "Age range"}
            value={value}
            onChange={handleChange}
            getAriaValueText={valuetext}
            min={1000}
            max={10000}
            step="1"
          />
          <Grid container direction="row" alignItems="center" justifyContent="space-between">
              <Grid item>от</Grid>
              <Grid item style={{padding: "10px 30px", border:"1px solid #EAEAEA"}}>{value[0]}</Grid>
              <Grid item>до</Grid>
              <Grid item style={{padding: "10px 30px", border:"1px solid #EAEAEA"}}>{value[1]}</Grid>
              <Grid item>грн</Grid>
          </Grid>
        {/* </Grid> */}
      </Container>
    </Grid>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getSummary: getSummaryAction,
})(FeeFilter);
