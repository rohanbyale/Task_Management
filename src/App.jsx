import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
const [user, setuser] = useState(null)
const [loggedInUserData, setloggedInUserData] = useState(null)

const [userData,setuserData ]= useContext(AuthContext)

useEffect(()=>{
  const loggedInUser =localStorage.getItem('loggedInUser')

 if(loggedInUser){

const userData  =JSON.parse(loggedInUser)
setuser (userData.role)
setloggedInUserData(userData.data)

 }
  
},[])

const handleLogin =(email,password) =>{
if(email == 'admin@me.com' && password == '123'){
  setuser('admin')
  // console.log(user);
  localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
} else if(userData) {
  const employee = userData.find((e)=>email == e.email && e.password == password)
  if(employee){
    setuser('employee')
    setloggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
  }
  // console.log("this is user")

} else{
  alert ("Invalid Credentials")
}
}
 

  
  return (
    <div>
      <>
{ !user ? <Login handleLogin={handleLogin} /> :'' }
{user == 'admin' ? <AdminDashboard changeUser={setuser}  /> : (user == 'employee'? <EmployeeDashboard  changeUser={setuser}   data={loggedInUserData} /> :null)   }

{/* <EmployeeDashboard /> */}
{/* <AdminDashboard /> */}

      </>
    </div>
  )
}

export default App