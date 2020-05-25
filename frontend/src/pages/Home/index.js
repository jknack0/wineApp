import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import ImageAvatars from './img'
import ContainedButtons from './button'
import ContainedButtons2 from './button2'
import TextButtons from './button3'
import TextButtons2 from './button4'
import './home.css'
import { Link } from 'react-router-dom'

const useStyle = makeStyles({
  textStyle: {

    fontStyle: 'oblique',
    color: 'B92626',
    fontSize: '15px'
  },
  home: {
    overflowX: 'hidden', 
    overflowY: 'hidden',
    backgroundColor: '#fff8e1',
    width: '100%',
    height: '100%'
  }
})

const Home = () => {
  const classes = useStyle()
  return (
    <div className={classes.home}>
      <Grid container direction='column'>

        <Grid item>

        </Grid>

        <Grid item container>

          <Grid item xs={0} sm={2}/>

          <Grid container direction="column" justify="center" alignItems="center">
            <ImageAvatars/>
          </Grid>

          <Grid container direction="column" justify="center" alignItems="center">
            <Typography className={classes.textStyle} variant="h1" color="B92626">
                      With Wine Meet Cheese<br/>
                      you can find a cheese<br/>
                      to go with your wine<br/>
                      or you can find a wine<br/>
                      to go with your cheese<br/>
            </Typography>

          </Grid>
          <Grid container direction="column" justify="center" alignItems="center">
            <Link to='/createaccount'><ContainedButtons/></Link>

            <Link to='/searchbar'><ContainedButtons2/></Link>

          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <Link to='/createaccount'><TextButtons/></Link>
            <Link to='/login'><TextButtons2/></Link>
          </Grid>

          <Grid item xs={0} sm={2}/>

        </Grid>

      </Grid>

    </div>
  )
}

export default Home
