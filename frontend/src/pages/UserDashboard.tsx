import '../App.css'
import ViewAppointments from '@/components/ViewAppointments'

function UserDashboard() {

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
