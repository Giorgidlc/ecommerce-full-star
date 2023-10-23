import '../styles/css/login.css'
import LoginForm from '../components/LoginForm.jsx'
import SignUpForm from '../components/SignUpForm'
import { useState } from 'react' 


const Login = () => {
    const [form, setForm ] = useState("login")
    const showSignUp = () =>{
        setForm('signUp')
    }
    const showLogin = () => {
        setForm ('login')
    }

    if (form === 'login'){

    return( 
        <section className='loginForm--Page'>
            <LoginForm />
            <p className='mensageRegister'> You don´t have an account? <a onClick={showSignUp}>Register</a></p>
        </section>
    )
} 
    else {
        return(
            <section className='signUpform--Page'>
            <SignUpForm />
            <p> You already have an account? <a onClick={showLogin}>Log In</a></p>
        </section>
         )
        }
}

export default Login
