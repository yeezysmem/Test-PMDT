import React from "react";
// import './App.css';
import { connect } from "react-redux";
import "../../../ResumeCard/ResumeCard.scss";
import {
  getSummary as getSummaryAction,
} from "../../../../redux/modules/posts";
import { FormControlLabel, Grid,Checkbox,Radio } from "@material-ui/core";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";


function LangFilteritem({ langName, img }) {
  return (
    <Grid item xs={12}>
        {/* <Grid container justifyContent="space-around" alignItems="center"> */}
          <Grid container direction="row" alignItems="center">
            <Accordion style={{boxShadow:"none", padding:0}}>
              <AccordionSummary>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={img}
                        width="20"
                        height="20"
                        style={{ marginRight: 8 }}
                      />
                      {langName}
                    </div>
                  }
                />
              </AccordionSummary>
              <AccordionDetails>
                <FormControlLabel
                  control={<Radio />}
                  label="(А1) – начальный"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="(А2) – ниже среднего"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="(В1) – средний"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="(В2) – выше среднего"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="(C1) – продвинутый"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="(C2) – профессиональный уровень владения"
                />

              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          ></Grid>
        {/* </Grid> */}

    </Grid>
  );
}

export default connect(({ posts }) => ({ posts: posts.posts }), {
  getSummary: getSummaryAction,
})(LangFilteritem);
