import React, { useEffect, useState } from "react";
// import './App.css';
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import "../../ResumeCard/ResumeCard.scss";
import {
  getSummary as getSummaryAction,
  deletePost as deletePostAction,
} from "../../../redux/modules/posts";
import Post from "../../Post";
import { Container, Grid, Typography, Divider } from "@material-ui/core";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";


const useStyles = makeStyles((theme) => ({
  btn: {
    background: "#fff",
    color:"#202020",
    border:"none",
  },
  Toggle: {
    '&$selected': {
      background:"#000",
      '& + &': {
        borderLeft: 0,
        marginLeft: 0,
        background:"#000"
      },
    }
  }
  //   subCatItem: {
  //     "&::after": {
  //       content: " ' ' ",
  //       width: 7,
  //       height: 26,
  //       backgroundImage: `url(${triangle})`,
  //       backgroundPosition: "center",
  //       backgroundRepeat: "no-repeat",
  //       position: "absolute",
  //       left: 0,
  //     },
  //   },
}));

function SexFilter() {
  const [alignment, setAlignment] = React.useState("Любой");
  const classes = useStyles();
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Grid item xs={12} style={{marginBottom:55}}>
      <Container>
        <Typography variant="h5" component="h5" style={{marginBottom:12}}>
          Пол
        </Typography>
        <Divider light style={{marginBottom:24}} />
        <ToggleButtonGroup
        //   color="secondary"
          className={classes.btn}
          value={alignment}
          exclusive
          fullWidth
          size="medium"
          color="primary"
          onChange={handleChange}
          
        >
          <ToggleButton value="Любой">Любой</ToggleButton>
          <ToggleButton value="Мужчины">Мужчины</ToggleButton>
          <ToggleButton value="Женщины">Женщины</ToggleButton>
        </ToggleButtonGroup>
      </Container>
    </Grid>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getSummary: getSummaryAction,
})(SexFilter);
