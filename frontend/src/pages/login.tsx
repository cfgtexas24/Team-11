import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { LocationState } from '@/types';

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

            if (response.ok) {
                // Store _id in localStorage or sessionStorage for later use
                localStorage.setItem('userId', data._id);
                // Navigate to user page with role passed in state
                navigate('/User', { state: { role: data.role } as LocationState });
            } else {
                throw new Error(data.message || 'Invalid credentials');
            }
        } catch (error) {
            //
        }
    };

    return (
        <div className="flex flex-col gap-8 items-start">
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
