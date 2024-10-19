import '../App.css';
import ViewAppointments from '@/components/userPageComponents/ViewAppointments';
import ScheduleAppointments from '@/components/userPageComponents/ScheduleAppointments';
import ViewLabReports from '@/components/userPageComponents/ViewLabReports';
import EducationalServices from '@/components/userPageComponents/EducationalServices';
import Feedback from '@/components/userPageComponents/Feedback';
import ClientNavbar from '@/components/ClientNavbar';

function UserDashboard() {
    return (
        <>
            <div className="bg-[#F7EFEE]">
                <div>
                    <ClientNavbar />
                </div>
                <div className="h-100... w-100... left-0 mt-20" >
                    <div className="flex flex-wrap justify-between"> 
                        <div className="w-full h-auto md:w-1/2 p-3"> 
                            <ViewAppointments />
                        </div>
                        <div className="w-full h-auto md:w-1/2 p-3">
                            <ScheduleAppointments />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between mt-4"> 
                        <div className="w-full h-auto md:w-4/12 p-3"> 
                            <ViewLabReports />
                        </div>
                        <div className="w-full h-auto md:w-5/12 p-3">
                            <EducationalServices />
                        </div>
                        <div className="w-full h-auto md:w-3/12 p-3"> 
                            <Feedback />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserDashboard;
