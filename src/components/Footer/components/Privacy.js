import { makeStyles } from "@material-ui/core/styles";
import { Grid, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footerLink: {
    color: "#fff",
    fontSize: 14,
  },
  navLinkContainer: {
    display: "flex",
    padding: "13px 33px",
    alignItems: "center",
  },
  horisontalDivider: {
    background: "#fff",
    height: 12,
    margin: "0px 30px",
    width: 1,
  },
  dNone: {
    background: "#fff",
    height: 12,
    margin: "0px 30px",
    width: 1,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  rights: {
    display: "flex",
    alignItems:'center',
    justifyContent:"flex-end",
    [theme.breakpoints.down("sm")]: {
      order: "1",
      justifyContent: "center",
    },
  },
}));

export default function Footer({ xs, sm, href = "#", icon }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} style={{marginTop:20}}>

        <Grid container justifyContent="center">
          <Grid item xs={4} sm={1}>
            <Link href="#" variant="subtitle2" className={classes.footerLink}>
              Privacy Policy
            </Link>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.rights} >
            <span className={classes.dNone} />
            <Link href="#" variant="subtitle2" className={classes.footerLink}>
              © 2021 All rights reserved
            </Link>
          </Grid>
          <Grid item sm={2} style={{display:"flex",alignItems:"center"}}>
            <span className={classes.dNone} />
            <Link href="#" variant="subtitle2" className={classes.footerLink}>
              Terms of Use
            </Link>
          </Grid>
        </Grid>
      
    </Grid>
  );
}
