import React from "react";
import '../App.css'

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

    </div>
  );
};

export default AdminDashboard;
