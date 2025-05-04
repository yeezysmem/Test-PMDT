import React, { useState } from "react";
import { Box, Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import {
  getSummary as getSummaryAction,
  deletePost as deletePostAction,
} from "../../redux/modules/posts";

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

const useStyles = makeStyles((theme) => ({
  avatarBox: {
    width: 160,
    height: 160,
    display: "flex",
    border: "1px solid #000",
    borderRadius: "100%",
    [theme.breakpoints.down("sm")]: {
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
    paddingBottom: 18,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      fontWeight: 600,
    },
  },
  cityBox: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 0,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      fontSize: 13,
    },
  },
  secondPosition: {
    paddingBottom: 20,
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
}));

function Post({
  id,
  fstName = "Имя",
  years,
  image,
  mainPosition,
  secondPosition,
  thirdPosition,
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container className={classes.cardContainer}>
      <Grid item>
        <Grid container>
          <Grid item xs={3} sm={4} md={3}>
            <div className={classes.avatarBox}>
              <img src={image}></img>
            </div>
          </Grid>
          <Grid item xs={9} sm={8}>
            <Grid container>
              <Grid item xs={12} sm={12} className={classes.secondPosition}>
                <Typography
                  variant="h4"
                  component="p"
                  className={classes.mainPosition}
                >
                  Продавец - консультант
                </Typography>
                <Grid container>
                  <Grid item xs={12} sm={4} md={3}>
                    <Typography variant="body1">
                      {fstName}, {absCurrentYears} лет
                    </Typography>
                  </Grid>
                  <Grid item xs={9} sm={5} md={4} className={classes.cityBox}>
                    <img src={marker}></img>
                    <span>Kyiv, Ukraine</span>
                  </Grid>
                </Grid>
                
              </Grid>
              
              <div className={classes.desktopContent}>
                <Typography variant="body2">
                  Координатор BALOX Agency - 4 мес.
                </Typography>
                <Typography variant="body2">
                  Координатор BALOX Agency - 4 мес.
                </Typography>

                <Grid container>
                  <Grid item xs={12} sm={8}>
                    <Grid container alignItems="center">
                      <Grid item xs={8} sm={8}>
                        <Typography variant="subtitle1">
                          updated {id} minutes ago
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
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
                    <Typography
                      variant="subtitle1"
                      style={{ color: "#4CAF50" }}
                    >
                      Онлайн
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} className={classes.mobileContent}>
            <Grid container>
              <Grid item xs={12} className={classes.secondPosition}>
                <Typography variant="body2">
                  Координатор BALOX Agency - 4 мес.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} className={classes.secondPosition}>
                <Typography variant="body2">
                  Координатор BALOX Agency - 4 мес.
                </Typography>
              </Grid>
              <Grid container >
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
                <Grid item xs={12} sm={8} md={9}>
                  <Grid container alignItems="center">
                    <Grid item xs={9} sm={8}>
                      <Typography variant="subtitle1">
                        updated {id} minutes ago
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                  <Grid container alignItems="center" justifyContent="flex-end">
                    <Grid item xs={6}>
                      <div
                        style={{
                          width: 46,
                          height: 46,
                          border: "0.5px solid #EAEAEA",
                          borderRadius: 8,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                      >
                        <Checkbox
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite />}
                          style={{ color: "#F42C3C" }}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <div
                        style={{
                          width: 46,
                          height: 46,
                          border: "0.5px solid #EAEAEA",
                          borderRadius: 8,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginLeft: 12,
                          cursor: "pointer",
                        }}
                      >
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
                              Пожаловаться
                            </MenuItem>
                            <MenuItem
                              style={{ padding: "10px 15px" }}
                              onClick={handleClose}
                            >
                              Скрыть кандидата
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

            {/* <Typography
              variant="h4"
              component="p"
              className={classes.mainPosition}
            >
              Продавец - консультант
            </Typography>
            <Grid
              container
              justifyContent="flex-start"
              style={{ paddingBottom: 15 }}
            >
              <Grid item xs={12} sm={4} md={3}>
                <Typography variant="body1">
                  {fstName}, {absCurrentYears} лет
                </Typography>
              </Grid>
              <Grid item xs={9} sm={5} md={4} className={classes.cityBox}>
                <img src={marker}></img>
                <span>Kyiv, Ukraine</span>
              </Grid> */}
            {/* <Grid container justifyContent="flex-end">
                <Grid item xs={12} sm={12} className={classes.secondPosition}>
                  <Typography variant="body2">
                    Координатор BALOX Agency - 4 мес.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} className={classes.secondPosition}>
                  <Typography variant="body2">
                    Координатор BALOX Agency - 4 мес.
                  </Typography>
                </Grid>
              </Grid> */}
            {/* <Grid
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
              <Grid item xs={12} sm={8}>
                <Grid container alignItems="center">
                  <Grid item xs={8} sm={8}>
                    <Typography variant="subtitle1">
                      updated {id} minutes ago
                    </Typography>
                  </Grid>
                </Grid>
              </Grid> */}
            {/* </Grid> */}
          </Grid>
        </Grid>

        {/* <Grid container alignItems="center" style={{ flexFlow: "row-reverse" }}>
          <Grid item sm={2}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    border: "0.5px solid #EAEAEA",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    style={{ color: "#F42C3C" }}
                  />
                </div>
              </Grid>
              <Grid item sm={2}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    border: "0.5px solid #EAEAEA",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: 12,
                    cursor: "pointer",
                  }}
                >
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
                        Пожаловаться
                      </MenuItem>
                      <MenuItem
                        style={{ padding: "10px 15px" }}
                        onClick={handleClose}
                      >
                        Скрыть кандидата
                      </MenuItem>
                    </div>
                  </Menu>
                </div>
              </Grid>
        </Grid> */}
      </Grid>
    </Grid>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getSummary: getSummaryAction,
})(Post);
