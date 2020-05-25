import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Cheese from "./cheese-pre.js";
import Password from "./password.js";
import UserInfo from "./user-info.js";
import Picture from "./picturePro.js";
//import userStore from '../../redux/userStore' // depreciate  redux import

import NavigationBar from '../../shared/components/NavigationBar'

import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  ExpansionPanelSummary,
  ExpansionPanel,
  ExpansionPanelDetails,
  Grid,
  Button
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
//import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
const useStyles = makeStyles(theme => ({
  root: {
    top:"15%",
    width: "98%",
    position: "relative",
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  paper: {
    backgroundColor : '#fff8e1', 
    boxShadow: 'none'
  },
  title: {
    fontSize: 22,
    flexGrow: 1,
  },
  spacer: {
    height: '20px'
  },
  profileDiv : {
    textAlign: 'center'
  },
  mainDiv: {
    marginLeft: '5px',
    marginRight: '5px',
    marginBottom: '100px'
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(8)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  button: {
    "& > *": {
      margin: theme.spacing(2),
      background: "#B92626",
     
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 48,
      //width: ,
      padding: "0 50px",
    },

  },
   
  centered: {
    margin: '0 auto'
  }
}));

const Profile = (props) => {

  const [user, setUser] =  useState(JSON.parse(window.sessionStorage.getItem("user")))

  const classes = useStyles();

  console.log('user', user)

  const logout = () => {
    console.log( "you are now logging out")
    sessionStorage.clear();
    localStorage.clear();
    props.history.push('/')
  }

  if(user !== null)
  {
    return (
      <Paper className={classes.paper}>
        <NavigationBar></NavigationBar>
        <Helmet bodyAttributes={{ style: "background-color : #fff8e1" }} />
      <div className={classes.mainDiv}>
         <div className={classes.profileDiv}>
          <div className={classes.spacer}></div>
            <Picture />
            <Typography className={classes.title}>{user.first_name}</Typography>
         <div className={classes.spacer}></div>
       </div>
            
            <Grid></Grid>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
  
                <Typography className={classes.heading}>
                  Personal Information
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <UserInfo />
              </ExpansionPanelDetails>
            </ExpansionPanel>
  
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}> Password</Typography>
              </ExpansionPanelSummary>
              
              <ExpansionPanelDetails>
                <Password />
              </ExpansionPanelDetails>
            </ExpansionPanel>
  
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}> Preferences</Typography>
              </ExpansionPanelSummary>
            
            <ExpansionPanelDetails>
              <Cheese />
            </ExpansionPanelDetails>
            </ExpansionPanel>


            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExitToAppIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                
              >
                <Typography className={classes.heading}> Log Out</Typography>
              </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Button onClick={logout} className={classes.centered} variant="contained" color="secondary" >Exit</Button>
            </ExpansionPanelDetails>
            </ExpansionPanel>
  
        </div>
      </Paper>
    );
  }
  else
  {
    return (<Paper className={classes.paper}>
      <NavigationBar></NavigationBar>
      <Helmet bodyAttributes={{ style: "background-color : #fff8e1" }} />
    <div className={classes.mainDiv}>
       <div className={classes.profileDiv}>
        <div className={classes.spacer}></div>
          <Picture />
          <Typography className={classes.title}>Like what you see?</Typography>
          <Typography className={classes.title}>Create an account to see more!</Typography>
       <div className={classes.spacer}></div>
     </div>
          {/* now we just need a create acccount button a little talk about features */}
          <Grid container direction="column" justify="center" alignItems="center">
           <Link to='/createaccount'>
            <div className={classes.button}>
              <Button> Get Started </Button>
            </div>
           </Link> 

           <Link to='/login'>
            <div className={classes.button}>
              <Button> Login </Button>
            </div>
           </Link> 
          </Grid>
      </div>
    </Paper>
    );
  }
};

export default Profile;
