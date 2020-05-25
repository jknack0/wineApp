import { styled, Box, Typography, CircularProgress } from '@material-ui/core'

import BookmarkIcon from '@material-ui/icons/Bookmark'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

export const ResultsContainer = styled(Box)({
  width: '100vw',
  minHeight: '100vh',
  backgroundColor: '#fff8e1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

export const LoadingContainer = styled(Box)({
  width: '100vw',
  height: '100vh',
  backgroundColor: '#fff8e1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

export const DataContainer = styled(Box)({
  margin: '5vh 5vw',
  marginBottom: '10vh',
  padding: '2%',
  width: '90%',
  backgroundColor: 'white'
})

export const SearchType = styled(Typography)({
  color: '#9B9B9B',
  fontSize: 14
})

export const Heading = styled(Typography)({
  fontSize: 24,
  marginTop: '10px'
})

export const WineInformationFull = styled(Box)({
  fontSize: 14,
  lineHeight: 1.5,
  marginBottom: '12px'
})

export const WineInformationCompressed = styled(Box)({
  height: 'auto',
  fontSize: 14,
  whiteSpace: 'ellipsis',
  overflow: 'hidden',
  marginBottom: '20px',
  lineHeight: 1.5
})

export const WineInformation = styled(Box)({
  fontFamily: 'roboto',
  fontSize: 14,
  lineHeight: 1.5
})

export const Loading = styled(CircularProgress)({
  color: '#B92626',
  position: 'absolute',
  top: '45%'
})

export const HorizontalLine = styled('hr')({
  height: '3px',
  color: '#B92626',
  backgroundColor: '#B92626',
  border: 'none',
  marginBottom: '10px'
})

export const CompressedTile = styled('div')({
  backgroundColor: '#F5F5F5',
  height: '5vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '15',
  padding: '0px 10px',
  borderRadius: '2px',
  fontFamily: 'roboto'
})

export const ExpandedTile = styled('div')({
  fontFamily: 'roboto',
  backgroundColor: '#F5F5F5',
  borderRadius: '2px',
  padding: '0px 10px',
  paddingBottom: '5px',
  textAlign: 'center'
})

export const TileContainer = styled('div')({
  fontFamily: 'roboto',
  margin: '10px 0px'
})

export const WineImage = styled('img')({
  width: '100%',
  height: '100%'
})

export const Bookmark = styled(BookmarkIcon)({
  fontSize: '30px',
  color: 'red'
})

export const BookmarkContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  '&:active': {
    opacity: '.5'
  }
})

export const ActionContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between'
})

export const UpvoteContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
})

export const Upvote = styled(ExpandLessIcon)({
  fontSize: '50px',
  color: 'green',
  '&:active': {
    opacity: '.5'
  }
})

export const Downvote = styled(ExpandMoreIcon)({
  fontSize: '50px',
  color: 'red',
  '&:active': {
    opacity: '.5'
  }
})