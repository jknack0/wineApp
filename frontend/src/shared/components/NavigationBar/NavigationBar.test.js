import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import {
  NavigationBarContainer,
  SelectedNavigationItem,
  OpaqueNavigationItem,
  BookmarkIconNav,
  SearchIconNav,
  FavoriteIconNav,
  AccountIconNav,
  CameraIconNavOpaque,
  CameraIconNavSelected
} from './Styles'


describe('<NavigationBar />...', () => {
  it('NavigationBarContainer', () => {
    render(<NavigationBarContainer />)
  })
  it('SelectedNavigationItem', () => {
    render(<SelectedNavigationItem />)
  })
  it('OpaqueNavigationItem', () => {
    render(<OpaqueNavigationItem />)
  })
  it('BookmarkIconNav', () => {
    render(<BookmarkIconNav />)
  })
  it('SearchIconNav', () => {
    render(<SearchIconNav />)
  })
  it('FavoriteIconNav', () => {
    render(<FavoriteIconNav />)
  })
  it('AccountIconNav', () => {
    render(<AccountIconNav />)
  })
  it('CameraIconNavOpaque', () => {
    render(<CameraIconNavOpaque />)
  })
  it('CameraIconNavSelected', () => {
    render(<CameraIconNavSelected />)
  })
})