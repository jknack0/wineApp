import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Grid,
  Typography,
} from "@material-ui/core";
//import { Redirect } from "react-router-dom";

import history from '../../History'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    overflowX: 'hidden', 
    overFlowY: 'hidden',
    height: '100vh',
    width: '100vw',
    margin: 0,
    backgroundColor: '#fff8e1',
  },
  paper: {
    padding: '30px'
  },

  form: {
    marginTop: '40px'
  },
  title: {
  
    paddingBottom: '40px',
    textAlign: "center",
    fontSize: 28,
    flexGrow: 1,
  },

  submit: {
    margin: theme.spacing(3, 0, 2)
  },

  birthdayTextField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Account = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState('')
  // const [isUserLoggedIn, setUserIsLoggedIn] = useState(false);

  const handlePageChange = () => {
    history.push({
      pathname: '/createaccount2', 
      state: {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday
      }
    })
  }
  
  return (
    <div className={classes.root}>
      
      <div className={classes.form}>
         <Typography className={classes.title} textcomponent="h1" variant="h5">
        Create Account
      </Typography>
      </div>
     
      <div className={classes.paper}>
        <form onSubmit={handlePageChange}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="firstname"
                label="First Name"
                name="email"
                type="text"
                autoComplete="email"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                style={{ backgroundColor: "white" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Last Name"
                type="text"
                id="lastname"
                autoComplete="current-password"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                style={{ backgroundColor: "white" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="date"
                label="Birthday"
                type = "date"
                value={birthday}
                className = {classes.birthdayTextField}
                InputLabelProps = {{
                  shrink: true
                }}
                onChange={e => setBirthday(e.target.value)}
              />
            </Grid>
            
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                id="next"
                style={{ backgroundColor: "#B92626" }}
              >
                Next
              </Button>
            </Grid>
            <Grid
              container
              direction="column-reverse"
              justify="space-between"
              alignItems="flex-end" item xs={12} >
              <Link to='/searchbar'>
                <Button color="primary">
                  See how it works
                </Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default Account;
