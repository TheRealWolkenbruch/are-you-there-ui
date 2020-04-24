import React, {useState, useContext} from 'react';
import AuthContext from './../context/auth-context.js'

const Auth = () => {
  const auth = useContext(AuthContext)
  const[email,setEmail] = useState('');
  const[password,setPassword]= useState('');
  
  const signin = async() => {
    setEmail('')
    setPassword('')
  }

  return(
  <form>
      <label for="email"><b>Email</b></label>
      <input type="email" placeholder="Enter email" name="email" val={email} onChange={(event)=>setEmail(event.target.value)} required />

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" val={password} onChange={(event)=>setPassword(event.target.value)} required/>

      <button onClick={()=>signin()} >signin</button>
      {auth}
  </form>
  )
};

export default Auth;
