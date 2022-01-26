import React, { useEffect, useState } from "react";
// import './App.css';
import { makeStyles } from "@material-ui/core/styles";
import { connect, useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { styled } from "@mui/material/styles";
import Filters from "../Filters/Filters";
import "./ResumeCard.scss";
import {
  getSummary as getSummaryAction,
  deletePost as deletePostAction,
} from "../../redux/modules/posts";
import Post from "../Post";
import arrDown from "../../static/images/arrDown.svg";
import {
  Grid,
  Container,
  Typography,
  Divider,
  Link,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import { Pagination } from "@mui/material";

import InputBase from "@mui/material/InputBase";

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
  },
  divider: {
    width: 170,
    background: "#000046",
    margin: "16px 0",
    [theme.breakpoints.down("sm")]: {
      width: 140,
      margin: "10px 0",
    },
  },
  pageSubtitle:{
    marginRight: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize:12,
      marginRight: 0,
    },
  },
  menuItem: {
    [theme.breakpoints.down("sm")]: {
      paddingTop:12,
      fontWeight:500
      //Не тому элементу 
    },
  }
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    position: "relative",
    color: "#0096C7",
    border: "none",
    fontSize: 16,
  },
}));

function ResumeCard({ posts, getSummary }) {
  useEffect(() => {
    getSummary(true);
  }, []);
  const classes = useStyles();
  const [time, setTime] = React.useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const [age, setAge] = React.useState(40);
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <Typography variant="h3" component="h3" className={classes.pageTitle}>
        Мы подобрали <span style={{ color: "#0096C7" }}>451 642</span> резюме
      </Typography>
      <Divider className={classes.divider} />
      <Grid container alignItems="center">
        <Grid item>
          <Typography
            variant="subtitle2"
            component="p"
            className={classes.pageSubtitle}
          >
            Резюме продавец консультант во Всей Украине
          </Typography>
        </Grid>
        <Grid item xs={12} >
          <FormControl>
            <Select
            
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={age}
              onChange={handleChangeAge}
              input={<BootstrapInput />}
              transformOrigin={{
                vertical: "center",
                horizontal: "right",
              }}
            >
              <MenuItem className={classes.menuItem} value={10}>За неделю</MenuItem>
              <MenuItem className={classes.menuItem} value={20}>За месяц</MenuItem>
              <MenuItem className={classes.menuItem} value={30}>За пол года</MenuItem>
              <MenuItem className={classes.menuItem} value={40}>За все время</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: 44 }}>
        <Grid item xs={12} sm={12} md={8}>
          {posts.length &&
            posts.map((item) => (
              <Post
                id={item.id}
                key={item.id}
                // mainPosition={c.position}
                fstName={item.first_name}
                years={item.birthday}
                // secondPosition={c.position}
                // thirdPosition={c.position}
                image={item.photo}
              ></Post>
            ))}
        </Grid>
        <Filters />
      </Grid>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      {/* </Row> */}
    </Container>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getSummary: getSummaryAction,
})(ResumeCard);
