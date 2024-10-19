import '../App.css'
import ViewAppointments from '@/components/ViewAppointments'
import ScheduleAppointments from '@/components/userPageComponents/ScheduleAppointments'

function UserDashboard() {

  return (
    <>
      <div className="h-screen w-screen" style={{ backgroundColor: '#F7EFEE' }}>
        <p>dashboard</p>
        <ViewAppointments/>
      </div>
      <div>
      <ScheduleAppointments/>
      </div>
    </>
  );
}

export default UserDashboard
