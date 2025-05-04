import React from "react";
// import './App.css';
import "../../PostsList/ResumeCard.scss";
import {
  Container,
  Grid,
  Typography,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Switch,
  Divider,
} from "@material-ui/core";

import mortarboard from "../../../static/images/mortarboard.svg";

export default function ExperienceFilter() {
  return (
    <Grid item xs={12} style={{ marginBottom: 55 }}>
      <Container>
        <Typography variant="h5" component="h5" style={{ marginBottom: 12 }}>
        Formation
        </Typography>
        <Divider light style={{ marginBottom: 4 }} />
        <Grid container justifyContent="flex-start" alignItems="center">
          <Grid item xs={12}>
            <FormGroup>
              <Grid container alignItems="center">
                <Grid item xs={12}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="flex-start"
                  >
                    <Grid item xs={1}>
                      <FormControlLabel control={<Checkbox />} />
                    </Grid>
                    <Grid item xs={9}>
                    No experience
                    </Grid>
                    <Grid item>603</Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container alignItems="center">
                <Grid item xs={12}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="flex-start"
                  >
                    <Grid item xs={1}>
                      <FormControlLabel control={<Checkbox />} />
                    </Grid>
                    <Grid item xs={9}>
                    Up to 1 year
                    </Grid>
                    <Grid item>603</Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container alignItems="center">
                <Grid item xs={12}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="flex-start"
                  >
                    <Grid item xs={1}>
                      <FormControlLabel control={<Checkbox />} />
                    </Grid>
                    <Grid item xs={9}>
                    1 to 2 years old
                    </Grid>
                    <Grid item>603</Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container alignItems="center">
                <Grid item xs={12}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="flex-start"
                  >
                    <Grid item xs={1}>
                      <FormControlLabel control={<Checkbox />} />
                    </Grid>
                    <Grid item xs={9}>
                    2 to 5 years old
                    </Grid>
                    <Grid item>603</Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container alignItems="center">
                <Grid item xs={12}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="flex-start"
                  >
                    <Grid item xs={1}>
                      <FormControlLabel control={<Checkbox />} />
                    </Grid>
                    <Grid item xs={9}>
                    5 to 10 years
                    </Grid>
                    <Grid item>603</Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container alignItems="center">
                <Grid item xs={12}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="flex-start"
                  >
                    <Grid item xs={1}>
                      <FormControlLabel control={<Checkbox />} />
                    </Grid>
                    <Grid item xs={9}>
                    More than 10 years
                    </Grid>
                    <Grid item>603</Grid>
                  </Grid>
                </Grid>
              </Grid>
            </FormGroup>
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              direction="row"
              style={{ marginTop: 5 }}
            >
              <Grid
                item
                xs={8}
                style={{ display: "flex", alignItems: "center" }}
              >
                <img src={mortarboard} style={{ marginRight: 5 }} />
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: 300, fontSize: 14, color: "#5B5B5B" }}
                >
                  Students only
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel control={<Switch />} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
