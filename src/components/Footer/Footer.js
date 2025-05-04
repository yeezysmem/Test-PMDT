import { Container, Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import footerBg from "../../static/images/footerBg.svg";
import FooterLink from "./components/FooterLink";
import SocialLink from "./components/SocialLink";
import Privacy from "./components/Privacy";
//icons
import twitter from "../../static/images/twitter.svg";
import linkedin from "../../static/images/linkedin.svg";
import facebook from "../../static/images/facebook.svg";
import instagram from "../../static/images/instagram.svg";
import youtube from "../../static/images/youtube.svg";
import whatsapp from "../../static/images/whatsapp.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundImage: `url(${footerBg})`,
    padding: "42px 0px",
    height: 333,
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      height: 446,
    },
    [theme.breakpoints.down("xs")]: {
      height: 646,
    },
  },
  footerLink: {
    color: "#fff",
  },
  footerContainer: {
    justifyContent: "space-evenly",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  mobileCenter: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop:40
    },
  }
}));

export default function Footer({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Container>
        <Grid
          container
          className={classes.footerContainer}
          style={{ paddingTop: 50 }}
        >
          <Grid item xs={8} sm={3}>
            <Grid container>
              <Grid item xs={12}>
                <Grid container direction="column" className={classes.mobileCenter}>
                  <FooterLink title="Other" />
                  <FooterLink title="About Us" />
                  <FooterLink title="Blog" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8} sm={3}>
            <Grid container>
              <Grid item xs={12}>
                <Grid container direction="column" className={classes.mobileCenter}>
                  <FooterLink
                    href="https://github.com/yeezysmem"
                    title="Cooperation with us"
                  />
                  <FooterLink title="Website advertising" />
                  <FooterLink title="Partnership Program" />
                  <FooterLink title="Contacts" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Grid container direction="row" alignItems="center" className={classes.mobileCenter}>
              <Grid item xs={12}>
                <Grid container justifyContent="space-evenly" alignItems="center">
                  <SocialLink icon={twitter} />
                  <SocialLink icon={linkedin} />
                  <SocialLink icon={facebook} />
                  <SocialLink icon={instagram} />
                  <SocialLink icon={youtube} />
                  <SocialLink icon={whatsapp} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Divider light variant="middle" style={{ background: "#EAEAEA", marginTop: 65 }} />
      <Container>
        <Grid container justifyContent="center">
          <Privacy />
        </Grid>
      </Container>
    </div>
  );
}
