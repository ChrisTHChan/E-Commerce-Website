import React from 'react';
import Homepage from './pages/homepage/Homepage.js'
import ShopPage from './pages/shop/Shoppage.js'
import CheckoutPage from './pages/checkout/CheckoutPage.js'
import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from './components/header/Header.js'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/SignInAndSignUpPage.js'
import {auth, createUserProfileDocument} from './firebase/firebase.utils.js'
import {setCurrentUser} from './redux/user/userAction.js'
import {selectCurrentUser} from './redux/user/userSelector.js'

import './App.css'

class App extends React.Component {
  
  unsubscribefromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        }) 
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signinsignup' render={() => this.props.currentUser ? <Redirect to='/'/> : <SignInAndSignUpPage/>}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);