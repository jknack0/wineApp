import React, { useState } from "react";
import { Paper, makeStyles, IconButton, InputBase } from "@material-ui/core";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    },
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff8e1",

    position: "absolute",
    marginLeft: "50%",
    marginTop: "10%",
    transform: "translate(-50%, -50%)",

    flexGrow: 1,
    height: "160%"
  },

  card: {
    maxWidth: 400,
    marginTop: theme.spacing(45)
  },

  rootB: {
    display: "flex",
    position: "flex",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    width: "70%",
    flexGrow: 1
  },
  inputB: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));

const SearchFavorites = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const submitSearchField = event => {
    event.preventDefault();
    console.log("SEARCH PAGE" + searchTerm);
    console.log("submitSearchField");

    axios.post(`/wine/findPairing/${searchTerm}`).then(response => {
      console.log(response.data);
    });

    setSearchTerm("");
  };

  const handleSearchChange = event => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };
  return (
    <Paper
      onSubmit={submitSearchField}
      component="form"
      className={classes.rootB}
    >
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.inputB}
        placeholder="search wine or cheese"
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="KeyboardVoiceIcon"
      >
        <KeyboardVoiceIcon />
      </IconButton>
    </Paper>
  );
};
export default SearchFavorites;
