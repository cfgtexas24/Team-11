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
                    <div > {/* Set width and padding */}
                        <ViewAppointments />
                    </div>
                    <div > {/* Set width and padding */}
                        <ScheduleAppointments />
                    </div>
                </div>
                <div className="flex flex-wrap justify-between"> {/* New row for the remaining components */}
                    <div> {/* Set width and padding */}
                        <ViewLabReports />
                    </div>
                    <div > {/* Set width and padding */}
                        <EducationalServices />
                    </div>
                    <div > {/* Set width and padding */}
                        <Feedback />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserDashboard;
