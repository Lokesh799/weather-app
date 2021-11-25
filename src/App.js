import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, BrowserRouter } from 'react-router-dom'
//import { Button } from 'react-bootstrap';
//import { useHistory } from "react-router-dom";
import Login from './component/Login'
import dashbord from './component/Dashbord';

const App = () => {
  return (
    <div>
      
            <BrowserRouter>
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Dashbord" component={dashbord} />
            </BrowserRouter>
          </div>
        
  )
}

export default App
