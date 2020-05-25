//import userStore from "../../redux/userStore"; // depreciate redux import
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";

import { SnackbarProvider, useSnackbar } from "notistack";// npm i notistack
import React, { useState, useEffect } from 'react'
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  Button: {
    marginLeft: theme.spacing(10)
  }
}));



const CheesePreference = () => {
  let user = JSON.parse(window.sessionStorage.getItem('user'))
  sessionStorage.setItem('hard', user.preferred_cheeses.Hard);
  sessionStorage.setItem('soft', user.preferred_cheeses.Soft);
  sessionStorage.setItem('semi-soft', user.preferred_cheeses['Semi-Soft']);
  sessionStorage.setItem('semi-hard', user.preferred_cheeses['Semi-Hard']);
  sessionStorage.setItem("red", user.preferred_wines.Red)
  sessionStorage.setItem("white", user.preferred_wines.White)

  const { enqueueSnackbar } = useSnackbar();

  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);

  useEffect(() => {

    const newChecked = [...checked];
    if (sessionStorage.getItem("hard") === "true") {
      newChecked.push("Hard");
      setChecked(newChecked);
    }
    if (sessionStorage.getItem("soft") === "true") {
      newChecked.push("Soft");
      setChecked(newChecked);
    }
    if (sessionStorage.getItem("semi-soft") === "true") {
      newChecked.push("Semi-Soft");
      setChecked(newChecked);
    }
    if (sessionStorage.getItem("semi-hard") === "true") {
      newChecked.push("Semi-Hard");
      setChecked(newChecked);
    }
    if (sessionStorage.getItem("red") === "true") {
      newChecked.push("Red-Wine");
      setChecked(newChecked);
    }
    if (sessionStorage.getItem("white") === "true") {
      newChecked.push("White-Wine");
      setChecked(newChecked);
    }

   
  },[])

  const userPref = {
    username: sessionStorage.getItem("username"),
    preferred_cheeses: {
      Hard: checked.includes("Hard"),
      'Semi-Hard': checked.includes("Semi-Hard"),
      'Semi-Soft': checked.includes("Semi-Soft"),
      Soft: checked.includes("Soft"),
    },
    preferred_wines: {
      Red: checked.includes("Red-Wine"),
      White: checked.includes("White-Wine")
    }
  };

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

const [data, setData]= useState("")
  const handleUpdatePref = event => {
    event.preventDefault();

    axios
      .post("/users/updateUserPreferences", userPref)
      .then(response => {
        console.log(response.data);

        setData(response.data)
        enqueueSnackbar("Wine/Cheese preferences updated!", { 
          variant: 'success' 
        });
      })
      .catch(error => {
        enqueueSnackbar("Error updating Wine/Cheese preferences", { 
          variant: 'error' 
        });

        console.log(error);
      });
  };

  useEffect(() => {

    axios.post("/users/refresh/", {
      id: parseInt(sessionStorage.getItem('userId'))
    }
    )
      .then(response => {
 
        sessionStorage.setItem('hard', response.data.preferred_cheeses.Hard);
        sessionStorage.setItem('soft', response.data.preferred_cheeses.Soft);
        sessionStorage.setItem('semi-soft', response.data.preferred_cheeses['Semi-Soft']);
        sessionStorage.setItem('semi-hard', response.data.preferred_cheeses['Semi-Hard']);
        sessionStorage.setItem("red", response.data.preferred_wines.Red)
        sessionStorage.setItem("white", response.data.preferred_wines.White)
        

        
        console.log("userStore inside cheese userEfect ")
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [data])

  return (
    <List className={classes.root}>
      <ListSubheader>Wine Filters</ListSubheader>
      <ListItem>
        <ListItemText id="switch-list-label-Red-Wine" primary="Red Wine " />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            onChange={handleToggle("Red-Wine")}
            checked={checked.indexOf("Red-Wine") !== -1}
            inputProps={{ "aria-labelledby": "switch-list-label-Red-Wine" }}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText id="switch-list-label-White-Wine" primary="White Wine" />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            onChange={handleToggle("White-Wine")}
            checked={checked.indexOf("White-Wine") !== -1}
            inputProps={{ "aria-labelledby": "switch-list-label-White-Wine" }}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <ListSubheader>Chesse Filters</ListSubheader>
      <ListItem>
        <ListItemText id="switch-list-label-Semi-Hard" primary="Semi-Hard " />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            onChange={handleToggle("Semi-Hard")}
            checked={checked.indexOf("Semi-Hard") !== -1}
            inputProps={{ "aria-labelledby": "switch-list-label-Semi-Hard" }}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText id="switch-list-label-Semi-Soft" primary="Semi-Soft" />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            onChange={handleToggle("Semi-Soft")}
            checked={checked.indexOf("Semi-Soft") !== -1}
            inputProps={{ "aria-labelledby": "switch-list-label-Semi-Soft" }}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText id="switch-list-label-Hard" primary="Hard" />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            onChange={handleToggle("Hard")}
            checked={checked.indexOf("Hard") !== -1}
            inputProps={{ "aria-labelledby": "switch-list-label-Hard" }}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemText id="switch-list-label-Soft" primary="Soft" />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            onChange={handleToggle("Soft")}
            checked={checked.indexOf("Soft") !== -1}
            inputProps={{ "aria-labelledby": "switch-list-label-Soft" }}
          />
        </ListItemSecondaryAction>
      </ListItem>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        id="pref"
        style={{ backgroundColor: "#B92626" }}
        onClick={handleUpdatePref}
      >
        save
      </Button>
    </List>
  );
};

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',

    }} maxSnack={1}>
      <CheesePreference />
    </SnackbarProvider>
  );
}