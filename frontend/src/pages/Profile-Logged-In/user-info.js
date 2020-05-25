import CreateIcon from "@material-ui/icons/Create";
//import userStore from "../../redux/userStore"; // depreciate redux import

import clsx from "clsx"; // npm install --save clsx
import axios from "axios";
import ListSubheader from "@material-ui/core/ListSubheader";
import React, { useState, useEffect } from 'react'
import { SnackbarProvider, useSnackbar } from "notistack"; //npm i notistack

import {
  makeStyles,
  OutlinedInput,
  InputLabel,
  InputAdornment
} from "@material-ui/core";
import { FormControl, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: "32ch"
  }
}));


const UserInfo = () => {
  let user = JSON.parse(window.sessionStorage.getItem('user'))
  sessionStorage.setItem('email', user.email);
  sessionStorage.setItem('username', user.username);
  sessionStorage.setItem('userId', user.id);

  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();

  const [updateEmail, setUpdateEmail] = React.useState(sessionStorage.getItem("email"));
  const [updateUsername, setUpdateUsername] = React.useState(sessionStorage.getItem("username"));

  const [values, setValues] = React.useState({
    name: null,
    email: null,
    username: null,
    password: null,
    editName: true,
    editEmail: true,
    editUsername: true,
    editPassword: true,
    editAll: true
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });

  };

  const handleEditEmail = () => {
    setValues({ ...values, editEmail: !values.editEmail });

  };
  const handleEditUserName = () => {
    setValues({ ...values, editUsername: !values.editUsername });

  };
  const handleEditPassword = () => {
    setValues({ ...values, editPassword: !values.editPassword });
  };
  //this makes sure not null values are pass to backend
  const handleMouseDownPassword = event => {
    event.preventDefault();

    console.log("values.emal")
    console.log(values.email)
    if ((values.email !== undefined) && (values.email !== null)) {
      setUpdateEmail(values.email)
    }
    if ((values.username !== undefined) && (values.username !== null)) {
      setUpdateUsername(values.username)
    }
    console.log("in mouseDown")
    console.log(userInfo)
  };
  if (user.id !== undefined) {
    sessionStorage.setItem("userId", user.id)
  }
const [data,setData]= useState("")
  useEffect(() => {

    axios.post("/users/refresh/", {
      id: parseInt(sessionStorage.getItem('userId'))
    }
    )
      .then(response => {
        console.log("inside user-info userEffect")
        console.log(response.data)
        if (response.data.username !== undefined) {
          sessionStorage.setItem('email', response.data.email);
          sessionStorage.setItem('username', response.data.username);
          sessionStorage.setItem('userId', response.data.id);

        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [data])


  const userInfo = {
    // newName: user.first_name,
    // firstName: user.first_name,
    // lastName: user.last_name,
    newEmail: updateEmail,
    newUsername: updateUsername,
    // newAge: user.age,
    username: sessionStorage.getItem("username"),

    //@ bernardo for the update user info route, we have changed the figma dock
    // we will only be updating user email and username
    // we must also include a password feild to authenticate with now.

    password: values.password
  };

  const handleUpdateInformation = (event) => {
    event.preventDefault()
    if (values.password === null) {
      alert("Enter Password!")
    }

    console.log("inside axios");
    
    console.log(userInfo);
    axios
      .post("/users/updateUserInfo", userInfo)
      .then(response => {
        console.log(response.data);

        setData(response.data)
        enqueueSnackbar("Users' Info Updated!", { 
          variant: 'success'
        });
      })
      .catch(error => {
        enqueueSnackbar("Current Password incorrect!", { 
          variant: 'error'
        });

        console.log(error);
      });
  };

  return (
    <div className={classes.root}>
      <div>
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput

            required={true}
            
            disabled={values.editEmail}
            id="outlined-adornment-email"
            type="text"
            defaultValue={values.editEmail ? sessionStorage.getItem("email"):values.email  }
            onChange={handleChange("email")}
            endAdornment={
              <InputAdornment position="end">
                <CreateIcon
                  aria-label="toggle password visibility"
                  onClick={handleEditEmail}
                  onMouseDown={handleMouseDownPassword}

                  edge="end"
                ></CreateIcon>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-username">
            Username
          </InputLabel>
          <OutlinedInput
            required
            placeholder={sessionStorage.getItem("username")}
            disabled={values.editUsername}
            id="outlined-adornment-username"
            type="text"
            defaultValue={values.editUsername ? sessionStorage.getItem("username") : values.username}
            onChange={handleChange("username")}
            endAdornment={
              <InputAdornment position="end">
                <CreateIcon
                  aria-label="toggle password visibility"
                  onClick={handleEditUserName}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                ></CreateIcon>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password*
          </InputLabel>
          <OutlinedInput
            required={true}
            placeholder="required"
            disabled={values.editPassword}
            id="outlined-adornment-password"
            type="password"
            // value={values.editPassword ? "" : null}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <CreateIcon
                  aria-label="toggle password visibility"
                  onClick={handleEditPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                ></CreateIcon>
              </InputAdornment>
            }
            labelWidth={70}
          />
          <ListSubheader color="primary">Enter Password to Save Changes</ListSubheader>
        </FormControl>
      
        <Button
          onMouseDown={handleMouseDownPassword}

          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          id="login"

         
          style={{ backgroundColor: "#B92626" }}
          onClick={handleUpdateInformation}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',

    }} maxSnack={1}>
      <UserInfo />
    </SnackbarProvider>
  );
}
