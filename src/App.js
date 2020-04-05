import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GetAssignment from './GetAssignment/GetAssignment';
import Details from './Details/Details';
import Dashboard from './Dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path = '/' component={Dashboard} />
        <Route exact path = '/home' component={GetAssignment} />
        <Route exact path = '/home/:id' component={Details} />
      </div>
    </Router>
  );
}


export default App;

