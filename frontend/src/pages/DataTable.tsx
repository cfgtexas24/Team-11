import '../App.css'; // Ensure you have Tailwind set up in App.css
import { useNavigate } from "react-router-dom";

function DataTable() {
  const numberOfUsers = 30; // Set the desired number of user boxes here
  const users = Array.from({ length: numberOfUsers }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    dataTable: `Personal Data Table ${i + 1}`,
  }));

<button className="bg-blue-500 text-white p-4 rounded">Test Button</button>


  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">User Data Table</h1>

      {/* User Inventory Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Displaying user inventory items in a 3-column grid with gaps between items */}
        {users.map((user) => (
          <div key={user.id} className="p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition duration-200">
            {/* Each inventory item is represented by a card with padding, background color, rounded corners, shadow, and hover effect */}
            <h3 className="text-lg font-bold text-gray-800">{user.name}</h3>
            <p className="text-sm mt-2 text-gray-600">{user.dataTable}</p>
            {/* Placeholder text for item name and description */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataTable;
