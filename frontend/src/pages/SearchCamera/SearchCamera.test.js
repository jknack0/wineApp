import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import {
  SearchCameraContainer,
  IconContainer,
  TextContainer, 
  SelectedIcon,
  FadedIcon 
} from './Styles'

describe('<SearchCamera />...', () => {
  it('SearchCameraContainer', () => {
    render(<SearchCameraContainer />)
  })
  it('IconContainer', () => {
    render(<IconContainer />)
  })
  it('TextContainer', () => {
    render(<TextContainer />)
  })
  it('SelectedIcon', () => {
    render(<SelectedIcon />)
  })
  it('FadedIcon', () => {
    render(<FadedIcon />)
  })
})
