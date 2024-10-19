import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import LoginNavbar from '@/components/LoginNavbar';
import { disconnect } from 'process';


type UserInfo = {
    firstName: string;
    lastName: string;
    middleInitial?: string;
    email: string;
    phone: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    zipCode: string;
    height: number;
    weight: number;
    numberPastPregnancies: number;
    allergies?: string;
    currentMedications?: string;
    previousMedication?: string;
    familyMedicalHistory?: string;
    previousMedicalProcedures?: string;
    state: string;
    dateOfBirth: string;
    role: string;
    homelessness: boolean;
    preeclampsia: boolean;
    postpartumdepression: boolean;
  }

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null); // Handle error state

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            
            const data = await response.json();

            const dict: UserInfo = {
                firstName: data.firstName,
                lastName: data.lastName,
                middleInitial: data.middleInitial,
                email: data.email,
                phone: data.phone,
                addressLine1: data.addressLine1,
                addressLine2: data.addressLine2,
                city: data.city,
                zipCode: data.zipCode,
                height: data.height,
                weight: data.weight,
                numberPastPregnancies: data.numberPastPregnancies,
                allergies: data.allergies,
                currentMedications: data.currentMedications,
                previousMedication: data.previousMedication,
                familyMedicalHistory: data.familyMedicalHistory,
                previousMedicalProcedures: data.previousMedicalProcedures,
                state: data.state,
                dateOfBirth: data.dateOfBirth,
                role: data.role,
                homelessness: data.homelessness,
                preeclampsia: data.preeclampsia,
                postpartumdepression: data.postpartumdepression

            }


            localStorage.setItem('userInfo', JSON.stringify(dict))


            if (response.ok) {
                // Store _id in localStorage or sessionStorage for later use
                localStorage.setItem('userId', data._id);
                localStorage.setItem('role', data.role);
                // Navigate to user page with role passed in state
                if (data.role === "user") {
                    navigate('/user-dashboard');
                }
                else if (data.role === "admin") {
                    navigate('/admin-dashboard');
                }
                else if (data.role === "provider"){
                    navigate('/caregiver-dashboard')
                }
                // Navigate to user page with role passed in state
                // navigate('/User', { state: { role: data.role } as LocationState });
            } else {
                throw new Error(data.message || 'Invalid credentials');
            }
        } catch (error) {
            //
        }
    };

    return (
        <div className="flex flex-col gap-8">
            <LoginNavbar />
            <div className="flex flex-col gap-8">
                <div>
                    <h1 className=" text-4xl font-bold">Login</h1>
                </div>
                {error && <p className="text-red-500">{error}</p>} {/* Display error */}
                <div>
                    <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                        <div className="justify-start">
                            <p className="text-left">Email</p>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className="border w-80 p-1.5 rounded-md shadow-md"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Handle email input
                            />
                        </div>
                        <div>
                            <p className="text-left">Password</p>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                className="border w-80 p-1.5 rounded-md shadow-md"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Handle password input
                            />
                        </div>
                        <div>
                            <Button type="submit" className="bg-[#3A696E] w-32 mt-8">Login</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
