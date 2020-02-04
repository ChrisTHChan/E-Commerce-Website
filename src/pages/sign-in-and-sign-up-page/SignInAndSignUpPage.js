import React from 'react'
import SignIn from '../../components/sign-in/SignIn.js'
import SignUp from '../../components/sign-up/SignUp.js'

import './sign-in-and-sign-up-page.scss'

const SignInAndSignUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInAndSignUpPage