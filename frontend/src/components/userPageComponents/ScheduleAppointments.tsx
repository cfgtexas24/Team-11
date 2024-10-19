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
        <div className="justify-around rounded-lg shadow-md p-6" style={{ backgroundColor: '#B6D8DB' }}>
            <h1 className="text-xl mb-4">Schedule Your Appointment</h1>
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
        </div>
    );
};

export default ScheduleAppointments;