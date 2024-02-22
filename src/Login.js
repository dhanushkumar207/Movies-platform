import React ,{useState} from 'react';
import { useNavigate } from 'react-router';
export const Login=({togglePage})=>{
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const  navigate=useNavigate();
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
        navigate('/Movie')

    }
    return(
        <>
        <form className='login' onSubmit={handleSubmit}>
            <label  htmlfor="email">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="your@gmail.com" id="email" name="email"/>
            <label  htmlfor="password">Password</label>
            <input value={password}onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="........." id="password" name="password"/>
            <button type='submit'>Log In</button>
        </form>
        <p className='declare'>
        Don't have an account?{' '}
        <span  onClick={togglePage}>
          Sign up here
        </span>
        .
      </p>
        </>
            )
}
export default Login;