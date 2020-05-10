import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

const someComponent = () => {
  return (
    <div>
      <p>Test component</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={someComponent} />
      </Router>
    </div>
  );
}

export default App;
