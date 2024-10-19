import React from 'react';

interface UserMedicalInfoProps {
  allergies: string;
  currentMedications: string;
  previousMedication: string;
  familyMedicalHistory: string;
  preeclampsia: boolean;
  postpartumDepression: boolean;
}

const UserMedicalInfo: React.FC<UserMedicalInfoProps> = ({
  allergies, currentMedications, previousMedication, familyMedicalHistory,
  preeclampsia, postpartumDepression
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow">
      <p><strong>Allergies:</strong> {allergies || 'N/A'}</p>
      <p><strong>Current Medications:</strong> {currentMedications || 'N/A'}</p>
      <p><strong>Previous Medications:</strong> {previousMedication || 'N/A'}</p>
      <p><strong>Family Medical History:</strong> {familyMedicalHistory || 'N/A'}</p>
      <p><strong>Preeclampsia:</strong> {preeclampsia ? 'Yes' : 'No'}</p>
      <p><strong>Postpartum Depression:</strong> {postpartumDepression ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default UserMedicalInfo;
