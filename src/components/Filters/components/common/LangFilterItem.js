import React from "react";
// import './App.css';

import "../../../PostsList/ResumeCard.scss";

import { FormControlLabel, Grid, Checkbox, Radio } from "@material-ui/core";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function LangFilteritem({ langName, img }) {
  return (
    <Grid item xs={12}>
      <Grid container direction="row" alignItems="center">
        <Accordion style={{ boxShadow: "none", padding: 0 }}>
          <Grid item xs={12}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Grid container justifyContent="flex-start" alignItems="center">
                <Grid item xs={1}>
                  <FormControlLabel control={<Checkbox />} />
                </Grid>
                <Grid
                  item
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: 5,
                  }}
                >
                  <img
                    src={img}
                    width="20"
                    height="20"
                    style={{ marginRight: 8 }}
                  />
                </Grid>
                <Grid item xs={8}>
                  {langName}
                </Grid>
                <Grid item>603</Grid>
              </Grid>
            </AccordionSummary>
          </Grid>
            <Grid item xs={12}>
            <AccordionDetails>
              <Grid container justifyContent="flex-start" alignItems="center">
                <Grid item xs={1}>
                  <FormControlLabel
                    control={<Radio style={{ color: "#000046", marginRight:80 }} />}
                  />
                </Grid>
                <Grid item xs={9}>(А1) – начальный</Grid>
                <Grid imte>603</Grid>
              </Grid>
              <Grid container justifyContent="flex-start" alignItems="center">
                <Grid item xs={1}>
                  <FormControlLabel
                    control={<Radio style={{ color: "#000046", marginRight:80 }} />}
                  />
                </Grid>
                <Grid item xs={9}>(А2) – ниже среднего</Grid>
                <Grid imte>603</Grid>
              </Grid>
              <Grid container justifyContent="flex-start" alignItems="center">
                <Grid item xs={1}>
                  <FormControlLabel
                    control={<Radio style={{ color: "#000046", marginRight:80 }} />}
                  />
                </Grid>
                <Grid item xs={9}>(В1) – средний</Grid>
                <Grid imte>603</Grid>
              </Grid>
              <Grid container justifyContent="flex-start" alignItems="center">
                <Grid item xs={1}>
                  <FormControlLabel
                    control={<Radio style={{ color: "#000046", marginRight:80 }} />}
                  />
                </Grid>
                <Grid item xs={9}>(В2) – выше среднего</Grid>
                <Grid imte>603</Grid>
              </Grid>
              <Grid container justifyContent="flex-start" alignItems="center">
                <Grid item xs={1}>
                  <FormControlLabel
                    control={<Radio style={{ color: "#000046", marginRight:80 }} />}
                  />
                </Grid>
                <Grid item xs={9}>(C1) – продвинутый</Grid>
                <Grid imte>603</Grid>
              </Grid>
              <Grid container justifyContent="flex-start" alignItems="center">
                <Grid item xs={1}>
                  <FormControlLabel
                    control={<Radio style={{ color: "#000046", marginRight:80 }} />}
                  />
                </Grid>
                <Grid item xs={9}>(C2) – профессиональный уровень владения</Grid>
                <Grid imte>603</Grid>
              </Grid>
             
              
            </AccordionDetails>
            </Grid>
         
        </Accordion>
      </Grid>
    </Grid>
  );
}
