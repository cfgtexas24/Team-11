import { Button } from "@/components/ui/button";
const Login = () => {
    return (
        <div className="flex flex-col gap-8 items-start">
            <div className="flex flex-col gap-8">
            <div>
              <h1 className=" text-4xl font-bold">Login</h1>
            </div>
            <div >
                <form className=" flex flex-col gap-4">
                    <div className=" justify-start">
                    <p className="text-left">Email</p>
                    <input type="email" id="email" name="email" placeholder="Email" className=" border w-80 p-1.5 rounded-md shadow-md" />
                    </div>
                    <div>
                    <p className="text-left"> Password </p>
                    <input type="password " id="password" name="password" placeholder="Password" className=" border w-80 p-1.5 rounded-md shadow-md" />
                    </div>
                    <div>
                    <Button className=" bg-[#3A696E] w-32 mt-8">Login</Button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
}
export default Login;