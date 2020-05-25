import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'

const About = () => {
  return (
    <div className="body">
      <div className="background">
        <div className="column">
          <li >
            <Link to='/memberpage/shane'>
              <img className ="img" src='https://i.imgur.com/aMaBIWU.jpg'/>
            </Link>
            <div> Shane Wade - TeamLead and BackEnd </div>
          </li>
        </div>
        <div className="column1">
          <li >
            <Link to='/memberpage/bernardo'>
              <img className ="img" src='https://i.imgur.com/2TSpxxH.jpg'/>
            </Link>
            <div> Bernardo Bustamante - FrontEnd </div>
          </li>
        </div>
        <div className="column">
          <li >
            <Link to='/memberpage/qianqian'>
              <img className ="img" src='https://i.imgur.com/AzLeD6y.jpg'/>
            </Link>
            <div> Qianqian Zhao - FrontEnd </div>
          </li>
        </div>
        <div className="column1">
          <li >
            <Link to='/memberpage/diana'>
              <img className ="img" src='https://i.imgur.com/in2oBLA.jpg'/>
            </Link>
            <div> Diana YuYu - Scrum Master and Back-end Dev </div>
          </li>
        </div>
        <div className="column">
          <li >
            <Link to='/memberpage/jonathon'>
              <img className ="img" src='https://i.imgur.com/AuJFUJL.png'/>
            </Link>
            <div> Jonathon Knack - FrontEnd </div>
          </li>
        </div>
        <div className="column1">
          <li >
            <Link to='/memberpage/nicholas'>
              <img className ="img" src='https://i.imgur.com/Ypck3eW.jpg'/>
            </Link>
            <div> Nicholas Tuscano - BackEnd Lead </div>
          </li>
        </div>
        <div className="column">
          <li >
            <Link to='/memberpage/skylar'>
              <img className ="img" src='https://i.imgur.com/ZKn6lCb.jpg'/>
            </Link>
            <div> Skylar Krieger -FrontEnd Lead </div>
          </li>
        </div>
        <div className="column1">
          <li >
            <Link to='/memberpage/steve'>
              <img className ="img" src='https://i.imgur.com/2rbLb5Y.jpg'/>
            </Link>
            <div> Steve Tu - GithubMaster and BackEnd </div>
          </li>
        </div>
        <div>Click for More info</div>
      </div>
    </div>
  )
}

export default About
