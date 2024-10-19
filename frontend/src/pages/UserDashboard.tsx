import { useState } from 'react'
import '../App.css'
import ViewAppointments from '@/components/ViewAppointments'

function UserDashboard() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen w-screen" style={{ backgroundColor: '#F7EFEE' }}>
        <p>Dashboard</p>
        <ViewAppointments/>

      </div>
    </>
  )
}

export default UserDashboard
