import { makeStyles } from "@material-ui/core/styles";
import { Grid, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footerLink: {
    color: "#fff",
  },
}));

export default function SocialLink({ xs, sm, href = "#", icon }) {
  const classes = useStyles();
  return (
    <Grid item>
      <Grid container justifyContent="space-beetwen" alignItems="center">
        <Grid item>
          <Link href={href} className={classes.footerLink}>
            <img src={icon}></img>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

