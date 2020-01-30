import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils.js'

import './header.scss'

const Header = ({currentUser}) => {
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
            </div>
        </div>
    )
}

export default Header;