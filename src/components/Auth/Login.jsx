import React, { useState } from 'react'

const Login = ( {handleLogin}) => {
// console.log(handleLogin);


    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler =(e)=>{
handleLogin(email , password)

        e.preventDefault();
       setemail("")
       setpassword("")
    //  console.log(email);
        
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-700 p-20'>
        <form
      onSubmit={submitHandler}
         className='flex flex-col items-center justify-center gap-5'>
          
          <input 
          value={email}
        onChange={(e)=>{
    setemail(e.target.value)
            
        }}
          required
            className='border-2 outline-none bg-transparent border-emerald-600 rounded-full text-xl py-4 px-4 placeholder:text-gray-400' 
            type="email" 
            placeholder='Enter Your Mail' 
          />

          <input 
          value={password}
        onChange={(e)=>{
    setpassword(e.target.value)
            
        }}
          
          required
            className='border-2 outline-none bg-transparent border-emerald-600 rounded-full text-xl py-4 px-4 placeholder:text-gray-400 mt-7'  
            type="password" 
            placeholder='Enter Your Password' 
          />

          <button className='bg-emerald-600 text-white rounded-full text-xl mt-5 px-28 py-3'>
            Login
          </button>

        </form>
      </div>
    </div>
  )
}

export default Login
