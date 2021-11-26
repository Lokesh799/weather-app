import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './component/Login'
import Dashbord from './component/Dashbord';
import { useHistory } from 'react-router';
import Home from './component/Home'
import History from './component/History'

const App = () => {
  const history = useHistory()
  history.push('/login')
  return (
    <div>
      <Router>
        <Route exact path="/login" component={Login} />
        <Route path="/Home" component={Home} />
        <Route path="/Dashbord" component={Dashbord} />
        <Route path="/History" component={History} />
        
      </Router>
    </div>
  )
}

export default App
