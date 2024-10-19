import { useState } from 'react'
import '../App.css'

function UserDashboard() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen w-screen" style={{ backgroundColor: '#F0DCDA' }}>
        <p>Dashboard</p>

      </div>
    </>
  )
}

export default UserDashboard
