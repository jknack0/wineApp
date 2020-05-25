import { styled, CircularProgress } from '@material-ui/core'

export const SavedPageContainer = styled('div')({
  width: '100vw',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff8e1'
})

export const TileContainer = styled('div')({
  fontFamily: 'roboto'
})

export const CompressedTile = styled('div')({
  backgroundColor: '#F5F5F5',
  height: '5vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '15',
  padding: '0px 10px',
  borderRadius: '3px',
  fontFamily: 'roboto'
})

export const ExpandedTile = styled('div')({
  fontFamily: 'roboto',
  backgroundColor: 'white',
  borderRadius: '2px',
  padding: '10px 5px',
  marginBottom: '5px'
})

export const ButtonContainer = styled('div')({
  width: '100vw',
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '15px'
})

export const FilterButton = styled('button')({
  fontFamily: 'roboto',
  backgroundColor: '#F32E21',
  borderRadius: '10px',
  textAlign: 'center',
  color: 'white',
  padding: '10px 15px',
  margin: '20px'
})

export const SavedContainer = styled('div')({
  backgroundColor: 'white',
  padding: '10px 10px',
  borderRadius: '5px',
  margin: '0px 15px',
  marginBottom: '85px',
  boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
})

export const LoadingContainer = styled('div')({
  width: '100vw',
  height: '100vh',
  backgroundColor: '#fff8e1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

export const Loading = styled(CircularProgress)({
  color: '#B92626',
  position: 'absolute',
  top: '45%'
})

export const Heading = styled('div')({
  fontSize: '24px'
})

export const HorizontalLine = styled('hr')({
  height: '3px',
  color: '#B92626',
  backgroundColor: '#B92626',
  border: 'none',
  marginBottom: '10px'
})

export const WineDescription = styled('div')({
  fontSize: '14px',
  lineHeight: '1.8',
  margin: '12px 0px'
})
