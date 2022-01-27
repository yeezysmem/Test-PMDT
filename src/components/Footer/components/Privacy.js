import { makeStyles } from "@material-ui/core/styles";
import { Grid, Link } from "@material-ui/core";
import { connect } from "react-redux";
import { getSummary as getSummaryAction } from "../../../redux/modules/posts";

const useStyles = makeStyles((theme) => ({
  footerLink: {
    color: "#fff",
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

function Footer({ xs, sm, href = "#", icon }) {
  const classes = useStyles();
  return (
    <Grid container justify="space-between">
      <Grid className={classes.navLinkContainer} item>
        <Link href="#" variant="subtitle2" className={classes.footerLink}>
          Соискатель
        </Link>
        <span className={classes.horisontalDivider} />
        <Link href="#" variant="subtitle2" className={classes.footerLink}>
          Работодатель
        </Link>
        <span className={classes.horisontalDivider} />
        <Link href="#" variant="subtitle2" className={classes.footerLink}>
          HR
        </Link>
      </Grid>
    </Grid>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getSummary: getSummaryAction,
})(Footer);
