import React, { useState } from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

export default function PostPositions(pos = "Nameee") {
  const posts = useSelector((state) => state.posts.posts);
  const newArr = posts.slice(1, 2);
  return (
    <div>
      {newArr.map((item, i) =>
        item.desiredposition.slice(0, 2).map((pos) => {
          const positionName = pos.position.split(",")[0].trim();
          
          return (
            <Typography variant="body1" component="p" key={pos.id}>
              {positionName} 
            </Typography>
          );
        })
      )}
    </div>
  );
}
