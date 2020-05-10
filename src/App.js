import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from './pages/main/main';
import SingleItem from './pages/singleItem/singleItem';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/book" component={SingleItem} />
      </Router>
    </div>
  );
}

export default App;
