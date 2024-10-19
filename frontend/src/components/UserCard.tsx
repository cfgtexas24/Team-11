import React from 'react';

interface UserCardProps {
  name: string;
  email: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, email }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow">
      <h2 className="text-xl font-bold mb-2">Name: {name}</h2>
      <p className="text-sm">Email: {email}</p>
    </div>
  );
};

export default UserCard;
