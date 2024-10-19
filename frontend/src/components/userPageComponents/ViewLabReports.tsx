import * as React from "react"
import '../../App.css'

function ViewLabReports() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <>
      <div className="justify-around w-1/4 h-auto md:w-1/4 md:h-1/4" style={{ backgroundColor: '#F0DCDA' }}>
        <div className="flex flex-row">
            <div className="text-left">
                <h1>View Lab Reports</h1>
                <div>
                    will update with lab reports
                </div>
            </div>
        </div>

      </div>
    </>
  )
}

export default ViewLabReports
