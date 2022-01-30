import { makeStyles } from "@material-ui/core/styles";
import { Grid, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footerLink: {
    color: "#fff",
    fontSize:14,
    "&:hover": {
      fontWeight:600,
      textDecoration:"none"
    }
  },
  
}));

export default function FooterLink({ xs, sm, title, href="#" }) {
  const classes = useStyles();
  return (
    <Grid item xs={xs} sm={sm}>
      <Link href={href} className={classes.footerLink}>
        {title}
      </Link>
    </Grid>
  );
}

