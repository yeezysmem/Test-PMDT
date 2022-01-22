import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const useStyles = makeStyles((theme) => ({
  root: (props) => {
    return {
      color: theme.palette[props.color].main
    };
  }
}));

function MyToggleButton(props) {
  const { color, ...other } = props;
  const classes = useStyles({ color });
  return <ToggleButton classes={classes} {...other} />;
}

export default function CustomColorToggle() {
  const [color, setColor] = React.useState("primary");
  const handleColor = (e, value) => setColor(value);
  return (
    <ToggleButtonGroup
      onChange={handleColor}
      value={color}
      exclusive
      aria-label="text alignment"
    >
      <MyToggleButton color="primary" value="primary">
        Primary
      </MyToggleButton>
      <MyToggleButton color="secondary" value="secondary">
        Secondary
      </MyToggleButton>
    </ToggleButtonGroup>
  );
}
