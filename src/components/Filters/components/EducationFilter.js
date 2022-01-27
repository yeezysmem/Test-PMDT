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
  Divider,
} from "@material-ui/core";

function EducationFilter() {
  return (
    <Grid item xs={12}>
      <Container>
        <Typography variant="h5" component="h5" style={{ marginBottom: 12 }}>
          Образование
        </Typography>
        <Divider light style={{ marginBottom: 4 }} />
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item xs={12} style={{ display: "flex", alignItems: "center" }}>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Высшее" />
              <FormControlLabel
                control={<Checkbox />}
                label="Неоконченное высшее"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Средне-специальное"
              />
              <FormControlLabel control={<Checkbox />} label="Среднее" />
            </FormGroup>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getSummary: getSummaryAction,
})(EducationFilter);
