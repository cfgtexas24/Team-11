import '../App.css';
import ViewAppointments from '@/components/userPageComponents/ViewAppointments';
import ScheduleAppointments from '@/components/userPageComponents/ScheduleAppointments';
import ViewLabReports from '@/components/userPageComponents/ViewLabReports';
import EducationalServices from '@/components/userPageComponents/EducationalServices';
import Feedback from '@/components/userPageComponents/Feedback';
import AdminNavbar from '@/components/AdminNavbar';

function ClientList() {
    return (
        <>
            <div className="grid grid-cols-2 gap-6 p-6 bg-[rgb(247,239,238)] rounded-xl">
                <AdminNavbar />
                <div className="flex flex-wrap justify-between"> 
                    <div className="w-full h-full md:w-1/2 p-2 flex-grow"> 
                        <ViewAppointments />
                    </div>
                    <div className="w-full h-full md:w-1/2 p-2 flex-grow">
                        <ScheduleAppointments />
                    </div>
                </div>
                <div className="flex flex-wrap justify-between mt-4"> 
                    <div className="w-full h-full md:w-4/12 p-2 flex-grow"> 
                        <ViewLabReports />
                    </div>
                    <div className="w-full h-full md:w-5/12 p-2 flex-grow">
                        <EducationalServices />
                    </div>
                    <div className="w-full h-full md:w-3/12 p-2 flex-grow"> 
                        <Feedback />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClientList;
