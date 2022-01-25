import React, { useEffect, useState } from "react";
// import './App.css';
import { connect } from "react-redux";
import "../../ResumeCard/ResumeCard.scss";
import {
  getSummary as getSummaryAction,
  deletePost as deletePostAction,
} from "../../../redux/modules/posts";
import Post from "../../Post";
import { Container, Grid } from "@material-ui/core";
import {
  Typography,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Radio,
  Switch,
  Divider,
} from "@material-ui/core";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

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
