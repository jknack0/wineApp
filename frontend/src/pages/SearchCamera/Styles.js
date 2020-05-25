import { styled, Box, Avatar } from '@material-ui/core'

export const SearchCameraContainer = styled(Box)({
  width: '100vw',
  height: '88vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '20px',
  backgroundColor: '#fff8e1'
})

export const IconContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  marginBottom: '10vh'
})

export const TextContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  fontSize: '16px'
})

export const SelectedIcon = styled(Avatar)({
  height: 62,
  width: 62,
  margin: '0 5vw'
})

export const FadedIcon = styled(Avatar)({
  height: 60,
  width: 60,
  opacity: 0.5,
  margin: '0 5vw'
})
