import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './../css/App.css';
import Guardian from './../routes/Guardian'
import Ward from './../routes/Ward'
// https://medium.com/@danfyfe/using-react-context-with-functional-components-153cbd9ba214
import {AuthContextProvider} from './../context/auth-context.js'
 
const App = () => {
  return (
    <Router>
      <header>
        header
      </header>
      <main>
        <AuthContextProvider value="test"> 
          <Route exact path="/Guardian" component={Guardian}/>
        </AuthContextProvider>
        <Route exact path="/Ward" component={Ward}/>
      </main>
      <footer>
        footer
      </footer>
    </Router>
  );
}

export default App;
