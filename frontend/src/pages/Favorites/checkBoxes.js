import React from "react";
import {
  Button, Grid, makeStyles, FormLabel, FormControl, FormGroup,
  FormControlLabel, FormHelperText, Checkbox
} from "@material-ui/core/";


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(7)
  },
  botton: {
    width: theme.spacing(20),
    height: theme.spacing(5)
  }
}));

const FilterBoxes = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    redWine: false,
    whiteWine: false,
    semiHard: false,
    semiSoft: false,
    hard: false,
    soft: false,
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const unckedAll = () => {
    setState({ state, ["redWine"]: true });
    setState({ state, ["whiteWine"]: true });
    setState({ state, ["semiHard"]: true });
    setState({ state, ["semiSoft"]: true });
    setState({ state, ["hard"]: true });
    setState({ state, ["soft"]: true });
  }

  const { redWine, whiteWine, semiHard, semiSoft, hard, soft } = state;
  const error =
    [redWine, whiteWine, semiHard, semiSoft, hard, soft].filter(v => v)
      .length !== 2;
  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Wine Types</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={redWine}
                onChange={handleChange}
                name="redWine"
              />
            }
            label="Red Wine"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={whiteWine}
                onChange={handleChange}
                name="whiteWine"
              />
            }
            label="White Wine"
          />
          <FormLabel component="legend">Cheese Types</FormLabel>

          <FormControlLabel
            control={
              <Checkbox
                checked={semiHard}
                onChange={handleChange}
                name="semiHard"
              />
            }
            label="Semi Hard"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={semiSoft}
                onChange={handleChange}
                name="semiSoft"
              />
            }
            label="Semi Soft"
          />
          <FormControlLabel
            control={
              <Checkbox checked={hard} onChange={handleChange} name="hard" />
            }
            label="Hard"
          />
          <FormControlLabel
            control={
              <Checkbox checked={soft} onChange={handleChange} name="soft" />
            }
            label="Soft"
          />
          <Button
            onClick={unckedAll}
            type="submit"
            align="left"
            color="primary"
            id="login"
          >
            select Everything
          </Button>
        </FormGroup>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{ justifyContent: "space-between", flexGrow: 1 }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            id="login"
            style={{ backgroundColor: "#B92626" }}
            onClick={unckedAll}
          >
            CANCEL
          </Button>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            id="login"
            style={{ left: "10%" }}
          >
            Apply
          </Button>
        </Grid>

        <FormHelperText></FormHelperText>
      </FormControl>
    </div>
  );
}
export default FilterBoxes;