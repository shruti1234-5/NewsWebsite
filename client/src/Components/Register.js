import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [userCountry,setUserCountry]= useState('')
     const navigate = useNavigate();

    const handleSubmit = (e)=>{
      e.preventDefault()
      if (!name || !email || !password || !userCountry) {
        alert("All fields are required!");
        return;
      }
      axios.post('http://localhost:5000/register',{name,email,password,userCountry})
      .then(result=>{
        console.log(result)
        console.log("Registration successful", result.data);
      navigate('/login')
      })
      .catch(err=> {console.log(err)})
    }
 
 
  
  return (
    <div>
     <div className='row justify-content-center mt-5'>
             <div className='col-md-5 mt-5'>

              <div className='bs'>
                <h2>Register</h2>
                <input type="text" className='form-control mb-3' placeholder='name' required
                value={name} onChange={(e)=>{setName(e.target.value)}}/>

                <input type="email" className='form-control mb-3' placeholder='email' required
                value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

                <input type="text" className='form-control mb-3' placeholder='password' required
                value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>

                <input type="text" className='form-control mb-3' placeholder='country' required
                value={userCountry} onChange={(e)=>{setUserCountry(e.target.value)}}></input>

                <button className='btn btn-primary mt-3'onClick={handleSubmit}>Register</button>
              </div>
             </div>
     </div>
    </div>
  
  )
}

export default Register
