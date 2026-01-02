import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 screen justify-between gap-5  '>
        <div className='w-[45%] p-10 py-6 px-9 bg-red-700 rounded-xl'>
        <h2 className='text-2xl'> {data.taskCounts.newTask} </h2>
        <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='w-[45%] p-10 py-6 px-9 bg-blue-700 rounded-xl'>
        <h2 className='text-2xl'>{data.taskCounts.completed} </h2>
        <h3 className='text-xl font-medium'>Comleted Task</h3>
        </div>
        <div className='w-[45%] p-10 py-6 px-9 bg-emerald-700 rounded-xl'>
        <h2 className='text-2xl'>{data.taskCounts.active} </h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
        <div className='w-[45%] p-10 py-6 px-9 bg-yellow-700 rounded-xl'>
        <h2 className='text-2xl'>{data.taskCounts.failed} </h2>
        <h3 className='text-xl font-medium'>failed Task</h3>
        </div>
        
    </div>
  )
}

export default TaskListNumber