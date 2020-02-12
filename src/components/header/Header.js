import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils.js'
import CartIcon from '../cart-icon/CartIcon.js'
import CartDropdown from '../cart-dropdown/CartDropdown.js'
import {selectCartHidden} from '../../redux/cart/cartSelector.js'
import {selectCurrentUser} from '../../redux/user/userSelector.js'

import './header.scss'

const Header = ({currentUser, hidden}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser ? 
                    <a className='option' onClick={() => {auth.signOut()}}>SIGN OUT</a>
                    :
                    <Link className='option' to='/signinsignup'>SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {
                hidden ? null : <CartDropdown/>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
})

export default connect(mapStateToProps)(Header);