import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import SearchBar from '../pages/SearchBar'
import Results from '../pages/Results'
import SearchCamera from '../pages/SearchCamera'
import Login from '../pages/Login/login'
import CreateAccount from '../pages/CreateAccount/account'
import CreateAccount2 from '../pages/CreateAccount/account2'
import Profile from '../pages/Profile-Logged-In/profile.js'
import Saved from '../pages/Saved'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/createaccount" component={CreateAccount} />
    <Route path="/createaccount2" component={CreateAccount2} />
    <Route path="/searchbar" component={SearchBar} />
    <Route path="/searchcamera" component={SearchCamera} />
    <Route path="/manual/results/:type/:term" component={Results} />
    <Route path="/barcode/results/:type/:barcode" component={Results} />
    <Route path="/profile/loggedin" component={Profile} />
    <Route path="/saved" component={Saved} />
    <Route path="/popular" component={Saved} />
  </Switch>
)

export default Routes
