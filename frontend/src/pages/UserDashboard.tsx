import '../App.css'
import ViewAppointments from '@/components/userPageComponents/ViewAppointments';
import ScheduleAppointments from '@/components/userPageComponents/ScheduleAppointments';
import ViewLabReports from '@/components/userPageComponents/ViewLabReports';

function UserDashboard() {

  return (
    <>
      <div className="h-screen w-screen" style={{ backgroundColor: '#F7EFEE' }}>
        <p>dashboard</p>
        <div>
          <ViewAppointments/>
        </div>
        <div>
          <ScheduleAppointments/>
        </div>
        <div>
          <ViewLabReports />
        </div>
      </div>
    </>
  );
}

export default UserDashboard
