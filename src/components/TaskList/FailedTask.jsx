import React from 'react'

const FailedTask = ({data}) => {
  console.log(data);
  
  return (
<div className='h-full flex-shrink-0 w-[300px] p-5 bg-amber-700 rounded-xl '>
<div className='flex justify-between  items-center'>
    <h3 className='bg-red-600 px-3 py-1 text-sm rounded'> {data.category} </h3>
    <h4 className='text-sm'>{data.date}</h4>
</div>
<h2 className='mt-5 text-xl font-semibold'>{data.title}</h2>
<p className='text-sm mt-2'>{data.description}</p>
<div className='mt-4'>
    <button className='mt-2'>Failed</button>
</div>
</div>
  )
}

export default FailedTask