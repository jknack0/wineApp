import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Button from './button'
import Button2 from './button2'
import Button3 from './button3'
import Button4 from './button4'

describe('<Home />...', () => {
  it('button', () => {
    render(<Button />)
  })
  it('button2', () => {
    render(<Button2 />)
  })
  it('button3', () => {
    render(<Button3 />)
  })
  it('button4', () => {
    render(<Button4 />)
  })
})