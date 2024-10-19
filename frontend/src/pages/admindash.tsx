import '../App.css';
import { Search, Download } from "lucide-react";

function AdminDashboard() {
  return (
    <div className="grid grid-cols-2 gap-6 p-6 bg-pink-100 rounded-xl">
      {/* Main container: A grid with 2 columns, gap between elements, padding, background color, and rounded corners */}
      
      {/* Header: Client Reports Section */}
      <div className="col-span-2 flex justify-between items-center">
        {/* Header section spans both columns, contains title and buttons */}
        
        <h1 className="text-3xl font-bold">Client Reports</h1>
         {/* Title with larger text and bold font */}

         {/* Action buttons for 'Create' and 'Upload' */}
         <div className="flex gap-4">
          {/* Flexbox to align buttons horizontally with a gap between them */}
          <button className="px-4 py-2 bg-teal-300 text-white font-semibold rounded-lg">
            Create
          </button>
          {/* Button with padding, background color, white text, and rounded corners */}

          <button className="px-4 py-2 bg-teal-400 text-white font-semibold rounded-lg">
            Upload
          </button>
          {/* Similar button for 'Upload' with slightly different background color */}
        </div>
      </div>

      {/* Folder section: Displaying folder information */}
      <div className="grid grid-cols-2 gap-6">
        {/* Another grid with 2 columns to display folder information */}

        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="bg-teal-300 p-6 rounded-lg text-center">
              {/* Each folder is represented by a card with padding, background color, rounded corners, and center-aligned text */}
              <h2 className="text-2xl font-bold">Folder Name</h2>
              <p className="mt-2 text-lg">23 Files</p>
              {/* Placeholder text for folder name and file count */}
            </div>
          ))}
      </div>

      {/* Recent Files Section */}
      <h2 className="text-2xl font-semibold mb-4">Recent</h2>
      {/* Section title with larger and bold font */}

        <div className="space-y-4">
          {/* Vertical spacing between list items */}
          
        <div className="recent-list">
          <div className="recent-item">
            <span>Patient_1_Report.pdf</span>
            <span>10/18/2024</span>
          </div>
          <div className="recent-item">
            <span>Patient_2_Report.pdf</span>
            <span>10/12/2024</span>
          </div>
          <div className="recent-item">
            <span>Patient_3_Report.pdf</span>
            <span>10/01/2024</span>
          </div>
          <div className="recent-item">
            <span>Patient_4_Report.pdf</span>
            <span>10/09/2024</span>
          </div>
        </div>
      </div>

      {/* File Preview Section */}
      <div className="file-preview">
        <Search className="search-icon" />
        <img
          src="https://via.placeholder.com/200"
          alt="File Preview"
          className="preview-image"
        />
        <Download className="download-icon" />
      </div>

      {/* Comments Section */}
      <div className="comments">
        <h2>Comments</h2>
        <textarea placeholder="Enter your comments here..." />
        <button className="btn submit">Submit</button>
      </div>

    </div>
  );
};

export default AdminDashboard;
