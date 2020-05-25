import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    "& > *": {
      margin: theme.spacing(2),
      background: "#B92626",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 48,
      wdith: 80,
      padding: "0 50px"
    }
  }
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.button}>
      <Button> Get Started </Button>
    </div>
  );
}
