import '../App.css';
import ViewAppointments from '@/components/userPageComponents/ViewAppointments';
import ScheduleAppointments from '@/components/userPageComponents/ScheduleAppointments';
import ViewLabReports from '@/components/userPageComponents/ViewLabReports';
import EducationalServices from '@/components/userPageComponents/EducationalServices';
import Feedback from '@/components/userPageComponents/Feedback';

function UserDashboard() {
    return (
        <>
            <div className="h-screen w-screen" style={{ backgroundColor: '#F7EFEE' }}>
                <div className="flex flex-wrap justify-between"> {/* Use flexbox for layout */}
                    <div className="w-full md:w-1/2 p-2"> {/* Set width and padding */}
                        <ViewAppointments />
                    </div>
                    <div className="w-full md:w-1/2 p-2"> {/* Set width and padding */}
                        <ScheduleAppointments />
                    </div>
                </div>
                <div className="flex flex-wrap justify-between mt-4"> {/* New row for the remaining components */}
                    <div className="w-full md:w-1/3 p-2"> {/* Set width and padding */}
                        <ViewLabReports />
                    </div>
                    <div className="w-full md:w-1/3 p-2"> {/* Set width and padding */}
                        <EducationalServices />
                    </div>
                    <div className="w-full md:w-1/3 p-2"> {/* Set width and padding */}
                        <Feedback />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserDashboard;
