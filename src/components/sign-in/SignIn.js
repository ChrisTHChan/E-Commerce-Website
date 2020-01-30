import React from 'react'
import FormInput from '../form-input/FormInput.js'
import CustomButton from '../custom-buttom/CustomButton.js'
import {signInWithGoogle} from '../../firebase/firebase.utils.js'

import './sign-in.scss'

class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({email: '', password: ''})
    }

    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>
                    I already have an account
                </h2>
                <span>
                    Sign in with your e-mail and password.
                </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type='email' value={this.state.email} required handleChange={this.handleChange} label='E-mail'/>
                    <FormInput name="password" type='password' value={this.state.password} required handleChange={this.handleChange} label='Password'/>
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn