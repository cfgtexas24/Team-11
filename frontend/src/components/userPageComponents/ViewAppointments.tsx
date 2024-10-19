import * as React from "react";
import '../../App.css';
import { Calendar } from "@/components/ui/calendar";

interface Appointment {
    _id: string;
    clinicName: string;
    date: string;
    time: string;
    physician: string;
    type: string;
}

function ViewAppointments() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [appointments, setAppointments] = React.useState<Appointment[]>([]); // To store appointments

    // Fetch the user's appointments when the component mounts
    React.useEffect(() => {
        const userId = localStorage.getItem('userId'); // Get userId from localStorage

        if (userId) {
            fetch(`http://localhost:8000/api/user/${userId}/appointments`)
                .then((response) => response.json())
                .then((data: Appointment[]) => {
                    setAppointments(data); // Set the appointments in state
                })
                .catch((error) => {
                    console.error('Error fetching appointments:', error);
                });
        }
    }, []);

    return (
        <>
            <div className="justify-around rounded-lg shadow-md" style={{ backgroundColor: '#F0DCDA' }}>
                <div className="flex flex-row">
                    {/* Appointments List */}
                    <div className="text-left w-1/3">
                        <h1>Your Appointments</h1>
                        <h3>Upcoming Appointments</h3>
                        <div>
                            {appointments.length > 0 ? (
                                <ul>
                                    {appointments.map((appointment) => (
                                        <li key={appointment._id} className="mb-2">
                                            <strong>Clinic:</strong> {appointment.clinicName}<br />
                                            <strong>Date:</strong> {new Date(appointment.date).toLocaleDateString()}<br />
                                            <strong>Time:</strong> {appointment.time}<br />
                                            <strong>Physician:</strong> {appointment.physician}<br />
                                            <strong>Type:</strong> {appointment.type}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No upcoming appointments</p>
                            )}
                        </div>
                    </div>

                    {/* Calendar */}
                    <div className="ml-auto">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewAppointments;
