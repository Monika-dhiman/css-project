import React from 'react'
import './style.css'

const LogInForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email, password);
  }
  return (
    <div className= "log-in-container">
    <div>
    <span>Sign In</span><br />  
    <span>Sign in to your account</span>
    </div>
    <div classname="button-container">
      <button className='google-btn'>Sign in with Google</button>
      <button className='facebook-btn'>Sign in with Facebook</button>
    </div>
    <div className='log-in-form'>
        <div className='input-fields'>
          <label htmlFor="email" >Email address</label><br/>
          <input type="email" id="email" name="email" />
        </div>
        <div className='input-fields'>
          <label htmlFor="password">Password</label><br/> 
          <input id="password" name="password" />
        </div>
        <div>
          <a href="">Forgot password?</a>
        </div>
        <button className='submit-btn' type="submit" onClick={handleSubmit}> Sign In </button>
      
    </div>
    <div className='footer'>
    <p>Don't have an account? <a href="">Register here</a></p>
    </div>
</div>
  )
}
export default LogInForm 
