import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Landing from './index'

describe('<Landing />...', () => {
  it('renders', () => {
    render(<Landing />)
  })
})