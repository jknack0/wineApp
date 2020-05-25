import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      width: theme.spacing(12),
      height: theme.spacing(12),
      margin: '0 auto',
      marginBottom: theme.spacing(3),
    }
  }
}));

const ImageAvatars = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar />
    </div>
  );
};
export default  ImageAvatars;