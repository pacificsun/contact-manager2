import React from "react";
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'

import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import { Provider } from "./context";
import PageNotFound from "./components/pages/NotFound";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (

      <Provider>
        <Router>
        <div>
         <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component = {Contacts}/>
                <Route exact path="/contact/add" component = {AddContact}/>
                <Route exact path="/about" component = {About}/>
                <Route component = {PageNotFound}/>
              </Switch>
            </div>
        </div>
        </Router>
      </Provider>
  );
}

export default App;