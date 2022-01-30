import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import arrowRight from "../../static/images/arrowRight.svg";
import arrowLeft from "../../static/images/arrowLeft.svg";
import { useDispatch, useSelector } from "react-redux";
import { getSummary } from "../../redux/modules/posts";

const useStyles = makeStyles((theme) => ({
  pagination: {
    padding: 5,
    color: "#ADADAD",
    "&:hover": {
      color: "#000046",
    },
  },
}));

const PaginationMy = ({ totalPosts, paginate }) => {
  const pageNumbers = [];
  const classes = useStyles();
  const dispatch = useDispatch();

  const next = useSelector((state) => state.posts.next);
  const previous = useSelector((state) => state.posts.previous);
  const handleClickNext = () => {
    dispatch(getSummary({ url: next, withPhotos: true }));
  };
  const handleClickPrev = () => {
    dispatch(getSummary({ url: previous, withPhotos: true }));
  };

  for (let i = 1; i <= Math.ceil(totalPosts / 10); i++) {
    pageNumbers.push(i);
  }

  return (
    <Grid item style={{marginBottom:20}}>
      <nav>
        <ul style={{ display: "flex", alignItems: "center" }}>
          <img src={arrowLeft} onClick={handleClickPrev} style={{cursor:"pointer"}}/>
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href="!#"
                className={classes.pagination}
              >
                {number}
              </a>
            </li>
          ))}

          <img src={arrowRight} onClick={handleClickNext} style={{ paddingBottom: 1, cursor:"pointer" }} />
        </ul>
      </nav>
    </Grid>
  );
};

export default PaginationMy;
