import '../App.css';
import ViewAppointments from '@/components/userPageComponents/ViewAppointments';
import ScheduleAppointments from '@/components/userPageComponents/ScheduleAppointments';
import ViewLabReports from '@/components/userPageComponents/ViewLabReports';
import EducationalServices from '@/components/userPageComponents/EducationalServices';
import Feedback from '@/components/userPageComponents/Feedback';

function UserDashboard() {
    return (
        <>
            <div className="h-screen w-screen absolute left-0" style={{ backgroundColor: '#F7EFEE' }}>
                <div className="flex flex-wrap justify-between"> 
                    <div className="w-full md:w-1/2 p-2"> 
                        <ViewAppointments />
                    </div>
                    <div className="w-full md:w-1/2 p-2">
                        <ScheduleAppointments />
                    </div>
                </div>
                <div className="flex flex-wrap justify-between mt-4"> 
                    <div className="w-full md:w-1/3 p-2"> 
                        <ViewLabReports />
                    </div>
                    <div className="w-full md:w-1/3 p-2">
                        <EducationalServices />
                    </div>
                    <div className="w-full md:w-1/3 p-2"> 
                        <Feedback />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserDashboard;
