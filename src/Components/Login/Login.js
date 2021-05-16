import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import './Login.css'
import { auth } from '../../firebase'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Login() {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) =>{
        e.preventDefault()

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth =>{
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e =>{
        e.preventDefault()

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            console.log(auth)
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    // src="https://p7.hiclipart.com/preview/480/274/568/amazon-com-logo-brand-aws-turkey-symbol-amazon-com.jpg"
                    src="https://indianapublicmedia.org/images/news-images/amazon-logo.jpg"

                    alt="Amazon Logo"
                />
            </Link>

            <div className="login__container">
                <h1>Sign Up</h1>
                <form>
                    <h5>Email </h5>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}    
                    />

                    <h5>Password </h5>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button 
                        type="submit"
                        className="login__signInButton"
                        onClick = {signIn}
                    >Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Clone Conditions of Use and Privacy Notice.</p>

                <button 
                    className="login__registerButton"
                    onClick={register}
                >
                    Create Your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
