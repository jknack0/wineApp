import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    background: 'B92626',
    
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    marginTop: '50px'
  }
}))

export default function ImageAvatars () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <img alt="winecheese" src="https://image.flaticon.com/icons/svg/2720/2720205.svg" className={classes.large}/>
    </div>
  )
}
