import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:9000/user/" + username)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            toast.error('Please enter a valid username.');
          } else {
            if (resp.password === password) {
              toast.success('Login successful.');
              navigate('/home');
            } else {
              toast.error('Invalid credentials. Please try again.');
            }
          }
        })
        .catch((err) => {
          toast.error('Login failed due to: ' + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
      result = false;
      toast.warning('Please enter a valid username.');
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning('Please enter your password.');
    }
    return result;
  };

  return (
    <div className='row'>
      <div className='offset-lg-3 col-lg-6'>
        <form action='' onSubmit={ProceedLogin} className='container'>
          <div className='card'>
            <div className='card-header'>
              <h2>User Login</h2>
            </div>
            <div className='card-body'>
              <div className='form-group'>
                <label htmlFor=''>User Name <span className='errmsg'>*</span></label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' className='form-control' />
              </div>
              <br />
              <div className='form-group'>
                <label htmlFor=''>Password <span className='errmsg'>*</span></label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' className='form-control' />
              </div>
              <br />
            </div>
            <div className='card-footer'>
              <button type='submit' className='btn btn-primary'>
                Login
              </button>
              <Link className='btn btn-success ms-2' to='/register'>
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
