import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchInformation from './SearchInformation'

import NavigationBar from '../../shared/components/NavigationBar'
import PairExpandableTile from './PairExpandableTile'

import {
  ResultsContainer,
  DataContainer,
  SearchType,
  Loading,
  LoadingContainer,
  Heading,
  HorizontalLine
} from './Styles'

const Results = ({ match }) => {
  const [pairings, setPairings] = useState([])
  const typeOfSearch = match.params.type
  const searchTerm = match.params.term
  const barcodeNumber = match.params.barcode
  const pairTerm = typeOfSearch === 'wine' ? 'cheese' : 'wine'

  const wines = pairings.length > 0 ? pairings[0].wine_props : null
  const pairs = pairings.length > 0 ? pairings.filter((pairings, index) => index !== 0) : null

  console.log('pairings: ', pairings)

  const makeTitleCase = (word) => {
    const lowerCasedWord = word.toLowerCase().split(' ').map(term => term.charAt(0).toUpperCase() + term.substring(1)).join(' ')
    return lowerCasedWord
  }

  const displayPairs = () => {
    return pairs.map(pair => <PairExpandableTile key={pair.node_id} pair={pair} pairTerm={typeOfSearch}/>)
  }

  useEffect(() => {
    let url = ''
    if (match.params.barcode) {
      url = `${typeOfSearch}/getPairing/barcode/${barcodeNumber}`
    } else {
      url = `${typeOfSearch}/getPairing/${searchTerm}`
    }

    axios({
      method: 'get',
      url: url,
      baseURL: '/'
    })
      .then(response => {
        setPairings(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  if (pairings.length === 0) {
    return (
      <LoadingContainer>
        <NavigationBar />
        <Loading />
      </LoadingContainer>
    )
  } else {
    return (
      <ResultsContainer>
        <NavigationBar />
        <DataContainer>
          <SearchType>{makeTitleCase(typeOfSearch)}</SearchType>
          <Heading>{makeTitleCase(searchTerm)}</Heading>
          <SearchInformation wines={wines} />
          <HorizontalLine />
          <Heading>{makeTitleCase(pairTerm + ' pairs')}</Heading>
          {displayPairs()}
        </DataContainer>
      </ResultsContainer>
    )
  }
}

export default Results
