import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      background: 'white',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'B92626',
      height: 48,
      wdith: 50,
      padding: '0 30px'
    }
  }
}))

export default function ContainedButtons2 () {
  const classes = useStyles()

  return (
    <center>

      <div className={classes.root}>
        <Button>See How It Works</Button>
      </div>
    </center>

  )
}
