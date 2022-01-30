import React, { useState } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainPosition: {
    paddingBottom: 14,
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
      fontWeight: 600,
      paddingBottom: 6,
     },
    },
}));

export default function PostItem(pos) {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts.posts);
  const newArr = posts.slice(0, 1);
  return (
    <div>
      {newArr.map((item, i) =>
        item.desiredposition.slice(0,1).map((pos) => {
          return (
            <Typography variant="h4" className={classes.mainPosition}
            component="p" key={pos.id}>{pos.position}</Typography>
          ) 
        })
      )}
    </div>
  );
}
