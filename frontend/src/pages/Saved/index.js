import React, { useState, useEffect } from 'react'
import SavedExpandableTile from './SavedExpandableTile'
import NavigationBar from '../../shared/components/NavigationBar'
import axios from 'axios'
import history from '../../History'

import {
  SavedPageContainer,
  ButtonContainer,
  // FilterButton,
  SavedContainer,
  LoadingContainer,
  Loading
} from './Styles'
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Grid,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "fixed",
    backgroundColor : '#fff8e1', 
    boxShadow: 'none',
    height: '100%',
    width: '100%'
  },
  title: {
    fontSize: 22,
    flexGrow: 1,
  },
  spacer: {
    height: '20px'
  },
  profileDiv : {
    textAlign: 'center',
    marginTop: '200px'
  },
  mainDiv: {
    marginLeft: '5px',
    marginRight: '5px',
    marginBottom: '100px',   
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
    centered: {
      margin: '0 auto'
    }
  }
}));


const Saved = () => {
  const [saved, setSaved] = useState([])

  const classes = useStyles();
  let path = history.location.pathname

  useEffect(() => {
    if (path === '/saved') {
      let userId = {}

      if (JSON.parse(window.sessionStorage.getItem('user')) !== null) {
        userId = {
          user_id: `${JSON.parse(window.sessionStorage.getItem('user')).id}`
        }
      }

      axios({
        method: 'post',
        url: '/pairs/getSavedPairs',
        baseURL: '/',
        data: userId
      })
        .then(response => {
          setSaved(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    } else if (path === '/popular') {
      console.log('popular')
      axios({
        method: 'get',
        url: '/pairs/getPopularPairings',
        baseURL: '/'
      })
        .then(response => {
          setSaved(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
    return setSaved([])
  }, [path])

  const displaySaved = () => saved.map(pair => <SavedExpandableTile pair={pair} key={pair.node_id} />)
  
  if(JSON.parse(window.sessionStorage.getItem("user")) === null) // the user is logged out!!!
  {
    return (<Paper className={classes.paper}>
      <NavigationBar></NavigationBar>
    <div className={classes.mainDiv}>
    
    <div className={classes.profileDiv}>
          <Typography className={classes.title}>Like what you see?</Typography>
          <Typography className={classes.title}>Create an account to see more!</Typography>
           <div className={classes.spacer}></div>
       <Grid container direction="column" justify="center" alignItems="center">
           <Link to='/createaccount'>
            <div className={classes.button}>
              <Button > Get Started </Button>
            </div>
           </Link> 

           <Link to='/login'>
            <div className={classes.button}>
              <Button> Login </Button>
            </div>
           </Link> 
          </Grid>
     </div>
          {/* now we just need a create acccount button a little talk about features */}
          
      </div>
    </Paper>
    );
  }
  else{ // the user is logged in 
    if(saved.length === 0){
      return (
        <LoadingContainer>
          <NavigationBar />
          <Loading />
        </LoadingContainer>
      )
    } else {
      return (
        <SavedPageContainer>
          <NavigationBar />
          <ButtonContainer>
            {/* <FilterButton>Filter</FilterButton> */}
          </ButtonContainer>
          <SavedContainer>
            {displaySaved()}
          </SavedContainer>
        </SavedPageContainer>
      )
    }
  }
}

export default Saved
