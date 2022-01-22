import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Filters from "../Filters/Filters";
import { Typography } from "@material-ui/core";

import marker from "../../static/images/marker.svg";
import like from "../../static/images/like.svg";
import settings from "../../static/images/settings.svg";

const Post = ({ title, vacancy, image, updatedAt, category }) => (
  <Grid
    container
    alignItems="center"
    style={{
      border: "1px solid #EAEAEA",
      padding: "25px",
      marginBottom: "40px",
    }}
  >
    {/* <Row justify="space-between" align="middle"  className="ResumeCard__item"> */}
    <Grid item xs="3">
      <div style={{width:160, height:160, display:"flex"}}>
      <img
        src={image}
      ></img>
      </div>
    </Grid>
    <Grid item xs="7">
      <Typography variant="h4">{category}</Typography>
      <Typography variant="body1">{title}</Typography>
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="subtitle1">Обновлено 9 минут назад</Typography>
        </Grid>
        <Grid item style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#4CAF50",
              borderRadius: "100%",
              marginRight: 4,
            }}
          />
          <Typography variant="subtitle1" style={{ color: "#4CAF50" }}>
            Онлайн
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Typography>{vacancy}</Typography>
    </Grid>
    <Grid item>
      <div style={{width:46, height:46, border:"0.5px solid #EAEAEA", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer"}}>
        <img src={like}></img>
      </div>
    </Grid>
    <Grid item>
      <div style={{width:46, height:46, border:"0.5px solid #EAEAEA", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center",marginLeft:12, cursor:"pointer"}}>
        <img src={settings}></img>
      </div>
    </Grid>
    {/* </Row> */}
  </Grid>
);

export default Post;
