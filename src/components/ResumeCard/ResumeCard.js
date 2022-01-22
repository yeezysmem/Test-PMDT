import { useEffect, useState } from "react";
// import './App.css';
import { connect } from "react-redux";

import Filters from "../Filters/Filters";
import "./ResumeCard.scss";
import {
  getSummary as getSummaryAction,
  deletePost as deletePostAction,
} from "../../redux/modules/posts";
import Post from "../Post";

import { Grid, Container, Typography } from "@material-ui/core";



function ResumeCard({ posts, getSummary, deletePost }) {
  useEffect(() => {
    getSummary();
  }, []);

  return (
    <Container>
      <Typography variant="h3" component="h3" >Мы подобрали <span style={{color:"#0096C7"}}>451 642</span> резюме</Typography>
      <Typography variant="subtitle2" component="p" >Резюме продавец консультант во Всей Украине</Typography>
      {/* <Row> */}
        <Grid container>
          <Grid item xs={8}>
            {posts.length &&
              posts.map((item) => (
                <Post
                  id={item.id}
                  key={item.id}
                  category={item.category}
                  title={item.first_name}
                  vacancy={item.desiredposition.position}
                  image={item.photo}
                  
                />
              ))}
          </Grid>
          <Filters />
        </Grid>
        
      {/* </Row> */}
    </Container>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getSummary: getSummaryAction,
})(ResumeCard);
