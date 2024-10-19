import * as React from "react"
import '../../App.css'

function EducationalServices() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <>
      <div className="justify-around w-1/2 h-auto md:w-1/2 md:h-1/2" style={{ backgroundColor: '#B6D8DB' }}>
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
