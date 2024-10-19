import { useNavigate } from 'react-router-dom'; 
import { Button } from "@/components/ui/button";
import { LocationState } from '@/types';

const Login = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent form submission
        // Add your login logic here (e.g., API call to authenticate user)
        // If login is successful, navigate to the dashboard
        navigate('/User', { state: { role: "user" } as LocationState }); // Redirect to the dashboard
    };

    return (
        <div className="flex flex-col gap-8 items-start">
            <div className="flex flex-col gap-8">
            <div>
              <h1 className=" text-4xl font-bold">Login</h1>
            </div>
            <div >
                <form className=" flex flex-col gap-4" onSubmit={handleLogin}>
                    <div className=" justify-start">
                    <p className="text-left">Email</p>
                    <input type="email" id="email" name="email" placeholder="Email" className=" border w-80 p-1.5 rounded-md shadow-md" />
                    </div>
                    <div>
                    <p className="text-left"> Password </p>
                    <input type="password " id="password" name="password" placeholder="Password" className=" border w-80 p-1.5 rounded-md shadow-md" />
                    </div>
                    <div>
                    <Button type="submit" className=" bg-[#3A696E] w-32 mt-8">Login</Button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
}
export default Login;