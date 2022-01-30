import React from "react";
// import './App.css';
import { makeStyles, styled } from "@material-ui/core/styles";
import "../../PostsList/ResumeCard.scss";

import { Container, Grid, Typography, Divider } from "@material-ui/core";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: 0,
    },
    "&:first-of-type": {
      borderRadius: 0,
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  btn: {
    background: "#fff",
    color: "#202020",
    border: "none",
  },
}));

export default function SexFilter() {
  const [alignment, setAlignment] = React.useState("Любой");
  const classes = useStyles();
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Grid item xs={12} style={{ marginBottom: 55 }}>
      <Container>
        <Typography variant="h5" component="h5" style={{ marginBottom: 12 }}>
          Пол
        </Typography>
        <Divider light style={{ marginBottom: 24 }} />
        <StyledToggleButtonGroup
          className={classes.btn}
          value={alignment}
          exclusive
          fullWidth
          size="medium"
          onChange={handleChange}
        >
          <ToggleButton value="Любой">Любой</ToggleButton>
          <ToggleButton value="Мужчины">Мужчины</ToggleButton>
          <ToggleButton value="Женщины">Женщины</ToggleButton>
        </StyledToggleButtonGroup>
      </Container>
    </Grid>
  );
}
