import React from 'react';

interface User {
  lastName: string;
  firstName: string;
  middleInitial: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  experiencedHomelessness: boolean;
  historyOfPreeclampsia: boolean;
  postpartumDepression: boolean;
}

interface UserInformationPageProps {
  editableUser: User | null;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdate: () => void;
}

const UserInformationPage: React.FC<UserInformationPageProps> = ({ editableUser, handleInputChange, handleUpdate }) => {
  return (
    <div className="w-full mx-auto p-8 bg-[#f7d9d5] rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-black mb-6">Personal Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {[
          { label: 'Last Name', name: 'lastName', type: 'text', value: editableUser?.lastName || '' },
          { label: 'First Name', name: 'firstName', type: 'text', value: editableUser?.firstName || '' },
          { label: 'Middle Initial', name: 'middleInitial', type: 'text', value: editableUser?.middleInitial || '' },
          { label: 'Date of Birth', name: 'dateOfBirth', type: 'date', value: editableUser?.dateOfBirth || '' },
          { label: 'Phone', name: 'phone', type: 'text', value: editableUser?.phone || '' },
          { label: 'Email', name: 'email', type: 'text', value: editableUser?.email || '' },
          { label: 'Address Line 1', name: 'addressLine1', type: 'text', value: editableUser?.addressLine1 || '' },
          { label: 'Address Line 2', name: 'addressLine2', type: 'text', value: editableUser?.addressLine2 || '' },
          { label: 'City', name: 'city', type: 'text', value: editableUser?.city || '' },
          { label: 'State', name: 'state', type: 'text', value: editableUser?.state || '' },
          { label: 'Zip Code', name: 'zipCode', type: 'text', value: editableUser?.zipCode || '' },
        ].map(({ label, name, type, value }) => (
          <div key={name} className="flex flex-col">
            <label className="text-black mb-2" htmlFor={name}>{label}:</label>
            <input
              type={type}
              id={name}
              name={name}
              value={value}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>
        ))}
      </div>

      {/* Medical History Section */}
      <div className="lg:col-span-3 md:col-span-2 col-span-1 pt-6">
        <h3 className="text-xl font-bold text-black mb-4">Medical History</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: 'Experienced Homelessness', name: 'experiencedHomelessness', value: editableUser?.experiencedHomelessness },
            { label: 'History of Preeclampsia', name: 'historyOfPreeclampsia', value: editableUser?.historyOfPreeclampsia },
            { label: 'Postpartum Depression', name: 'postpartumDepression', value: editableUser?.postpartumDepression },
          ].map(({ label, name, value }) => (
            <div key={name} className="flex items-center">
              <input
                type="checkbox"
                id={name}
                name={name}
                checked={value || false}
                onChange={handleInputChange}
                className="mr-2 h-5 w-5 text-pink-600 focus:ring-pink-500"
              />
              <label htmlFor={name} className="text-black font-semibold">{label}</label>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleUpdate}
        className="w-full mt-6 p-3 bg-[#c2185b] text-white font-bold rounded-lg hover:bg-[#a01747] transition-all duration-200"
      >
        Save
      </button>
    </div>
  );
};

export default UserInformationPage;
