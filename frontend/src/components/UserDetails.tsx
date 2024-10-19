import React from 'react';

interface UserDetailsProps {
  phone: string;
  height: string;
  weight: string;
  dateOfBirth: string;
}

const UserDetails: React.FC<UserDetailsProps> = ({ phone, height, weight, dateOfBirth }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow">
      <p><strong>Phone:</strong> {phone || 'N/A'}</p>
      <p><strong>Height:</strong> {height || 'N/A'}</p>
      <p><strong>Weight:</strong> {weight || 'N/A'}</p>
      <p><strong>Date of Birth:</strong> {dateOfBirth || 'N/A'}</p>
    </div>
  );
};

export default UserDetails;
