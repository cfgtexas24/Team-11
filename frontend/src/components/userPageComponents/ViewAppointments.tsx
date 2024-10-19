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
                    console.error('Successfully fetched appointments');
                })
                .catch((error) => {
                    console.error('Error fetching appointments:', error);
                });
        }
    }, []);

    // Function to handle appointment deletion
    const handleDelete = (appointmentId: string) => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            fetch(`http://localhost:8000/api/user/${userId}/appointments/${appointmentId}`, {
                method: 'DELETE',
            })
                .then((response) => {
                    if (response.ok) {
                        // Remove the deleted appointment from state
                        setAppointments((prevAppointments) =>
                            prevAppointments.filter((appointment) => appointment._id !== appointmentId)
                        );
                    } else {
                        console.error('Failed to delete appointment');
                    }
                })
                .catch((error) => {
                    console.error('Error deleting appointment:', error);
                });
        }
    };

    return (
        <>
            <div className="justify-around rounded-lg shadow-md p-4 min-h[70%] h-full" style={{ backgroundColor: '#F0DCDA' }}>
                <div className="flex flex-row">
                    {/* Appointments List */}
                    <div className="text-left w-1/2">
                        <h1 className=" text-2xl mb-2 font-bold">Your Appointments</h1>
                        <h3 className=" font-semibold">Upcoming Appointments</h3>&nbsp;
                        <div>
                            {appointments.length > 0 ? (
                                <ul>
                                    {appointments.map((appointment) => (
                                        <div className="bg-[#F7EFEE] rounded-xl ml-2 relative" key={appointment._id}>
                                            {/* Delete button (X icon) */}
                                            <button
                                              onClick={() => handleDelete(appointment._id)}
                                              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                                              style={{ fontSize: '12px', padding: '2px', lineHeight: '1' }} // Smaller font size, padding, and line height
                                          >
                                              &times;
                                          </button>
                                            <li className="mb-2 p-4">
                                                <strong>Date:</strong> {new Date(appointment.date).toLocaleDateString()}&emsp;
                                                <strong>Time:</strong> {appointment.time}<br />
                                                <strong>Clinic:</strong> {appointment.clinicName}<br />
                                                <strong>Physician:</strong> {appointment.physician}<br />
                                                <strong>Type:</strong> {appointment.type}
                                            </li>
                                        </div>
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
                            className="rounded-md"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewAppointments;
