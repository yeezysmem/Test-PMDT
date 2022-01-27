import React, { useEffect, useState } from "react";
// import './App.css';
import { makeStyles } from "@material-ui/core/styles";
import { connect, useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Filters from "../Filters/Filters";
import "./ResumeCard.scss";
import { getSummary } from "../../redux/modules/posts";
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
import Pagination from "../Pagination/Pagination";

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
  pageSubtitle: {
    marginRight: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      marginRight: 0,
    },
  },
  menuItem: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: 12,
      fontWeight: 500,
      //Не тому элементу
    },
  },
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    position: "relative",
    color: "#0096C7",
    border: "none",
    fontSize: 16,
  },
}));

export default function ResumeCard() {
  

  const classes = useStyles();
  const [time, setTime] = React.useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };
  // const handleClick = (event) => {
  //   getSummar
  // }
  // const [loading, setLoading] = useState(false);





  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  console.log("posts",posts);
  const current_page = useSelector((state) => state.posts.current_page);
  const total_count = useSelector((state) => state.posts.total_count);
  const perPage = useSelector((state) => state.posts.perPage);
  const next = useSelector((state) => state.posts.next);
  const previous = useSelector((state) => state.posts.previous)

  const pagesCount = Math.ceil(total_count / 10);
  const pages = [];

  const handleClickNext = () => {
    dispatch(getSummary({url: next, withPhotos: true}))
  }
  const handleClickPrev = () => {
    dispatch(getSummary({url: previous, withPhotos: true}))
  }




  useEffect(() => {
    dispatch(getSummary({withPhotos: true}));
  }, []);
  // useEffect(() => {
  //   getSummary(currentPage, perPage);
  // }, [currentPage]);
  

  // function searchHandler() {
  //   setCurrentPage(1)
  // }
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(10);

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const [currentPage, setCurrentPage] = useState(1);
  const [age, setAge] = React.useState(40);
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        <Grid item xs={12}>
          <FormControl>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={age}
              onChange={handleChangeAge}
              input={<BootstrapInput />}
            >
              <MenuItem className={classes.menuItem} value={10}>
                За неделю
              </MenuItem>
              <MenuItem className={classes.menuItem} value={20}>
                За месяц
              </MenuItem>
              <MenuItem className={classes.menuItem} value={30}>
                За пол года
              </MenuItem>
              <MenuItem className={classes.menuItem} value={40}>
                За все время
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: 44 }}>
        <Grid item xs={12} sm={12} md={8}>
          {posts.map((item) => (
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
        <button onClick={handleClickPrev}>Prev</button>
        <button onClick={handleClickNext}>Next</button>
      <Pagination
      totalPosts={total_count}
      paginate={(number) =>  dispatch(getSummary({current_page: number}))}
      
      />
      {/* </Row> */}
    </Container>
  );
}

