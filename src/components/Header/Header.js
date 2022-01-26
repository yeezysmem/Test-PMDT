import { Box, Button, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link, TextField } from "@material-ui/core";
import headerBg from "../../static/images/headerBg.svg";
import { connect } from "react-redux";
import {
  getSummary as getSummaryAction,
  deletePost as deletePostAction,
} from "../../redux/modules/posts";
import { spacing } from "@mui/system";
import lang from "../../static/images/lang.svg";
import dropDown from "../../static/images/dropDown.svg";

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
    padding: "14px 20px",
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
    },
  },
  navLinkCurrent: {
    color: "#fff",
    fontWeight: 500,
    padding:"0 10px",
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
    display: "flex",
    padding: "13px 33px",
    alignItems: "center",
  },
  horisontalDivider: {
    background: "#fff",
    height: 12,
    width: 1,
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid className={classes.navLinkContainer} item>
          <Link href="#" variant="subtitle2" className={classes.navLink}>
            Соискатель
          </Link>
          <span className={classes.horisontalDivider} />
          <Link href="#" variant="subtitle2" className={classes.navLinkCurrent}>
            Работодатель
          </Link>
          <span className={classes.horisontalDivider} />
          <Link href="#" variant="subtitle2" className={classes.navLink}>
            HR
          </Link>
        </Grid>
        {/* <Grid item style={{ padding: "13px 33px" }}>
          <Grid container alignItems="center">
            <img src={lang} style={{cursor:"pointer"}} />
            <typography variant="subtitle2" style={{fontSize:14, cursor:"pointer"}} className={classes.navLink}>
              RU
            </typography>
            <img src={dropDown} style={{cursor:"pointer"}}/>
            <Link href="#" variant="subtitle2" style={{paddingLeft:10}} className={classes.navLink}>
              Войти
            </Link>
          </Grid>
        </Grid> */}
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
          <Grid item xs={12} sm={4}>
            <TextField
              placeholder="На какую должность вы ищете кандидата?"
              fullWidth
              variant="standard"
              maxRows={4}
              className={classes.textField}
              InputProps={{ classes }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              maxRows={4}
              className={classes.textField}
              placeholder="Город"
              variant="standard"
              InputProps={{ classes }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button fullWidth className={classes.btn}>
              Найти кандидатов
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getSummary: getSummaryAction,
})(Header);
