import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from "@/components/ui/select";

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
                },
                body: JSON.stringify(appointmentData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to create appointment');
            }

            setSuccessMessage('Appointment successfully scheduled!');
            setError('');

            // Reset form fields after successful submission
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
        <div className="justify-around rounded-lg shadow-md p-6" style={{ backgroundColor: '#B6D8DB' }}>
            <h1>Schedule Your Appointment</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 flex items-center">
                    <Label htmlFor="clinicName" className="w-1/4">Clinic Name:</Label>
                    <Input
                        type="text"
                        id="clinicName"
                        value={clinicName}
                        onChange={(e) => setClinicName(e.target.value)}
                        required
                        className="w-3/4"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <Label htmlFor="date" className="w-1/4">Date:</Label>
                    <Input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className="w-3/4"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <Label htmlFor="time" className="w-1/4">Time:</Label>
                    <Input
                        type="time"
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                        className="w-3/4"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <Label htmlFor="physician" className="w-1/4">Physician:</Label>
                    <Input
                        type="text"
                        id="physician"
                        value={physician}
                        onChange={(e) => setPhysician(e.target.value)}
                        required
                        className="w-3/4"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <Label htmlFor="type" className="w-1/4">Type:</Label>
                    <Select onValueChange={(value) => setType(value)} value={type}>
                        <SelectTrigger className="w-3/4">
                            <SelectValue placeholder="Select appointment type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="prenatal care">Prenatal Care</SelectItem>
                            <SelectItem value="checkup">Checkup</SelectItem>
                            <SelectItem value="follow-up">Follow-up</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex justify-end">
                    <Button type="submit">Schedule Appointment</Button>
                </div>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
    );
};

export default ScheduleAppointments;
