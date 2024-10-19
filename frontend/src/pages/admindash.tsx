import React from "react";
import '../App.css'
import { Search, Download } from "lucide-react";

const AdminDashboard: React.FC = () => {
  return (
    <div className="dashboard">
      {/* Client Reports Section */}
      <div className="header">
        <h1>Client Reports</h1>
        <div className="buttons">
          <button className="btn create">Create</button>
          <button className="btn upload">Upload</button>
        </div>
      </div>

      {/* Folders Section */}
      <div className="folders">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="folder-card">
              <h2>Folder Name</h2>
              <p>23 Files</p>
            </div>
          ))}
      </div>

      {/* Recent Files Section */}
      <div className="recent">
        <h2>Recent</h2>
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
