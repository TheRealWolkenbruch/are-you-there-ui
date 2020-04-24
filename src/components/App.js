import React from 'react';
import './../css/App.css';
import Guardian from './../routes/Guardian'
import Ward from './../routes/Ward'

const App = () => {
  return (
    <>
      <header>
        header
      </header>
      <main>
        <Guardian/>
        <Ward/>
      </main>
      <footer>
        footer
      </footer>
    </>
  );
}

export default App;
