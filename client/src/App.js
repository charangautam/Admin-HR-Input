import React, { useContext } from 'react'
import Lander from './pages/lander/Lander'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Submissions from './pages/submissions/Submissions'

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
          <Lander />
        </Route>
        <Route path='/home'>
          { user ? <Home /> : <Login /> }
        </Route>
        <Route path='/login'>
          { user ? <Redirect to='/home' /> : <Login />}
        </Route>
        <Route path='/submissions'>
          { user ? <Submissions /> : <Login />}
        </Route>
        <Route to='/register'>
          { user ? <Redirect to='/home' /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
