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

function EmploymentType() {
  return (
    <Grid item xs={12} style={{ marginBottom: 55 }}>
      <Container>
        <Typography variant="h5" component="h5" style={{ marginBottom: 12 }}>
          Тип занятости
        </Typography>
        <Divider light style={{ marginBottom: 4 }} />
        <Grid container justifyContent="flex-start" alignItems="center">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Grid container>
                  <Grid item>Полная занятость</Grid>
                  <Grid item>34567</Grid>
                </Grid>
              }
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Неполная занятость"
            />
            <FormControlLabel control={<Checkbox />} label="Удаленная работа" />
          </FormGroup>
        </Grid>
      </Container>
    </Grid>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getSummary: getSummaryAction,
})(EmploymentType);
