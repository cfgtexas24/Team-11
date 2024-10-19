import { useState } from 'react'
import '../App.css'

function UserDashboard() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen w-screen bg-blue-500">
        <p>Dashboard</p>

      </div>
    </>
  )
}

export default UserDashboard
