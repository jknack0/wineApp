import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(4),
      color: '#B92626'
    }
  }
}))
export default function TextButtons2 () {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <br/>
      <br/>
      <br/>
      <Button>Login</Button>
    </div>
  )
}
