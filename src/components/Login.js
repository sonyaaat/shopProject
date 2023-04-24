import { useState } from "react"
import React from 'react';
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import background from "../images/main.jpeg"
import { logIn } from "../redux/auth/auth-operations"
const Login=()=>{
  const dispatch=useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
    
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
return(
    <>
     <main>
      <div className="login-wrapper" style={{ backgroundImage: `url(${background})` }}>
        <div className="login">
          <div className="login-triangle"></div>

          <h2 className="login-header">Log in</h2>

          <form className="login-container" onSubmit={handleSubmit} data-testid="login">
            <p><input  onChange={handleChange} type="email" placeholder="Email" name="email"value={email} /></p>
            <p><input  onChange={handleChange} type="password" placeholder="Password" name="password" value={password}/></p>
            <p><input  onChange={handleChange} type="submit" value="Log in" /></p>
            <Link to="/register">
            <input className="register" type="button" value="Register" />
            </Link>
           
          </form>
        </div>
      </div>
     

         
    </main>
    </>
)
}
export default Login