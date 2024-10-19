import React from 'react';

interface UserAddressProps {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
}

const UserAddress: React.FC<UserAddressProps> = ({ addressLine1, addressLine2, city, state, zipCode }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow">
      <p><strong>Address Line 1:</strong> {addressLine1 || 'N/A'}</p>
      <p><strong>Address Line 2:</strong> {addressLine2 || 'N/A'}</p>
      <p><strong>City:</strong> {city || 'N/A'}</p>
      <p><strong>State:</strong> {state || 'N/A'}</p>
      <p><strong>Zip Code:</strong> {zipCode || 'N/A'}</p>
    </div>
  );
};

export default UserAddress;
