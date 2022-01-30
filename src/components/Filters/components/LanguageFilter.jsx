import React from "react";
// import './App.css';
import { connect } from "react-redux";
import "../../PostsList/ResumeCard.scss";
import {
  getSummary as getSummaryAction,
} from "../../../redux/modules/posts";
import {
  Typography,
  Container, 
  Grid,
  Divider,
} from "@material-ui/core";

import uk from "../../../static/images/uk.svg";
import ru from "../../../static/images/ru.svg";
import ge from "../../../static/images/ge.svg";
import ps from "../../../static/images/ps.svg";
import po from "../../../static/images/po.svg";
import ua from "../../../static/images/ua.svg"

import LangFilterItem from "./common/LangFilterItem";

function LanguageFilter() {
  return (
    <Grid item xs={12}  style={{marginBottom:55}}>
      <Container>
        <Typography variant="h5" component="h5" style={{marginBottom:12}}>
          Владение языками
        </Typography>
        <Divider light />
        <LangFilterItem langName="Английский" img={uk} />
        <LangFilterItem langName="Русский" img={ru} />
        <LangFilterItem langName="Украинский" img={ua} />
        <LangFilterItem langName="Немецкий" img={ge} />
        <LangFilterItem langName="Польский" img={po} />
        <LangFilterItem langName="Испанский" img={ps} />
      </Container>
    </Grid>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getSummary: getSummaryAction,
})(LanguageFilter);
