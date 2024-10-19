import React, { useState } from 'react';

const ScheduleAppointments: React.FC = () => {
    const [clinicName, setClinicName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [physician, setPhysician] = useState('');
    const [type, setType] = useState('prenatal care');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const userId = localStorage.getItem('userId'); // Get the user ID from localStorage

        if (!userId) {
            setError('User is not logged in');
            return;
        }

        // Prepare appointment data
        const appointmentData = {
            clinicName,
            date: new Date(date).toISOString(),
            time,
            physician,
            type,
        };

        try {
            const response = await fetch(`http://localhost:8000/api/user/${userId}/appointments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add auth token or other headers if needed
                },
                body: JSON.stringify(appointmentData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to create appointment');
            }

            setSuccessMessage('Appointment successfully scheduled!');
            setError('');

            // Optionally reset form fields after successful submission
            setClinicName('');
            setDate('');
            setTime('');
            setPhysician('');
            setType('prenatal care');

        } catch (error: any) {
            setError(error.message);
            setSuccessMessage('');
        }
    };

    return (
        <div className="justify-around rounded-lg shadow-md" style={{ backgroundColor: '#B6D8DB' }}>
            <h1>Schedule Your Appointment</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="clinicName">Clinic Name:</label>
                    <input
                        type="text"
                        id="clinicName"
                        value={clinicName}
                        onChange={(e) => setClinicName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="time">Time:</label>
                    <input
                        type="string"
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="physician">Physician:</label>
                    <input
                        type="text"
                        id="physician"
                        value={physician}
                        onChange={(e) => setPhysician(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="type">Type:</label>
                    <select
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    >
                        <option value="prenatal care">Prenatal Care</option>
                        <option value="checkup">Checkup</option>
                        <option value="follow-up">Follow-up</option>
                    </select>
                </div>
                <button type="submit">Schedule Appointment</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
    );
};

export default ScheduleAppointments;
