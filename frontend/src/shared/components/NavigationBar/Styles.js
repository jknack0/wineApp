import { styled, Box } from '@material-ui/core'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import SearchIcon from '@material-ui/icons/Search'
import FavoriteIcon from '@material-ui/icons/Favorite'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance'

export const NavigationBarContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  background: '#B92626',
  height: '80px',

  position: 'fixed',
  bottom: '0',
  width: '100vw',
  zIndex: '2'
})

export const BookmarkIconNav = styled(BookmarkIcon)({
  fontSize: '40px',
  color: 'white'
})

export const SearchIconNav = styled(SearchIcon)({
  fontSize: '40px',
  color: 'white'
})

export const FavoriteIconNav = styled(FavoriteIcon)({
  fontSize: '40px',
  color: 'white'
})

export const AccountIconNav = styled(AccountCircleIcon)({
  fontSize: '40px',
  color: 'white'
})

export const CameraIconNavSelected = styled(CameraEnhanceIcon)({
  color: '#B92626',
  border: '5px solid #B92626',
  fontSize: '40px',
  backgroundColor: 'white',
  padding: '15px',
  borderRadius: '100px',
  marginBottom: '3vh'
})

export const CameraIconNavOpaque = styled(CameraEnhanceIcon)({
  color: '#B92626',
  border: '5px solid #B92626',
  fontSize: '40px',
  backgroundColor: 'white',
  padding: '15px',
  borderRadius: '100px',
  marginBottom: '3vh',
  opacity: '.9'
})

export const SelectedNavigationItem = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderBottom: '3px white solid',
  color: 'white',
  paddingBottom: '10px',
  padding: '0px 10px'
})

export const OpaqueNavigationItem = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderBottom: '3px white none',
  color: 'white',
  paddingBottom: '10px',
  padding: '0px 10px',
  opacity: '.85'
})
