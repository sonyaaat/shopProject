import { Link } from "react-router-dom";
import background from "../images/main.jpeg"
import { register } from "../redux/auth/auth-operations";
import { useDispatch } from "react-redux";
import { useState } from "react";
const Register = () => {
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
    dispatch(register({ email: email, password: password }));
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <main>
        <div className="login-wrapper" style={{ backgroundImage: `url(${background})` }}>
          <div className="login">
            <div className="login-triangle"></div>

            <h2 className="login-header">Register</h2>

            <form className="login-container"  onSubmit={handleSubmit}>
              <p>
                <input type="email" placeholder="Email" name="email"  onChange={handleChange} value={email}/>
              </p>
              <p>
                <input type="password" placeholder="Password" name="password"  onChange={handleChange} value={password}/>
              </p>
              <p>
                <input type="submit" value="Register" />
              </p>
              <Link to="/login">
            <input className="register" type="button" value="Login" />
            </Link>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};
export default Register;
