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
          Образование
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
                      Без опыта
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
                      До 1 года
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
                      От 1 до 2 лет
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
                      От 2 до 5 лет
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
                      От 5 до 10 лет
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
                      Более 10 лет
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
                  Только студенты
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
