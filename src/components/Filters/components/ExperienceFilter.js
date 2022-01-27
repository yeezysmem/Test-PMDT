import React from "react";
// import './App.css';
import { connect } from "react-redux";
import "../../ResumeCard/ResumeCard.scss";
import {
  getSummary as getSummaryAction,
} from "../../../redux/modules/posts";
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

function ExperienceFilter() {
  return (
    <Grid item xs={12} style={{ marginBottom: 55 }}>
      <Container>
        <Typography variant="h5" component="h5" style={{ marginBottom: 12 }}>
          Опыт работы
        </Typography>
        <Divider light style={{ marginBottom: 2 }} />
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item xs={12} style={{ display: "flex", alignItems: "center" }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Без опыта работы"
              />
              <FormControlLabel control={<Checkbox />} label="До 1 года" />
              <FormControlLabel control={<Checkbox />} label="От 1 до 2 лет" />
              <FormControlLabel control={<Checkbox />} label="От 2 до 5 лет" />
              <FormControlLabel control={<Checkbox />} label="От 5 до 10 лет" />

              <FormControlLabel control={<Checkbox />} label="Более 10 лет" />
            </FormGroup>
          </Grid>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            direction="row"
            style={{ marginTop: 5 }}
          >
            <Grid item xs={8} style={{ display: "flex", alignItems: "center" }}>
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
      </Container>
    </Grid>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getSummary: getSummaryAction,
})(ExperienceFilter);
