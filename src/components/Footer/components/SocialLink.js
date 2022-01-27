import { makeStyles } from "@material-ui/core/styles";
import { Grid, Link } from "@material-ui/core";
import { connect } from "react-redux";
import {
  getSummary as getSummaryAction,
} from "../../../redux/modules/posts";

const useStyles = makeStyles((theme) => ({
  footerLink: {
    color: "#fff",
  },
  
}));

function SocialLink({ xs, sm, href="#", icon }) {
  const classes = useStyles();
  return (
    <Grid item xs={xs} sm={sm}>
      <Link href={href} className={classes.footerLink}>
        <img src={icon}></img>
      </Link>
    </Grid>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getSummary: getSummaryAction,
})(SocialLink);
