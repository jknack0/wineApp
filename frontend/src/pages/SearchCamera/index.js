import React, { useState } from 'react'
import CameraWindow from './CameraWindow'
import './search-camera.css'
import { SearchCameraContainer, IconContainer, TextContainer, SelectedIcon, FadedIcon } from './Styles'
import NavigationBar from '../../shared/components/NavigationBar'
import cheeseIcon from '../../shared/images/cheeseIcon.svg'
import wineIcon from '../../shared/images/wineIcon.svg'

const SearchCamera = () => {
  const [selected, setSelected] = useState('wine')
  return (
    <SearchCameraContainer>
      <CameraWindow type={selected} />
      <NavigationBar />
      <TextContainer>
        What are you scanning?
      </TextContainer>
      <IconContainer>
        {selected === 'wine'
          ? <SelectedIcon src={wineIcon} onClick={() => setSelected('wine')} />
          : <FadedIcon src={wineIcon} onClick={() => setSelected('wine')} />}
        {selected === 'cheese'
          ? <SelectedIcon selected={selected} src={cheeseIcon} onClick={() => setSelected('cheese')} />
          : <FadedIcon selected={selected} src={cheeseIcon} onClick={() => setSelected('cheese')} />}
      </IconContainer>
    </SearchCameraContainer>
  )
}

export default SearchCamera
