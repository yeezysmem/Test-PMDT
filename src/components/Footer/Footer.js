import { Container, Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import footerBg from "../../static/images/footerBg.svg";
import { connect } from "react-redux";
import { getSummary as getSummaryAction } from "../../redux/modules/posts";
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
  },
  footerLink: {
    color: "#fff",
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
        <Grid container justifyContent="space-evenly">
          <Grid item>
            <Grid container direction="column">
              <FooterLink title="Другое" />
              <FooterLink title="Про Нас" />
              <FooterLink title="Блог" />
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <FooterLink
                href="https://pm-dt.com/"
                title="Сотрудничество с нами"
              />
              <FooterLink title="Реклама на сайте" />
              <FooterLink title="Партнерская программа" />
              <FooterLink title="Контакты" />
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="row" alignItems="center">
              <SocialLink icon={twitter} />
              <SocialLink icon={linkedin} />
              <SocialLink icon={facebook} />
              <SocialLink icon={instagram} />
              <SocialLink icon={youtube} />
              <SocialLink icon={whatsapp} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Container>
        <Privacy />
      </Container>
    </div>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getSummary: getSummaryAction,
})(Footer);
