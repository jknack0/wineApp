import {
  Typography, Paper, Avatar, makeStyles, IconButton, InputBase
} from '@material-ui/core'
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice'
import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Helmet } from 'react-helmet'
import history from '../../History'
import NavigationBar from '../../shared/components/NavigationBar'

const useStyles = makeStyles(theme => ({

  media: {
    maxWidth: 100,
    marginTop: theme.spacing(45),
    marginBottom: theme.spacing(8),
    margin: 'auto',
    height: '200',
    paddingTop: '56.25%' // 16:9
  },
  card: { maxWidth: 400, marginTop: theme.spacing(45) },
  title: {

    position: 'absolute',
    left: '50%',
    top: '25%',
    transform: 'translate(-50%, -50%)',
    fontSize: 28,
    flexGrow: 0.5
  },
  largeAvatar: {

    width: theme.spacing(8), height: theme.spacing(8)
  },

  largeAvatarAlt: {

    width: theme.spacing(7), height: theme.spacing(7),
    opacity: '50%'
  },

  rootB: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400
  },
  inputB: {
    marginLeft: theme.spacing(1), flex: 1
  },
  iconButton: {
    padding: 10
  }

}))

const Search = () => {
  const classes = useStyles()
  const [searchTerm, setSearchTerm] = useState('')
  const [kind, setKind] = useState('wine')
  const [wineIconStyle, setWineIconStyle] = useState(classes.largeAvatar)
  const [cheeseIconStyle, setCheeseIconStyle] = useState(classes.largeAvatarAlt)


  const submitSearchField = event => {
    event.preventDefault()
    history.push(`/manual/results/${kind}/${searchTerm}`)
  }

  const handleSearchChange = event => {
    event.preventDefault()
    setSearchTerm(event.target.value)
  }

  return (
    <Paper >
      <NavigationBar></NavigationBar>
      <Helmet bodyAttributes={{ style: 'background-color : #fff8e1' }} />
      <Typography className={classes.title}>What are you searching for?</Typography>
      <Avatar
        onClick={e => {setKind('wine'); setCheeseIconStyle(classes.largeAvatarAlt); setWineIconStyle(classes.largeAvatar)}}
        alt="wine-logo"
        src="https://image.flaticon.com/icons/svg/168/168570.svg" // wine icon
        className={wineIconStyle}
        style={{
          position: 'absolute',
          left: '35%',
          top: '45%',
          transform: 'translate(-50%, -50%)',
          flexGrow: 1
        }}
      />
      <Avatar
        onClick={e => {setKind('cheese'); setWineIconStyle(classes.largeAvatarAlt); setCheeseIconStyle(classes.largeAvatar)}}
        alt="cheese-logo"
        src="https://image.flaticon.com/icons/svg/601/601469.svg" // cheese icon
        className={cheeseIconStyle}
        style={{
          position: 'absolute',
          left: '65%',
          top: '45%',
          transform: 'translate(-50%, -50%)',
          flexGrow: 1
        }}
      />
      <Paper
        onSubmit={submitSearchField}
        component="form"
        className={classes.rootB}
        style={{
          position: 'absolute',
          left: '50%',
          top: '65%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          flexGrow: 1
        }}
      >
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          className={classes.inputB}
          placeholder="Search"
          type="text"
          id='search'
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Paper>

    </Paper>
  )
}
export default Search
