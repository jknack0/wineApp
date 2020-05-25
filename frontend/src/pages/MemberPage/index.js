import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './MemberPage.css'

const MemberPage = ({ match }) => {
  const [member, setMember] = useState(null)

  useEffect(() => {
    axios.get(`/team/getTeamMember/${match.params.name}`)
      .then(response => {
        setMember(response.data)
        console.log(member)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  if (member === null) {
    return (
      <div>Loading</div>
    )
  } else {
    return (
      <div>
        <div className="MemberPage">
          <img id="memberImg" src={member.photo}></img>
          <p>{member.first_name} {member.last_name}</p>
          <p>{member.role}</p>
          <p>{member.description}</p>
        </div>
      </div>
    )
  }
}

export default MemberPage
