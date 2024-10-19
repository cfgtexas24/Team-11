import React, { useState } from 'react';

const ScheduleAppointments: React.FC = () => {
    const [clinicName, setClinicName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [physician, setPhysician] = useState('');
    const [type, setType] = useState('prenatal care');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log({
            clinicName,
            date,
            time,
            physician,
            type,
        });
        // Reset form fields
        setClinicName('');
        setDate('');
        setTime('');
        setPhysician('');
        setType('prenatal care');
    };

    return (
        <div className="justify-around w-1/4 h-auto md:w-1/4 md:h-1/4 rounded-lg shadow-md" style={{ backgroundColor: '#B6D8DB' }}>
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
                        type="time"
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
        </div>
    );
};

export default ScheduleAppointments;
