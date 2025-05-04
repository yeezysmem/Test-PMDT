import React from "react";
import { useDispatch } from "react-redux";
import "../../PostsList/ResumeCard.scss";

import { Container, Grid } from "@material-ui/core";
import {
  Typography,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import loudSpeaker from "../../../static/images/loudSpeaker.svg";
import { getSummary } from "../../../redux/modules/posts";


export default  function PhotoFilter() {
  const [checked, setChecked] = React.useState(true);
  const dispatch = useDispatch();
  
  const handleChange = (event) => {
    setChecked(event.target.checked);

    dispatch(getSummary({withPhotos: event.target.checked}));
  };

  return (
    <Grid item xs={12} style={{ marginBottom: 55 }}>
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item style={{ display: "flex" }}>
            <img src={loudSpeaker} alt="loudSpeaker"></img>
            <Typography
              variant="subtitle1"
              style={{ color: "#202020", paddingTop: 1, fontSize: 14 }}
            >
               Only with a photo
            </Typography>
          </Grid>
          <Grid item>
            <FormControlLabel
              control={<Switch onChange={handleChange} checked={checked} />}
            />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}


