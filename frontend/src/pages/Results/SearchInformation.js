import React, { useState } from 'react'
import { Button } from '@material-ui/core'

import ExpandableTile from './ExpandableTile'
import { WineInformationFull, WineInformationCompressed, WineInformation } from './Styles'

const SearchInformation = ({ wines }) => {
  const [expanded, setExpanded] = useState(false)

  const displayWineTiles = () => wines.map(wine => <ExpandableTile wine={wine} key={wine.id} />)

  const checkWineDescritpion = (obj) => { 
    if(obj) 
    {
      return obj.description
    }
    else{
      return ""
    }
  }

  if (expanded) {
    return (
      <WineInformation>
        <WineInformationFull>
          {checkWineDescritpion(wines[0])}
        </WineInformationFull>
        {displayWineTiles()}
        <Button size="medium" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Collapse' : 'Learn More'}
        </Button>
      </WineInformation>
    )
  } else {
    return (
      <WineInformation>
        <WineInformationCompressed>
          {checkWineDescritpion(wines[0])}
        </WineInformationCompressed>
        <Button size="medium" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Collapse' : 'Learn More'}
        </Button>
      </WineInformation>
    )
  }
}

export default SearchInformation
