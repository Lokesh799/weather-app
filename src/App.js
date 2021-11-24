import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, BrowserRouter } from 'react-router-dom'
//import { Button } from 'react-bootstrap';
//import { useHistory } from "react-router-dom";
import Login from './component/Login'


const App = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">

            <h1> Home Page</h1>
            <BrowserRouter>
              <Route path="/Login" component={Login} />
              {/* <Route path="/Login" component={Login} />
              <Route path="/Login" component={Login} /> */}
            </BrowserRouter>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default App
