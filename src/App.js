import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './pages/main/main';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Main} />
      </Router>
    </div>
  );
}

export default App;
