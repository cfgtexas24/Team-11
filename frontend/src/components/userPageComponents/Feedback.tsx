import * as React from "react"
import { Button } from "@/components/ui/button";
import '../../App.css'

function Fedback() {

  return (
    <>
      <div className="justify-around rounded-lg shadow-md" style={{ backgroundColor: '#F0DCDA' }}>
        <div className="flex flex-row">
            <div className="text-left">
                <h1>Feedback</h1>
                <div>
                    <form>
                        <div className=" justify-start">
                            <p className="text-left">Give us a rating!</p>
                            <input type="email" id="email" name="email" placeholder="Email" className=" border w-[100%] p-1.5 rounded-md shadow-md" />
                        </div>
                        <div>
                            <p className="text-left"> Leave us comments! </p>
                            <input type="password " id="password" name="password" placeholder="Any comments..." className=" border w-9/10 p-1.5 rounded-md shadow-md" />
                            </div>
                            <div>
                            <Button type="submit" className=" bg-[#3A696E] w-32 mt-8">Login</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

      </div>
    </>
  )
}

export default Fedback
