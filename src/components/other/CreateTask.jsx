import React, { useContext, useState } from 'react'
import Header from '../other/Header'
import NewTask from '../TaskList/NewTask'
import FailedTask from '../TaskList/FailedTask'
import { AuthContext } from '../../context/AuthProvider'

const AdminDashboard = () => {

  const [userData,setuserData] = useContext(AuthContext);

  const [tasktitle, settasktitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
const [taskDate, settaskDate] = useState('')
const [asignTo, setasignTo] = useState('')
const [category, setcategory] = useState('')

const [newtask, setNewtask] = useState('')

  const submitHandler =(e)=>{
e.preventDefault()
// console.log(tasktitle, taskDate , taskDescription,category,);
setNewtask({tasktitle,taskDescription,category,taskDate, active:false,NewTask:true, FailedTask:false, CompletedTask:false});

const data =userData
console.log(data);

data.forEach(function(elem){

if(asignTo == elem.firstname){
  elem.tasks.push(newtask)
  elem.taskCounts.newTask=elem.taskCounts.newTask+1
console.log(elem);

  
}
  
})

setuserData(data)
console.log(data)
settasktitle('')
settaskDate('')
setasignTo('')
settaskDescription('')
setcategory('')

  };
  return (
    <div className='min-h-screen w-full p-10 bg-[#111] text-white'>
     

      <div className='mt-10'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-wrap w-full items-start justify-between bg-[#1b1b1b] p-8 rounded-2xl border border-white/10 gap-8'>

          {/* LEFT SIDE */}
          <div className='w-1/2 space-y-5'>
            <div>
              <h3 className='mb-1 text-sm text-gray-300'>Task Title</h3>
              <input
              value={tasktitle}
              onChange={(e)=>{
                 settasktitle(e.target.value)
              }}
                type="text"
                placeholder='Make a UI Design'
                className='w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-2 outline-none focus:border-indigo-500 transition'
              />
            </div>

            <div>
              <h3 className='mb-1 text-sm text-gray-300'>Date</h3>
              <input
               value={taskDate}
              onChange={(e)=>{
                 settaskDate(e.target.value)
              }}
                type="date"
                className='w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-2 outline-none focus:border-indigo-500 transition'
              />
            </div>

            <div>
              <h3 className='mb-1 text-sm text-gray-300'>Assign To</h3>
              <input
               value={asignTo}
              onChange={(e)=>{
                setasignTo(e.target.value)
              }}
                type="text"
                placeholder='Employee name'
                className='w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-2 outline-none focus:border-indigo-500 transition'
              />
            </div>

            <div>
              <h3 className='mb-1 text-sm text-gray-300'>Category</h3>
              <input
               value={category}
              onChange={(e)=>{
                 setcategory(e.target.value)
              }}
                type="text"
                placeholder='Design / Development etc'
                className='w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-2 outline-none focus:border-indigo-500 transition'
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className='w-1/2'>
            <h3 className='mb-1 text-sm text-gray-300'>Description</h3>
            <textarea
             value={taskDescription}
              onChange={(e)=>{
                 settaskDescription(e.target.value)
              }}
              className='w-full h-48 bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-3 resize-none outline-none focus:border-indigo-500 transition'
              placeholder='Write task details...'
            ></textarea>
          </div>

          {/* BUTTON */}
          <div className='w-full flex justify-end'>
            <button
              className='bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition px-6 py-2 rounded-lg font-medium shadow-md'
            >
              Create Task
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default AdminDashboard
