/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Typography, Grid } from "@material-ui/core";
import { Helmet } from "react-helmet";
import axios from 'axios'
import history from '../../History'
import { Link } from 'react-router-dom'
import userStore from '../../redux/userStore'


const useStyles = makeStyles(theme => ({
  paper: {
    flexGrow: 1,
    width: "100%",
    height: "100%",
  },
  title: {
    paddingTop: '40px',
    paddingBottom: '40px',
    textAlign: "center",
    fontSize: 28,
    flexGrow: 1,
    
  },

  form: {
    width: '80%',
    margin: '0 auto'
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const Account2 = (data) => {
  const classes = useStyles()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const userFirstName = data.location.state.firstName
  const userLastName = data.location.state.lastName
  const birthday = data.location.state.birthday

  const handleRegisterSubmit = (event) => {
    event.preventDefault()
    const newAccount = {
      firstName: userFirstName,
      lastName: userLastName,
      age: birthday,
      username: username,
      password: password,
      email: email
    }

    axios.post('/users/create_user', newAccount)
      .then(response => {
        console.log(response.data)
        userStore.dispatch({
          type: 'LOGIN_USER',
          data: response.data
        })

        
        window.sessionStorage.setItem('user',JSON.stringify(response.data))
        history.push('/searchbar')
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <Grid overflow="scroll" margin="auto" component="main" maxWidth="sm">
      <Helmet bodyAttributes={{ style: "background-color : #fff8e1" }} />
      <Typography className={classes.title} textcomponent="h1" variant="h5">
        Create Account
      </Typography>
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={handleRegisterSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id='username'
                label="Username"
                type="tex"
                value={username}
                onChange={e => setUsername(e.target.value)}
                style={{ backgroundColor: "white" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id='email'
                label="Email"
                type="tex"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ backgroundColor: "white" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Password"
                type="password"
                id='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{ backgroundColor: "white" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id='confirmPassword'
                label="ConfirmPassword"
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                style={{ backgroundColor: "white" }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                id="createAccount"
                style={{ backgroundColor: "#B92626" }}
              >
                Create Account
              </Button>
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              style={{ justifyContent: "space-between", flexGrow: 1 }}
              xs={12}
            >
              <Button href="/createaccount" color="primary">
                Go Back
              </Button>
              <Link to='/searchbar'>
                <Button float="right" href="/Account" color="primary">
                  See how it works
              </Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Grid>
  )
}

export default Account2
