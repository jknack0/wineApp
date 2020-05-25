import React, { useState } from 'react'
import axios from 'axios'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import {
  TileContainer,
  CompressedTile,
  ExpandedTile,
  Heading,
  HorizontalLine,
  WineDescription
} from './Styles'
import {
  ActionContainer,
  BookmarkContainer,
  Bookmark,
  UpvoteContainer,
  Upvote,
  Downvote
} from '../Results/Styles'

const user = JSON.parse(window.sessionStorage.getItem('user'))

const SavedExpandableTile = (props) => {
  const [pair, setPair] = useState(props.pair)
  const [expanded, setExpanded] = useState(false)
  const [hasVoted, setHasVoted] = useState(false)
  const [hasSaved, setHasSaved] = useState(false)

  const handleUpvote = (event) => {
    if (!hasVoted) {
      const newUpvote = {
        wine: pair.wine,
        cheese: pair.cheese,
        node_id: pair.node_id,
        cheese_id: pair.cheese_id,
        texture: pair.texture,
        country: pair.country,
        animal: pair.animal
      }

      axios.post('/pairs/upvote', newUpvote)
        .then(response => {
          setPair({ ...pair, up_votes: parseInt(pair.up_votes) + 1 })
          setHasVoted(true)
        })
        .catch(error => console.log(error))
    }
  }

  const handleDownvote = () => {
    if (!hasVoted) {
      const newUpvote = {
        wine: pair.wine,
        cheese: pair.cheese,
        node_id: pair.node_id,
        cheese_id: pair.cheese_id,
        texture: pair.texture,
        country: pair.country,
        animal: pair.animal
      }

      axios.post('/pairs/downvote', newUpvote)
        .then(response => {
          setPair({ ...pair, down_votes: parseInt(pair.down_votes) + 1 })
          setHasVoted(true)
        })
        .catch(error => console.log(error))
    }
  }

  const handleSaved = () => {
    if (!hasSaved) {
      setHasSaved(true)

      const newSavedPair = {
        user_id: user.id,
        node_id: pair.node_id
      }

      axios.post('/pairs/createSavedPair', newSavedPair)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
  }
  if (expanded) {
    return (
      <TileContainer>
        <CompressedTile onClick={() => setExpanded(!expanded)}>
          {pair.wine + ' + ' + pair.cheese}
          <ExpandLessIcon />
        </CompressedTile>
        <ExpandedTile>
          <Heading>{pair.wine}</Heading>
          <WineDescription>{pair.wine_list[0].description}</WineDescription>
          <HorizontalLine />
          <Heading>{pair.cheese}</Heading>
          {pair.country + ' | ' + pair.texture + ' | ' + pair.animal}<br />
          <ActionContainer>
            <BookmarkContainer onClick={() => handleSaved()}><Bookmark />Save</BookmarkContainer>
            <UpvoteContainer>
              <Upvote onClick={() => handleUpvote()} />{pair.up_votes}
              <Downvote onClick={() => handleDownvote()} />{pair.down_votes}
            </UpvoteContainer>
          </ActionContainer>
        </ExpandedTile>
      </TileContainer>
    )
  } else {
    return (
      <CompressedTile onClick={() => setExpanded(!expanded)}>
        {pair.wine + ' + ' + pair.cheese}
        <ExpandMoreIcon />
      </CompressedTile>
    )
  }
}

export default SavedExpandableTile
