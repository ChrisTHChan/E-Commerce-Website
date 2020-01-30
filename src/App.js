import React from 'react';
import Homepage from './pages/homepage/Homepage.js'
import ShopPage from './pages/shop/Shoppage.js'
import {Route, Switch} from 'react-router-dom'
import Header from './components/header/Header.js'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/SignInAndSignUpPage.js'
import {auth} from './firebase/firebase.utils.js'

import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentuser: null
    }
  }

  unsubscribefromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signinsignup' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;