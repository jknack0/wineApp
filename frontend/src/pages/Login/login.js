import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container
} from '@material-ui/core'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import history from '../../History'
import userStore from '../../redux/userStore'

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    flexGrow: 1,
    width: '80%'
  },
  title: {
    position: 'absolute',
    left: '50%',
    top: '10%',
    transform: 'translate(-50%, -50%)',
    fontSize: 28,
    flexGrow: 1
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(8)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const LogIn = () => {
  const classes = useStyles()
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    const loginInformation = {
      username: userEmail,
      password: userPassword
    }

    axios.post('/users/login', loginInformation)
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
    <Container margin="auto" component="main" maxWidth="sm">
      <Helmet bodyAttributes={{ style: 'background-color : #fff8e1' }} />

      <Typography className={classes.title} textcomponent="h1" variant="h5">
        Log In
      </Typography>
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={handleLogin}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="email"
                type="text"
                autoComplete="email"
                value={userEmail}
                onChange={e => setUserEmail(e.target.value)}
                style={{ backgroundColor: 'white' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={userPassword}
                onChange={e => setUserPassword(e.target.value)}
                style={{ backgroundColor: 'white' }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                id="login"
                style={{ backgroundColor: '#B92626' }}
              >
                Log In
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                href="/createaccount"
                type="submit"
                fullWidth
                variant="contained"
                id="login"
                style={{ backgroundColor: 'white' }}
              >
                Create an Account
              </Button>
            </Grid>
            <Grid
              container
              direction="column-reverse"
              justify="space-between"
              alignItems="flex-end"
            >
              <Button href="/searchbar" color="primary">
                See how it works
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default LogIn
