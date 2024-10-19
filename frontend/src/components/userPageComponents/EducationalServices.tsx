import * as React from "react"
import '../../App.css'

function EducationalServices() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <>
      <div className="justify-around rounded-lg shadow-md" style={{ backgroundColor: '#B6D8DB' }}>
        <div className="flex flex-row">
            <div className="text-left">
                <h1>Educational Services</h1>
                <div>
                    will fill with appointments
                </div>
            </div>
        </div>

      </div>
    </>
  )
}

export default EducationalServices
