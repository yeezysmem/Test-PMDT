import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import {
  Typography,
  Checkbox,
  MenuItem,
  Menu,
  Select,
} from "@material-ui/core";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import marker from "../../static/images/marker.svg";
import settings from "../../static/images/settings.svg";
import { differenceInYears } from "date-fns/esm";
import { makeStyles } from "@material-ui/core/styles";
import PostItem from './PostItem';
import PostPositions from "./PostPositoins";

const useStyles = makeStyles((theme) => ({
  avatarBox: {
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    width: 160,
    height: 160,
    display: "flex",
    border: "1px solid #000",
    borderRadius: "100%",
    [theme.breakpoints.down("sm")]: {
      width: 100,
      height: 100,
      marginBottom: 10,
    },
    [theme.breakpoints.down("xs")]: {
      width: 70,
      height: 70,
    },
  },
  cardContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    border: "1px solid #EAEAEA",
    padding: "25px",
    marginBottom: "40px",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
      padding: "17px",
    },
  },
  mainPosition: {
    cursor: "pointer",
    paddingBottom: 14,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      fontWeight: 600,
      paddingBottom: 6,
    },
  },
  cityBox: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 20,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      fontSize: 13,
      paddingTop: 6,
    },
  },
  secondPosition: {
    paddingBottom: 20,
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 12,
    },
  },
  desktopContent: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobileContent: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  markerIcon: {
    marginRight: 10,
    [theme.breakpoints.down("sm")]: {
      marginRight: 12,
    },
  },
  favourite: {
    width: 46,
    height: 46,
    border: "0.5px solid #EAEAEA",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      border: "none",
      width: 36,
      height: 36,
    },
  },
  settings: {
    width: 46,
    height: 46,
    border: "0.5px solid #EAEAEA",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      border: "none",
      width: 26,
      height: 36,
    },
  },
  cardBtns: {
    paddingTop: 70,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function Post({
  id,
  fstName = "Имя",
  years,
  image,
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // Получаем только год рождения кандидата //
  const date = new Date(years);
  const formattedDate = date.toLocaleDateString("en-GB", {
    year: "numeric",
  });

  //Считаем разницу между годом рождения кандидата и текущим годом //
  const currentYears = differenceInYears(
    new Date(2022),
    new Date(formattedDate)
  );

  //Получаем только позитивные числа //
  const absCurrentYears = Math.abs(currentYears);

  const posts = useSelector((state) => state.posts.posts);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  

 
  return (
    <Grid container className={classes.cardContainer}>
      <Grid item>
        <Grid container justifyContent="space-between">
          <Grid item xs={3} sm={2} md={2}>
            <div className={classes.avatarBox}>
              <img style={{ width: "100%", height: "auto" }} src={image}></img>
            </div>
          </Grid>
          <Grid item xs={9} sm={9} md={7}>
            <Grid container>
              <Grid item xs={12} sm={12} className={classes.secondPosition}>
                 
                  <PostItem  />
                 
                <Grid container>
                  <Grid item xs={12} sm={4} md={4}>
                    <Typography variant="body1">
                      {fstName}, {absCurrentYears} years
                    </Typography>
                  </Grid>
                  <Grid item xs={9} sm={5} md={6} className={classes.cityBox}>
                    <img className={classes.markerIcon} src={marker}></img>
                    <span>Kyiv, Ukraine</span>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} className={classes.desktopContent}>
                <Grid container>
                <PostPositions />
                </Grid>

                <Grid container justifyContent="flex-start">
                  <Grid item xs={12} sm={7}>
                    <Grid container justifyContent="flex-start" alignItems="center">
                      <Grid item xs={8} sm={9}>
                        <Typography variant="subtitle1">
                          updated {id} minutes ago
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={3}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#4CAF50",
                        borderRadius: "100%",
                        marginRight: 4,
                      }}
                    />
                    <Typography
                      variant="subtitle1"
                      style={{ color: "#4CAF50" }}
                    >
                      Online
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.cardBtns}>
            <Grid container alignItems="center" justifyContent="center">
              <Grid item xs={6}>
                <div className={classes.favourite}>
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    style={{ color: "#F42C3C" }}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.settings}>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <img src={settings} />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <div
                      style={{
                        border: "0.5px solid #eaeaea",
                        borderRadius: 12,
                        marginRight: 10,
                      }}
                    >
                      <MenuItem
                        style={{ padding: "10px 15px" }}
                        onClick={handleClose}
                      >
                        Report
                      </MenuItem>
                      <MenuItem
                        style={{ padding: "10px 15px" }}
                        onClick={handleClose}
                      >
                        Hide candidat
                      </MenuItem>
                    </div>
                  </Menu>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} className={classes.mobileContent}>
            <Grid container>
              <Grid
                item
                xs={12}
                className={classes.secondPosition}
                style={{ paddingBottom: 12 }}
              >
               <PostPositions />
              </Grid>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      backgroundColor: "#4CAF50",
                      borderRadius: "100%",
                      marginRight: 4,
                    }}
                  />
                  <Typography variant="subtitle1" style={{ color: "#4CAF50" }}>
                    Онлайн
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                  <Grid container alignItems="center">
                    <Grid item xs={9} sm={9} md={8}>
                      <Typography variant="subtitle1">
                        updated {id} minutes ago
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="flex-end"
                      >
                        <Grid item xs={6}>
                          <div className={classes.favourite}>
                            <Checkbox
                              icon={<FavoriteBorder />}
                              checkedIcon={<Favorite />}
                              style={{ color: "#F42C3C" }}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={6}>
                          <div className={classes.settings}>
                            <Button
                              id="basic-button"
                              aria-controls={open ? "basic-menu" : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? "true" : undefined}
                              onClick={handleClick}
                            >
                              <img src={settings} />
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                              }}
                            >
                              <div
                                style={{
                                  border: "0.5px solid #eaeaea",
                                  borderRadius: 12,
                                  marginRight: 10,
                                }}
                              >
                                <MenuItem
                                  style={{ padding: "10px 15px" }}
                                  onClick={handleClose}
                                >
                                  Report
                                </MenuItem>
                                <MenuItem
                                  style={{ padding: "10px 15px" }}
                                  onClick={handleClose}
                                >
                                  Hide candidat
                                </MenuItem>
                              </div>
                            </Menu>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
