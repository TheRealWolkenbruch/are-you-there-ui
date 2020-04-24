import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './../css/App.css';
import Guardian from './../routes/Guardian'
import Ward from './../routes/Ward'

const App = () => {
  return (
    <Router>
      <header>
        header
      </header>
      <main>
        <Route exact path="/Guardian" component={Guardian}/>
        <Route exact path="/Ward" component={Ward}/>
      </main>
      <footer>
        footer
      </footer>
    </Router>
  );
}

export default App;
