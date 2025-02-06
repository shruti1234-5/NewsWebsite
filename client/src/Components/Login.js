import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault(); 
      axios.post('http://localhost:5000/login', { email, password })
        .then(result => {
          console.log(result);
          if (result.data.status === 'success') {
           localStorage.setItem("userName", result.data.userName);
           localStorage.setItem("userCountry", result.data.userCountry);
            navigate('/'); // Navigate to home page
          } else {
            alert(result.data.message); // Show the message from the server
          }
        })
        .catch(err => {
          console.error(err);
          alert("An error occurred while logging in. Please try again."); // Handle network or server errors
        });
    };

  return (
    <div className="row justify-content-center mt-5">
    <div className="col-md-5 mt-5">
      <div className="bs">
        <h2>Login</h2>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button className="btn btn-primary mt-3"onClick={handleSubmit}>Login</button>
      </div>
    </div>
  </div>
  
  )
}

export default Login
