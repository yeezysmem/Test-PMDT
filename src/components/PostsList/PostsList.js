import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Filters from "../Filters/Filters";
import "./ResumeCard.scss";
import { getSummary } from "../../redux/modules/posts";
import Post from "../Post/Post";

import modalIcon from "../../static/images/modalIcon.svg";
import closeIcon from "../../static/images/closeIcon.svg";

import {
  Grid,
  Container,
  Typography,
  Divider,
  Link,
  Select,
  MenuItem,
  Box,
  FormControl,
  Modal,
} from "@material-ui/core";
import PaginationMy from "../Pagination/PaginationMy";
import InputBase from "@mui/material/InputBase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 375,
  height: "100vh",
  overflowY: "auto",
  bgcolor: "background.paper",
};

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
  dNone: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  menuItem: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: 12,
      fontWeight: 500,
      //Не тому элементу
    },
  },
  filters: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuItemBox: {
    [theme.breakpoints.down("sm")]: {
      marginTop: 10,
    },
  },
  openFilters: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
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

export default function ResumeCard(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  console.log("posts", posts);
  const total_count = useSelector((state) => state.posts.total_count);

  useEffect(() => {
    dispatch(getSummary({ withPhotos: true }));
  }, []);

  const [age, setAge] = React.useState(40);
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };


  return (
    <Container>
      <Typography variant="h3" component="h3" className={classes.pageTitle}>
      We've selected <span style={{ color: "#0096C7" }}>451 642</span> resumes
      </Typography>
      <Divider className={classes.divider} />
      <Grid container alignItems="center">
        <Grid item xs={10} sm={12} md={5}>
          <Typography
            variant="subtitle2"
            component="p"
            className={classes.pageSubtitle}
          >
            Resume sales consultant in All Ukraine
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={2} className={classes.menuItemBox}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={10} sm={6}>
              <FormControl>
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  value={age}
                  onChange={handleChangeAge}
                  input={<BootstrapInput />}
                >
                  <MenuItem className={classes.menuItem} value={10}>
                  In a week
                  </MenuItem>
                  <MenuItem className={classes.menuItem} value={20}>
                  In a month
                  </MenuItem>
                  <MenuItem className={classes.menuItem} value={30}>
                  In six months
                  </MenuItem>
                  <MenuItem className={classes.menuItem} value={40}>
                  In all that time.
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2} sm={1} className={classes.openFilters}>
              <div>
                <div
                  onClick={handleOpen}
                  style={{
                    width: 48,
                    height: 48,
                    background: "#F4F6FC",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 8,
                  }}
                >
                  <img src={modalIcon}></img>
                </div>
                <Modal open={open} onClose={handleClose}>
                  <Box sx={style}>
                    <div
                      onClick={handleClose}
                      style={{
                        width: 48,
                        height: 48,
                        background: "#fff",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 8,
                        boxShadow: "0px 0px 8px rgba(13, 74, 145, 0.15)",
                        float: "right",
                        margin: "30px 20px",
                      }}
                    >
                      <img src={closeIcon}></img>
                    </div>
                    <Filters />
                  </Box>
                </Modal>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: 44 }}>
        <Grid item xs={12} sm={12} md={8}>
        {posts.map((item, i) =>
            
                <Post
                  id={item.id}
                  key={item.id}
                  fstName={item.first_name}
                  years={item.birthday}
                  image={item.photo}
                ></Post>
             
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={4} className={classes.dNone}>
          <Filters className={classes.filters} />
        </Grid>
      </Grid>
      <Grid container alignItems="center">
      
        <PaginationMy
          totalPosts={total_count}
          paginate={(number) => dispatch(getSummary({ current_page: number }))}
        />

      </Grid>

    </Container>
  );
}
