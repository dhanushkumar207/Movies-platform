import React,{useState} from 'react';
export const Admin=({togglePage})=>{
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[name,setName]=useState('');
    const[id,setId]=useState('');
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }
    return(
        <>
        <form className='admin' onSubmit={handleSubmit}>
        <label htmlFor='id'>Admin id</label>
            <input value={id} onChange={(e)=>setId(e.target.value)} type="id"  placeholder="Id" id="id" name="id"/>
            <label htmlFor='name'>Full name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="name"  placeholder="Fullname" id="name" name="name"/>
            <label htmlfor="email">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="your@gmail.com" id="email" name="email"/>
            <label htmlfor="password">Password</label>
            <input value={password}onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="........." id="password" name="password"/>
            <button type='submit'>Log In</button>
        </form>
        <p className='declare'>
        Already have an account?{' '}
        <span  onClick={togglePage}>
          Log in here
        </span>
        .
      </p>
        </>
    )
}
export default Admin;