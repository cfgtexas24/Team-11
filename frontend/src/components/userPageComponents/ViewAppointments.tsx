import * as React from "react"
import '../../App.css'
import { Calendar } from "@/components/ui/calendar"

function ViewAppointments() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <>
      <div className="justify-around w-1/2 h-auto md:w-1/2 md:h-1/2 rounded-lg shadow-md" style={{ backgroundColor: '#F0DCDA' }}>
        <div className="flex flex-row">
            <div className="text-left">
                <h1>Your Appointments</h1>
                <h3>Upcoming Appointments</h3>
                <div>
                    will fill with appointments
                </div>
            </div>
            <div>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                />
            </div>
        </div>

      </div>
    </>
  )
}

export default ViewAppointments
