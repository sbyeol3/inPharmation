import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from "../Components/Main";

export default () => (
  <Router>
    <Route path="/" component={Main} />
  </Router>
)