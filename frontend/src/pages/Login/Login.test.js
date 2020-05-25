import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Login from './login'

describe('<Login />...', () => {
  it('renders', () => {
    render(<Login />)
  })
})
