import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

const WinePreference = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);

  console.log(checked);

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

  return (
    <List
      subheader={<ListSubheader>Wine Filters</ListSubheader>}
      className={classes.root}
    >
      <ListItem>
        <ListItemText id="switch-list-label-Red Wine" primary="Red Wine " />
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
    </List>
  );
};

export default WinePreference;