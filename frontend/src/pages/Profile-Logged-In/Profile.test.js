import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Password from './password'
import Picture from './picturePro'
import User from './user-info'

describe('<Profile />...', () => {
  it('Password', () => {
    render(<Password />)
  })
  it('Picture', () => {
    render(<Picture />)
  })
  it('User', () => {
    render(<User />)
  })
})