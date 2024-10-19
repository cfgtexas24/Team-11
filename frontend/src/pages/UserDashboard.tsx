import '../App.css'
import ViewAppointments from '@/components/userPageComponents/ViewAppointments';
import ScheduleAppointments from '@/components/userPageComponents/ScheduleAppointments';
import ViewLabReports from '@/components/userPageComponents/ViewLabReports';
import EducationalServices from '@/components/userPageComponents/EducationalServices';
import Feedback from '@/components/userPageComponents/Feedback';
import Navbar from '@/components/navbar';

function UserDashboard() {

  return (
    <>
      <div className="h-screen w-screen" style={{ backgroundColor: '#F7EFEE' }}>
        <div>
          <Navbar />
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div>
            <ViewAppointments/>
          </div>
          <div>
            <ScheduleAppointments/>
          </div>
          <div>
            <ViewLabReports />
          </div>
          <div>
            <EducationalServices />
          </div>
          <div>
            <Feedback />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard
