import React from 'react'
import './style.css'
import google   from '../../assets/google.svg'
import apple from '../../assets/apple.svg'
import { Link, useNavigate } from 'react-router-dom'

const LogInForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
    // const email = e.target.email.value
    // const password = e.target.password.value
    // console.log(email, password);
  }
  return (
    <div className= "log-in-container">
    <div>
    <span className='heading'>Sign In</span><br />  
    <span>Sign in to your account</span>
    </div>
    <div className="button-container">
      <button >
        <img src={google} height={"14px"} width={"14px"} alt="logo" /> Sign in with Google
        </button>
      <button>
        <img src={apple} height={"14px"} width={"14px"}alt="logo" /> Sign in with Facebook
        </button>
    </div>
    <div className='log-in-form'>
        <div className='input-fields'>
          <label htmlFor="email" >Email address</label><br/>
          <input type="email" id="email" name="email" />
        </div>
        <div className='input-fields'>
          <label htmlFor="password">Password</label><br/> 
          <input id="password" name="password" type='password' />
        </div>
        <div>
          <span style={{color:"#346BD4"}}>Forgot password?</span>
        </div>
        <button className='submit-btn' type="submit" onClick={handleSubmit}> Sign In </button>
      
    </div>
    <div className='footer'>
    <span>Don't have an account? </span> <span style={{color:"#346BD4"}}>Register here</span>
    </div>
</div>
  )
}
export default LogInForm 
