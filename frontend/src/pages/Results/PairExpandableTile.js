import React, { useState } from 'react'
import axios from 'axios'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import cheese from '../../shared/images/cheese.jpg'
import wine from '../../shared/images/winebottle.jpg'
import userStore from '../../redux/userStore'
import {
  CompressedTile,
  ExpandedTile,
  TileContainer,
  WineImage,
  Bookmark,
  BookmarkContainer,
  ActionContainer,
  UpvoteContainer,
  Upvote,
  Downvote
} from './Styles'

const user = JSON.parse(window.sessionStorage.getItem("user"))

const PairExpandableTile = (props) => {
  const [pair, setPair] = useState(props.pair)
  const [hasVoted, setHasVoted] = useState(false)
  const [hasSaved, setHasSaved] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const pairTerm = props.pairTerm
  
  //console.log('user in pair tile: ', user)
  //console.log(pairTerm)

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
          <b>{pairTerm === 'wine' ? pair.cheese : pair.wine}</b>
          <ExpandLessIcon />
        </CompressedTile>
        <ExpandedTile>
          <WineImage src={pairTerm === 'wine' ? cheese : wine} />
          {pairTerm === 'wine'
            ? pair.country + ' | ' + pair.texture + ' | ' + pair.animal
            : ''}<br />
          {pairTerm === 'wine' ? '' : pair.description}<br />
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
        {pairTerm === 'wine' ? pair.cheese : pair.wine}
        <ExpandMoreIcon />
      </CompressedTile>
    )
  }
}

export default PairExpandableTile
