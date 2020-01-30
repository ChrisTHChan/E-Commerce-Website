import React from 'react';
import Homepage from './pages/homepage/Homepage.js'
import ShopPage from './pages/shop/Shoppage.js'
import {Route, Switch} from 'react-router-dom'
import Header from './components/header/Header.js'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/SignInAndSignUpPage.js'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signinsignup' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;