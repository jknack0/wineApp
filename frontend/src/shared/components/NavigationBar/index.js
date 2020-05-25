import React from 'react'
import { Link } from 'react-router-dom'
import history from '../../../History'
import {
  makeStyles
} from '@material-ui/core'
import {
  NavigationBarContainer,
  SelectedNavigationItem,
  OpaqueNavigationItem,
  BookmarkIconNav,
  SearchIconNav,
  FavoriteIconNav,
  AccountIconNav,
  CameraIconNavOpaque,
  CameraIconNavSelected,
 
} from './Styles'

const useStyles = makeStyles(theme => ({
  CameraIconNavOpaqueBacking: {
    height: '80px',
    width: '80px',
    borderRadius: '40px',
    marginBottom: '26px',
    backgroundColor: '#B92626',
    zIndex: '1'
  }
}));

const NavigationBar = () => {
  const selectedItem = history.location.pathname
  const classes = useStyles()

  return (
    <NavigationBarContainer>
      <Link to='/saved'>
        {selectedItem === '/saved'
          ? <SelectedNavigationItem><BookmarkIconNav />Saved</SelectedNavigationItem>
          : <OpaqueNavigationItem><BookmarkIconNav />Saved</OpaqueNavigationItem>}
      </Link>
      <Link to='/searchbar'>
        {selectedItem === '/searchbar'
          ? <SelectedNavigationItem><SearchIconNav />Search</SelectedNavigationItem>
          : <OpaqueNavigationItem><SearchIconNav />Search</OpaqueNavigationItem>}
      </Link>
      <Link to='/searchcamera'>
        {selectedItem === '/searchcamera'
          ? <CameraIconNavSelected />
          : <div className={classes.CameraIconNavOpaqueBacking}> <CameraIconNavOpaque>  </CameraIconNavOpaque></div>}
      </Link>
      <Link to='/popular'>
        {selectedItem === '/popular'
          ? <SelectedNavigationItem><FavoriteIconNav />Popular</SelectedNavigationItem>
          : <OpaqueNavigationItem><FavoriteIconNav />Popular</OpaqueNavigationItem>}
      </Link>
      <Link to='/profile/loggedin'>
        {selectedItem === '/profile/loggedin'
          ? <SelectedNavigationItem><AccountIconNav />Profile</SelectedNavigationItem>
          : <OpaqueNavigationItem><AccountIconNav />Profile</OpaqueNavigationItem>}
      </Link>
    </NavigationBarContainer>
  )
}

export default NavigationBar
