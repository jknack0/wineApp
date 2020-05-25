import React, { useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import wineBottle from '../../shared/images/winebottle.jpg'
import {
  CompressedTile,
  ExpandedTile,
  TileContainer,
  WineImage
} from './Styles'

const ExpandableTile = ({ wine }) => {
  const [expanded, setExpanded] = useState(false)

  if (expanded) {
    return (
      <TileContainer onClick={() => setExpanded(!expanded)}>
        <CompressedTile><b>{wine.variety}</b> <ExpandLessIcon /></CompressedTile>
        <ExpandedTile>
          <WineImage src={wineBottle} />
          <b>{wine.winery + ' | ' + wine.region_1}</b><br />
          {wine.description}
        </ExpandedTile>
      </TileContainer>
    )
  } else {
    return (
      <CompressedTile onClick={() => setExpanded(!expanded)}>{wine.winery + ' ' + wine.variety}<ExpandMoreIcon /></CompressedTile>
    )
  }
}

export default ExpandableTile
