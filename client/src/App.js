import React, { useContext } from 'react'
import Login from './pages/login/Login'
import Home from './pages/home/Home'

import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { AuthContext } from './contextAPI/AuthContext'


function App() {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          { user ? <Home /> : <Login /> }
        </Route>
        <Route path='/login'>
          { user ? <Redirect to='/' /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
