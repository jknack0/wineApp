import React from "react";
import { makeStyles, Popper, Button, Fade, Paper, Grid, Typography } from "@material-ui/core";
import CheckBoxes from "./checkBoxes.js"

const useStyles = makeStyles(theme => ({
  root: {
   margin:"40%",
    width: theme.spacing(40),
    height: theme.spacing(4),
    marginTop: theme.spacing(-10),
    marginBottom: theme.spacing(5)
  },
  typography: {
    padding: theme.spacing(0)
  }
}));

const Filter = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();

  const handleClick = newPlacement => event => {
    setAnchorEl(event.currentTarget);
    setOpen(prev => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <div className={classes.root}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography className={classes.typography}>
                
                <CheckBoxes/>
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>

      <Grid container justify="center">
        <Grid item>
          <Button
            variant="contained"
             color="primary"
            borderRadius={30}
            style={{ backgroundColor: "#B92626" }}
            onClick={handleClick("bottom-end")}
          >
            Filter
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
export default Filter;