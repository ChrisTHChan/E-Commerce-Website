import React from 'react';
import Homepage from './pages/homepage/Homepage.js'
import ShopPage from './pages/shop/Shoppage.js'
import {Route, Switch} from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;