import React from "react";
import userStore from "../../redux/userStore"; // redux import
import clsx from "clsx"; // npm install --save clsx
import { makeStyles, IconButton, OutlinedInput, InputLabel, InputAdornment } from "@material-ui/core";
import { FormControl, Button, Grid } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import axios from "axios";
import { SnackbarProvider, useSnackbar } from "notistack";// npm i notistack

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

const UpdatePassword = () => {
  const { enqueueSnackbar } = useSnackbar();
  const success = "success";

  const classes = useStyles();
  const user = userStore.getState();
  const [values, setValues] = React.useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
    showCurrentPassword: false,
    showNewPassword: false,
    showConfirmNewPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowCurrentPassword = () => {
    setValues({ ...values, showCurrentPassword: !values.showCurrentPassword });
  };
  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword });
  };
  const handleClickShowConfirmNewPassword = () => {
    setValues({ ...values, showConfirmNewPassword: !values.showConfirmNewPassword });
  };
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleUpdatePassword = (event) => {
    event.preventDefault()
    const newInfo = {
      password: values.currentPassword,
      new_password: values.newPassword,
      username: sessionStorage.getItem('username'),
    };

    axios
      .post("/users/updatePassword", newInfo)
      .then(response => {
        console.log(response.data);
      
        enqueueSnackbar("Password Updated!", { 
          variant: 'success'
        });
      })
      .catch(error => {
        enqueueSnackbar("Current Password incorrect!", { 
          variant: 'error'
        });

        console.log(error);
      });
  }

  return (
    <div className={classes.root}>
      <div>
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-username">
            Current Password
          </InputLabel>
          <OutlinedInput
            fullWidth
            required

            id="outlined-adornment-current-Password"
            type={values.showCurrentPassword ? "text" : "password"}
            value={values.currentPassword}
            onChange={handleChange("currentPassword")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowCurrentPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showCurrentPassword ? (
                    <Visibility />
                  ) : (
                      <VisibilityOff />
                    )}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={170}
          />
        </FormControl>
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-newPassword">
            New Password
          </InputLabel>
          <OutlinedInput
            required

            id="outlined-adornment-newPassword"
            type={values.showNewPassword ? "text" : "password"}
            value={values.newPassword}
            onChange={handleChange("newPassword")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowNewPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showNewPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={145}
          />
        </FormControl>
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-confirmPassword">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            required

            id="outlined-adornment-confirmPassword"
            type={values.showConfirmNewPassword ? "text" : "password"}
            value={values.confirmNewPassword}
            onChange={handleChange("confirmNewPassword")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmNewPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showConfirmNewPassword ? (
                    <Visibility />
                  ) : (
                      <VisibilityOff />
                    )}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={180}
          />
        </FormControl>
       
        <Button
          onClick={handleUpdatePassword}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          id="login"
          style={{ backgroundColor: "#B92626" }}
        >
          Update Password
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
      <UpdatePassword />
    </SnackbarProvider>
  );
}
