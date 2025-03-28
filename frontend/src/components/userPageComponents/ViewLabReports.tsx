import * as React from "react";
import '../../App.css';
import { IoIosDownload } from "react-icons/io"; // Import the download icon

const ViewLabReports: React.FC = () => {
  const handleDownload = (fileName: string) => {
    const link = document.createElement('a');
    link.href = `/lab_reports/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="justify-around rounded-lg shadow-md h-full p-4" style={{ backgroundColor: '#F0DCDA' }}>
        <div className="flex flex-row">
          <div className="text-left">
            <h1 className="text-2xl mb-2 font-bold">View Lab Reports</h1>
            <div className="flex flex-col gap-2">
              <div 
                onClick={() => handleDownload('lab_report_1.pdf')} 
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              >
                Ultrasound Lab Results 07/30/2024
                <IoIosDownload style={{ marginRight: '8px'}} />
              </div>
              <div 
                onClick={() => handleDownload('lab_report_2.pdf')} 
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              >
                Blood Count Sample Report 02/10/2014
                <IoIosDownload style={{ marginRight: '8px'}} />
              </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewLabReports;
