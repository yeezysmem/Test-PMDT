import {
  Button,
  Container,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import headerBg from "../../static/images/headerBg.svg";

import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import lang from "../../static/images/lang.svg";
import dropDown from "../../static/images/dropDown.svg";
import SearchIcon from "@mui/icons-material/Search";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import user from "../../static/images/user.svg";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundImage: `url(${headerBg})`,
    height: 230,
    backgroundSize: "cover",
    marginBottom: 70,
    [theme.breakpoints.down("sm")]: {
      height: 280,
    },
  },
  textField: {
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 8,
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize:"14px !important"
    },
  },
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
  btn: {
    backgroundColor: "#FFF9E4",
    color: "#000",
    padding: "14px 14px",
    borderRadius: 8,
    fontWeight: 600,

    "&:hover": {
      backgroundColor: "#FBC53C",
    },
  },
  navLink: {
    margin: 10,
    textDecoration: "none",
    color: "#EAEAEA",
    "&:hover": {
      color: "#fff",
    },
    [theme.breakpoints.down("sm")]: {
      fontWeight: 400,
      fontSize: 13,
      margin: "0px 10px",
    },
  },
  dNone: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  logIn: {
    margin: 10,
    textDecoration: "none",
    color: "#EAEAEA",
    "&:hover": {
      color: "#fff",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navLinkCurrent: {
    color: "#fff",
    fontWeight: 500,
    padding: "0 10px",
    [theme.breakpoints.down("sm")]: {
      fontWeight: 400,
      fontSize: 13,
    },
  },
  searchBarContainer: {
    paddingTop: 35,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
    },
  },
  navLinkContainer: {
    color: "#fff",
    display: "flex",
    padding: "13px 33px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "5px 15px",
      fontSize: 14,
    },
  },
  mobileLink: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
      marginRight:10
    },
  },
  linkContainer: {
    display: "flex",
    padding: "13px 33px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  horisontalDivider: {
    background: "#fff",
    height: 12,
    width: 1,
  },
  headerMobile: {
    [theme.breakpoints.down("sm")]: {
      flexFlow: "row-reverse",
    },
  },
  userName: {
    display: "none",
    marginBottom: 33,
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className={classes.headerMobile}
      >
        <Grid className={classes.linkContainer} item>
          <Link href="#" variant="subtitle2" className={classes.navLink}>
          Applicant
          </Link>
          <span className={classes.horisontalDivider} />
          <Link href="#" variant="subtitle2" className={classes.navLinkCurrent}>
          Employer
          </Link>
          <span className={classes.horisontalDivider} />
          <Link href="#" variant="subtitle2" className={classes.navLink}>
            HR
          </Link>
        </Grid>
        <Grid item className={classes.mobileLink}>
          <Link style={{ color: "#fff", marginRight: 10 }}>Соискателю </Link>
          <img src={dropDown} />
        </Grid>
        <Grid item className={classes.navLinkContainer}>
          <Grid container alignItems="center">
            <img src={lang} style={{ cursor: "pointer" }} />
            <Typography
              variant="subtitle2"
              style={{ fontSize: 14, cursor: "pointer" }}
              className={classes.navLink}
            >
              ENG
            </Typography>
            <img src={dropDown} style={{ cursor: "pointer" }} />
            <Link
              href="#"
              variant="subtitle2"
              style={{ paddingLeft: 10 }}
              className={classes.logIn}
            >
              Sign in
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" className={classes.userName}>
        <Grid item style={{ display: "flex", justifyContent: "center" }}>
          <img src={user} style={{ marginRight: 10 }} />
          <Typography style={{ color: "#fff", fontSize: 14, fontWeight: 500 }}>
          Yura Marchenko
          </Typography>
        </Grid>
      </Grid>
      <Container>
        <Grid
          container
          justifyContent="center"
          alignItems="flex-end"
          direction="row"
          spacing={2}
          className={classes.searchBarContainer}
        >
          <Grid item xs={12} sm={12} md={4}>
            <Input
              id="input-with-icon-adornment"
              fullWidth
              placeholder="What position are you looking for a candidate to fill?"
              className={classes.textField}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "#fff" }} />
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <Input
              id="input-with-icon-adornment"
              className={classes.textField}
              fullWidth
              placeholder="City"
              startAdornment={
                <InputAdornment position="start">
                  <RoomOutlinedIcon style={{ color: "#fff" }} />
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Button fullWidth className={classes.btn}>
            Find candidates
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
