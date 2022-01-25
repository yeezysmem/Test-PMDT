import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link } from "@material-ui/core";
import footerBg from "../../static/images/footerBg.svg";
import { connect } from "react-redux";
import {
  getSummary as getSummaryAction,
  deletePost as deletePostAction,
} from "../../redux/modules/posts";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundImage: `url(${footerBg})`,
    height: 333,
    backgroundSize: "cover",
  },
  //   subCatItem: {
  //     "&::after": {
  //       content: " ' ' ",
  //       width: 7,
  //       height: 26,
  //       backgroundImage: `url(${triangle})`,
  //       backgroundPosition: "center",
  //       backgroundRepeat: "no-repeat",
  //       position: "absolute",
  //       left: 0,
  //     },
  //   },
}));

function Footer({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Container>
        <Grid container direction="column">
          <Grid item xs="4">
          <Grid container>
            
          </Grid>
          
          </Grid>
        </Grid>
        <Grid container direction="column">
            <Grid item>
              <Link href="#" variant="subtitle2" color="white">
                Сотрудничество с нами
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="subtitle2" color="white">
                Реклама на сайте
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="subtitle2" color="white">
                Партнерская программа
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="subtitle2" color="white">
                Контакты
              </Link>
            </Grid>
          </Grid>
      </Container>
    </div>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getSummary: getSummaryAction,
})(Footer);
