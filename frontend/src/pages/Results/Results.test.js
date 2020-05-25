import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ExpandableTile from './ExpandableTile'
import PairExpandableTile from './PairExpandableTile'
import SearchInformation from './SearchInformation'
import {
  ResultsContainer,
  DataContainer,
  SearchType,
  Loading,
  LoadingContainer,
  Heading,
  HorizontalLine
} from './Styles'

describe('<Results />...', () => {
  it('ResultsContainer', () => {
    render(<ResultsContainer />)
  })
  it('DataContainer', () => {
    render(<DataContainer />)
  })
  it('SearchType', () => {
    render(<SearchType />)
  })
  it('Loading', () => {
    render(<Loading />)
  })
  it('LoadingContainer', () => {
    render(<LoadingContainer />)
  })
  it('Heading', () => {
    render(<Heading />)
  })
  it('HorizontalLine', () => {
    render(<HorizontalLine />)
  })

})