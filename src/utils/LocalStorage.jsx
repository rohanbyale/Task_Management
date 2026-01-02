localStorage.clear()

const employee = [
  {
    id: 1,
    firstname: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Create UI Layout",
        description: "Design main dashboard UI in Figma.",
        date: "2025-11-01",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix Login Bug",
        description: "Resolve authentication state persistence issue.",
        date: "2025-11-02",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team Standup Meeting",
        description: "Daily standup at 9 AM with frontend team.",
        date: "2025-11-03",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update Documentation",
        description: "Add new API integration steps to docs.",
        date: "2025-11-04",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstname: "Vivaan",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Backend API Optimization",
        description: "Reduce response time of User API.",
        date: "2025-11-01",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Database Cleanup",
        description: "Remove unused columns and unused tables.",
        date: "2025-11-02",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Security Meeting",
        description: "Discuss password hashing strategy.",
        date: "2025-11-03",
        category: "Meeting",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Server Health Check",
        description: "Check CPU and memory usage.",
        date: "2025-11-04",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstname: "Ishaan",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Client Presentation",
        description: "Prepare slides for project demo.",
        date: "2025-11-01",
        category: "Presentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Email Follow-up",
        description: "Send weekly progress update to client.",
        date: "2025-11-02",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Research New Library",
        description: "Check alternatives to current chart library.",
        date: "2025-11-03",
        category: "Research",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Bug Evaluation",
        description: "Analyze errors in error logs.",
        date: "2025-11-04",
        category: "Debugging",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstname: "Rohan",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Make Dashboard Widget",
        description: "Create summary widgets for stats screen.",
        date: "2025-11-01",
        category: "Frontend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review merge requests from teammates.",
        date: "2025-11-02",
        category: "Code Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize Styles",
        description: "Reduce CSS duplication across modules.",
        date: "2025-11-03",
        category: "Refactor",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Layout Bug",
        description: "Resolve margin and spacing issues in profile page.",
        date: "2025-11-04",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstname: "Arjun",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Write Unit Tests",
        description: "Add test cases for User service functions.",
        date: "2025-11-01",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "System Backup",
        description: "Create weekly backup of production DB.",
        date: "2025-11-02",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "UI Feedback Meeting",
        description: "Gather UI feedback from product team.",
        date: "2025-11-03",
        category: "Meeting",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Documentation Update",
        description: "Update project wiki with new updates.",
        date: "2025-11-04",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];




const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage=() =>{
localStorage.setItem('employees',JSON.stringify(employee))
localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
const employees =JSON.parse(localStorage.getItem('employees'))
const admin =JSON.parse(localStorage.getItem('admin'))

return{employees,admin}
}