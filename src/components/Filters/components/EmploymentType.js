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
  Divider,
} from "@material-ui/core";

export default function EmploymentType() {
  return (
    <Grid item xs={12} style={{ marginBottom: 55 }}>
      <Container>
        <Typography variant="h5" component="h5" style={{ marginBottom: 12 }}>
        Type of employment
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
                    Full-time employment
                    </Grid>
                    <Grid item >
                      34567
                    </Grid>
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
                    Part-time employment
                    </Grid>
                    <Grid item >
                    876
                    </Grid>
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
                    Remote work
                    </Grid>
                    <Grid item >
                    1234
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </FormGroup>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

