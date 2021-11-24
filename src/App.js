import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, BrowserRouter } from 'react-router-dom'
//import { Button } from 'react-bootstrap';
//import { useHistory } from "react-router-dom";
import Login from './component/Login'


const App = () => {


  return (

    <div>
      <div>
        <h1> Home Page</h1>
        <BrowserRouter>
        
          <Route  path="/Login" component={Login} />
        </BrowserRouter>
      </div>
    </div>


  )
}

export default App
