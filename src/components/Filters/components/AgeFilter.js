import React from "react";
// import './App.css';

import { Container, Grid, Slider, Divider,Typography } from "@material-ui/core";


function valuetext(value) {
  return `${value}`;
}

export default function AgeFilter() {
  const [value, setValue] = React.useState([20,40]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid item xs={12} style={{marginBottom:55}}>
      <Container>
        <Typography variant="h5" component="h5" style={{marginBottom:12}}>
          Возраст
        </Typography>
        <Divider light style={{marginBottom:30}} />
          <Slider
            getAriaLabel={() => "Age range"}
            value={value}
            onChange={handleChange}
            getAriaValueText={valuetext}
            min={17}
            max={50}
            step="1"
            style={{marginBottom:15}}
          />
          <Grid container direction="row" alignItems="center" justifyContent="space-between">
              <Grid item>от</Grid>
              <Grid item style={{padding: "10px 40px", border:"1px solid #EAEAEA"}}>{value[0]}</Grid>
              <Grid item>до</Grid>
              <Grid item style={{padding: "10px 40px", border:"1px solid #EAEAEA"}}>{value[1]}</Grid>
              <Grid item>грн</Grid>
          </Grid>
      </Container>
    </Grid>
  );
}
