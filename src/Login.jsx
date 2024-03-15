// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios';
// // import Registration from './Registration';
// export default function Login() {
//   const[username,setUsername]=useState('');
//   const[password,setPassword]=useState('');
//   const[LoginError,setLoginError]=useState('');
//     const navigate=useNavigate();
//     const handleUsername=(event)=>{
//       setUsername(event.target.value);
//     }

//     const handlePassword=(event)=>{
//       setPassword(event.target.value); 
//     }
//     const handleFormData= async(event)=>{
//       event.preventDefault();
//       try{
//         const response=await axios.post('http://localhost:3000/login',{
//           username:username,
//           password:password
//         })
//         // console.log(response);
//         localStorage.setItem('jwttoken',response.data.token);
//         navigate('/viewpost');
//       }
//       catch (error){
//         setLoginError("incorrect username or password");
//       }
//     }
//       // if(username==='' && password===''){
//       //   alert("Logged In Successfully");
//       //   navigate('/posts');
//       // }
//       // else{
//       //   setLoginError("incorrect username or password");
//       // }
//     //   try{
//     //    const result=await axios.get('http://localhost:3000/register',{
//     //       username:username,
//     //       password:password
//     //      })
//         //  if(result===201){
//         //   navigate('/posts');
//         //  }
//     //   }
//     //   catch (error){

//     //   }
//     // }
    
//     // const handleApi=()=>{
//     //   // console.log({username,password});
//     //   axios.post('http://localhost:3000/register',{
//     //     username:username,
//     //     password:password
//     //   }).then(result=>{ 
//     //     console.log(result);
//     //     localStorage.setItem('token',result.data.token) 
//     //     navigate('/posts');

//     //   })
//     //   .catch(error=>{
//     //     alert("error");
//     //   })
//     // }
//   return (
//     <div>
//       <h1>Login</h1>
//     <form onSubmit={handleFormData}>
//       <label>
//         username
//       </label>
//       <input type='text' value={username} onChange={handleUsername}></input>
//       <label>Password</label>
//       <input type='password' value={password} onChange={handlePassword}></input>
//       <button>Submit</button>
//       {/* //onClick={handleApi} */}
//     </form>
//     <h4>{LoginError}</h4>
//       {/* <button onClick={()=>navigate("/posts/:postId")}>Login</button> */}
//     </div>
//   )

//   }

// //localstorage.setitem()


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Import the CSS file

import Registration from './Registration';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value); 
  }

  const handleFormData = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', {
        username: username,
        password: password
      });
      localStorage.setItem('jwttoken', response.data.token);
      navigate('/viewpost');
    } catch (error) {
      setLoginError("Incorrect username or password");
    }
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleFormData}>
        <label>Username</label>
        <input type='text' value={username} onChange={handleUsername}></input>
        <label>Password</label>
        <input type='password' value={password} onChange={handlePassword}></input>
        <button>Submit</button>
      </form>
      <h4 className="error">{loginError}</h4>
    </div>
  );
}

