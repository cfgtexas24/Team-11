import AdminNavbar from '@/components/AdminNavbar';
import '../App.css';
import { Search, Download } from "lucide-react"; // Importing icons from the lucide-react library

function AdminDashboard() {
  return (
    <div className="grid grid-cols-2 gap-6 p-6 bg-[rgb(247,239,238)] rounded-xl">
      <AdminNavbar />
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
      <div>
        <h2 className="text-2xl font-semibold mb-4">Recent</h2>
        {/* Section title with larger and bold font */}
        
        <div className="space-y-4">
          {/* Vertical spacing between list items */}
          
          {/* List of recent files */}
          <div className="flex justify-between p-4 bg-white rounded-lg">
            {/* Flexbox to align filename and modification date horizontally, with padding, background color, and rounded corners */}
            <span>Patient_1_Report.pdf</span>
            <span>10/18/2024</span>
          </div>
          {/* Repeating blocks for other files */}
          <div className="flex justify-between p-4 bg-white rounded-lg">
            <span>Patient_2_Report.pdf</span>
            <span>10/12/2024</span>
          </div>
          <div className="flex justify-between p-4 bg-white rounded-lg">
            <span>Patient_3_Report.pdf</span>
            <span>10/01/2024</span>
          </div>
          <div className="flex justify-between p-4 bg-white rounded-lg">
            <span>Patient_4_Report.pdf</span>
            <span>10/09/2024</span>
          </div>
        </div>
      </div>

      {/* File Preview Section */}
      <div className="relative">
        {/* Container for file preview, positioned relative to enable absolute positioning of icons */}
        
        {/* Search icon positioned at the top-right of the file preview */}
        <Search className="absolute top-2 right-2 text-gray-600" />
        {/* The Search icon from lucide-react library is placed in the top-right corner */}
        
        {/* Image preview with placeholder */}
        <img
          src="https://via.placeholder.com/200"
          alt="File Preview"
          className="w-full h-auto rounded-lg"
        />
        {/* Placeholder image representing file preview, full width, auto height, with rounded corners */}
        
        {/* Download icon positioned at the bottom-right of the file preview */}
        <Download className="absolute bottom-2 right-2 text-gray-600" />
        {/* Download icon placed at the bottom-right of the image */}
      </div>

      {/* Comments Section */}
      <div className="col-span-2 flex flex-col">
        {/* Section for comments input, spans both columns and arranged in a vertical flexbox */}
        
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        {/* Title of the comments section */}
        
        {/* Textarea for comments */}
        <textarea
          className="p-4 rounded-lg border border-gray-300 mb-4 resize-none"
          placeholder="Enter your comments here..."
        />
        {/* Text area with padding, border, and rounded corners, cannot be resized */}
        
        {/* Submit button */}
        <button className="px-4 py-2 bg-indigo-700 text-white font-semibold rounded-lg self-end">
          Submit
        </button>
        {/* Submit button aligned to the end of the flexbox (right side) */}
      </div>
    </div>
  );
}

export default AdminDashboard;
