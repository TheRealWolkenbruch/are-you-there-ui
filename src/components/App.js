import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './../css/App.css';
import Guardian from './../routes/Guardian'
import Ward from './../routes/Ward'
// https://medium.com/@danfyfe/using-react-context-with-functional-components-153cbd9ba214
import {AuthContextProvider} from './../context/auth-context.js'

const App = () => {
  const[token,setToken] = useState(null);
  const[email,setEmail] = useState(null);

  const login = (token,userid) => {
    setToken(token)
    setEmail(userid)
  }
  const logout = () => {
    setToken(null)
    setEmail(null)
  }

  const context = {
    token: token,
    email: email,
    login: login,
    logout: logout,
  }
  return (
    <Router>
      <header>
        header
      </header>
      <main>
        <AuthContextProvider value={context}>
          <Route exact path="/Guardian" component={Guardian}/>
        </AuthContextProvider>
        <Route path="/Ward/:name" component={Ward}/>
      </main>
      <footer>
        footer
      </footer>
    </Router>
  );
}

export default App;
