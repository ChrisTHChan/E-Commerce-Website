import React from 'react';
import Homepage from './pages/homepage/Homepage.js'
import ShopPage from './pages/shop/Shoppage.js'
import {Route, Switch} from 'react-router-dom'
import Header from './components/header/Header.js'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/SignInAndSignUpPage.js'
import {auth, createUserProfileDocument} from './firebase/firebase.utils.js'

import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribefromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => {console.log(this.state)})
        }) 
      } else {
        this.setState({currentUser: userAuth})
      }
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