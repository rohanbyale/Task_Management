// import React from 'react'
// import Header from '../other/Header'

// const AdminDashboard = () => {
//   return (
//     <div className='h-screen w-full p-10 '>
//         <Header />
//         <div>
//             <form className='flex flex-wrap w-full items-start  bg-red-950 justify-between'>
//                 <div className='w-1/2 '>
//                      <div>
//                     <h3>Task Title</h3>
//                 <input type="text" placeholder='Make a ui Desing' />
//                 </div>
//                      <div>
//                  <h3>Date</h3>
//                 <input type="date" />
//                </div>
//                 <div>
//                     <h3>Assign to</h3>
//                 <input type="text" placeholder='employee name' />
//                 </div>
//                 <div>
//                     <h3>Category</h3>
//                 <input type="text" placeholder='Desing or dev etc' />
//                 </div>
//                 </div>
               
//                <div className='w-1/2'>
//                  <h3>Description</h3>
//                 <textarea name="" id=""></textarea>
//                </div>
              
// <button>Create Task</button>
//             </form>
//         </div>

//     </div>
//   )
// }

// export default AdminDashboard

import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-[#0c0f14] text-white p-10">
      <Header  changeUser={props.changeUser}  />
<CreateTask />
<AllTask />
    </div>
  );
};



export default AdminDashboard;

