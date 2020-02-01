import React from 'react';
import './App.css';

import Signup from './components/auth/Signup'
import { Switch , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
