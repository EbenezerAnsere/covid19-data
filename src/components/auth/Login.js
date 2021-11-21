import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../features/userSlice';
import './Login.scss';


import {Link} from 'react-router-dom';

const Login = () => {

     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     
     const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

     dispatch(login({
         name: name,
         email: email,
         password: password,
         loggedIn: true,
     }))
    }


    return (
        <div className="login-open">
        <h2 className="title">COVID-19</h2>
        <div className="login">
          <form className="form__link" onSubmit={(e) => handleSubmit(e)}>
            <label className="headline">Login Account</label>
            <br />
            <input
              type="name"
              placeholder="Name"
              required value={name} onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              required  value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required  value={password} onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="submit">
                Login
              </button>
              <div className="className">
                <Link to="/Forgetpassword">Can't login?</Link>
              </div>
            </form>
          </div>
        </div>
    )
}

export default Login
