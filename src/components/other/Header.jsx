import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {
// const [username, setusername] = useState('')
//   if(!data){
// setusername('admin')
//   }else{
//     setusername(data.firstname)
//   }
const logOutUSer =()=>{
  localStorage.setItem('loggedInUser','')
  // window.location.reload()
  console.log(props.changeuser);
  props.changeUser('')
  
}

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>user</span></h1>
        <button onClick={logOutUSer} className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded '>Log Out</button>
    </div>
  )
}

export default Header