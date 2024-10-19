import * as React from "react";
import '../../App.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from "@/components/ui/select";

function EducationalServices() {
    const [date, setDate] = React.useState<string>('');
    const [type, setType] = React.useState<string>(''); // State to hold selected class

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Handle form submission logic here
        console.log("Expected Due Date:", date);
        console.log("Selected Class:", type);

        // Reset form fields after submission
        setDate('');
        setType('');
    };

    return (
        <>
            <div className="justify-around rounded-lg shadow-md p-4" style={{ backgroundColor: '#B6D8DB' }}>
                <div className="text-left">
                    <h1 className="text-2xl mb-2 font-bold">Educational Services</h1>
                    <div>
                        <h3>Upcoming Classes:</h3>&nbsp;
                        <ul>
                          <li>Saturday, November 2, "Intro to Birth" 10am - 12:30 PM AT 2612 MLK Jr. BLVD. Dallas, TX 75215</li>&nbsp;
                          <li>Thursday, December 5th, "Intro to Birth" 6pm - 8:30 PM AT 2612 MLK Jr. BLVD. Dallas, TX 75215</li>&nbsp;
                          <li>Thursday, December 12th, "Postpartum and Newborn Care" 6pm - 7:30 PM AT 2612 MLK Jr. BLVD. Dallas, TX 75215</li>
                        </ul>
                    </div>
                    &nbsp;
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <Label htmlFor="date" className="block">What is your expected due date?</Label>
                            <Input
                                type="date"
                                id="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                                className="w-full mt-1"
                            />
                        </div>
                        <div className="mb-4">
                            <Label htmlFor="type" className="block">What class are you signing up for?</Label>
                            <Select onValueChange={(value) => setType(value)} value={type}>
                                <SelectTrigger className="w-full mt-1">
                                    <SelectValue placeholder="Select a class" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="november-2">November 2, "Intro to Birth"</SelectItem>
                                    <SelectItem value="december-5">December 5th, "Intro to Birth"</SelectItem>
                                    <SelectItem value="december-12">December 12th, "Postpartum and Newborn Care"</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex justify-end">
                            <Button type="submit">Sign Up</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default EducationalServices;
