import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link } from "@material-ui/core";
import { connect } from "react-redux";
import {
  getSummary as getSummaryAction,
  deletePost as deletePostAction,
} from "../../../redux/modules/posts";

const useStyles = makeStyles((theme) => ({
  footerLink: {
    color: "#fff",
  },
}));

function FooterLink({ xs, sm, title, href="#" }) {
  const classes = useStyles();
  return (
    <Grid item xs={xs} sm={sm}>
      <Link href={href} className={classes.footerLink}>
        {title}
      </Link>
    </Grid>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getSummary: getSummaryAction,
})(FooterLink);
