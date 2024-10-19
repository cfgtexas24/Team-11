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

    </div>
  );
};

export default AdminDashboard;
