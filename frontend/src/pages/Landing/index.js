import React, { useState } from 'react'
import axios from 'axios'
import './Landing.css'

const Landing = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [wineCards, updateWineCards] = useState([])

  const submitSearchField = (event) => {
    event.preventDefault()

    console.log('submitSearchField')

    axios
      .post(`/wine/findPairing/${searchTerm}`)
      .then(response => {
        console.log(response.data)
      })

    setSearchTerm('')
  }

  const handleSearchChange = (event) => {
    event.preventDefault()
    setSearchTerm(event.target.value)
  }

  return (
    <div className='back-page'>
      <div>
        <form onSubmit={submitSearchField}>
          <input type='text' placeholder='Type a wine to be paired...' value={searchTerm} onChange={handleSearchChange} />
        </form>
      </div>
      {wineCards}
      <div className="container1">
        <h1 className='welcome'>Welcome Home</h1>
        <div className="container">
          <img
            src="https://archive.org/download/under-construction/under-construction.jpg"
            alt="logo"
          />
        </div>
      </div>
    </div>
  )
}

export default Landing
