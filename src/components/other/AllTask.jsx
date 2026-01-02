// import React, { useContext } from "react";
// import { AuthContext } from "../../context/AuthProvider";

// const AllTask = () => {
//   const authData = useContext(AuthContext);

//   return (
//     <div className="bg-[#181818] p-6 rounded-xl mt-6 h-80 shadow-lg border border-[#2a2a2a]">
//       {/* Header Row */}
//       <div className="bg-[#262626] py-3 rounded-lg flex justify-between px-6 text-gray-200 font-semibold border border-[#333]">
//         <h2 className="w-1/5 text-center">Employee</h2>
//         <h3 className="w-1/5 text-center">New Task</h3>
//         <h5 className="w-1/5 text-center">Active</h5>
//         <h5 className="w-1/5 text-center">Completed</h5>
//         <h5 className="w-1/5 text-center">Failed</h5>
//       </div>

//       {/* Employees Task Rows */}
//       <div className="h-[80%] overflow-y-auto mt-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
//         {authData.employees.map((elem, index) => (
//           <div
//             key={index}
//             className="bg-[#1f1f1f] py-2 rounded-lg flex justify-between px-6 text-gray-300 mt-2 border border-[#2b2b2b] hover:bg-[#282828] transition-all duration-200 cursor-pointer"
//           >
//             <h2 className="w-1/5 text-center font-medium">{elem.firstname}</h2>
//             <h3 className="w-1/5 text-center">  {elem.taskCounts.newTask} </h3>
//             <h5 className="w-1/5 text-center text-yellow-400 font-medium">{elem.taskCounts.active} </h5>
//             <h5 className="w-1/5 text-center text-green-400 font-medium">{elem.taskCounts.completed}</h5>
//             <h5 className="w-1/5 text-center text-red-400 font-medium">{elem.taskCounts.failed}</h5>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllTask;
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData,setuserData] = useContext(AuthContext);

  return (
    <div className="bg-[#0d0d0d] backdrop-blur-xl border border-[#1b1b1b] rounded-2xl p-6 mt-6 shadow-[0_0_60px_rgba(0,0,0,0.6)]">

      {/* Table Header */}
      <div className="flex justify-between px-5 py-2 text-[11px] tracking-wide text-[#888] uppercase border-b border-[#202020]">
        <p className="w-1/5 text-left">Employee</p>
        <p className="w-1/5 text-center">New</p>
        <p className="w-1/5 text-center">Active</p>
        <p className="w-1/5 text-center">Done</p>
        <p className="w-1/5 text-center">Failed</p>
      </div>

      {/* Rows */}
      <div className="h-[80%] overflow-y-auto mt-2 pr-1 scrollbar-thin scrollbar-thumb-[#2b2b2b] scrollbar-track-transparent">

        {userData.map((elem, idx) => {
          const { newTask, active, completed, failed } = elem.taskCounts;
          const initials = elem.firstname.charAt(0).toUpperCase();

          const total = newTask + active + completed + failed || 1;
          const progress = (completed / total) * 100;

          return (
            <div
              key={idx}
              className="border-b border-[#1b1b1b] px-5 py-3 hover:bg-[#141414] transition-all duration-300 group"
            >
              <div className="flex items-center text-[#eaeaea] text-sm justify-between">

                {/* Avatar + Name */}
                <div className="w-1/5 flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#ffffff10] border border-[#2c2c2c] text-white font-medium group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition">
                    {initials}
                  </div>
                  <span className="font-light tracking-wide">{elem.firstname}</span>
                </div>

                {/* Counts */}
                <span className="w-1/5 text-center text-[#7da6f8]">{newTask}</span>
                <span className="w-1/5 text-center text-[#ffd580]">{active}</span>
                <span className="w-1/5 text-center text-[#92ffbf]">{completed}</span>
                <span className="w-1/5 text-center text-[#ff8b8b]">{failed}</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-[#1a1a1a] h-1.5 rounded-full mt-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#4bffa2] to-[#8afff0] rounded-full transition-[width] duration-[1200ms]"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;

