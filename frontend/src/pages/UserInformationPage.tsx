import React, { useState } from "react";
import "./UserInformationPage.css";

const UserInformationPage = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    middleInitial: "",
    dob: "",
    phone: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    race: "",
    ethnicity: "",
    height: "",
    weight: "",
    pregnancies: "",
    allergies: "",
    currentMedications: "",
    previousMedications: "",
    familyHistory: "",
    previousProcedures: "",
    experiencedHomelessness: false, // Changed to boolean
    historyOfPreeclampsia: false, // Changed to boolean
    postpartumDepression: false, // Changed to boolean
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value, // Handle checkbox values for booleans
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // API call to your backend
    try {
      const response = await fetch("/api/saveUserInformation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert("Data saved successfully!");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <form className="user-information-page" onSubmit={handleSubmit}>
      <h1>Personal Information</h1>

      {/* General Information Section */}
      <div className="section">
        <label>Last Name</label>
        <input name="lastName" value={formData.lastName} onChange={handleChange} />

        <label>First Name</label>
        <input name="firstName" value={formData.firstName} onChange={handleChange} />

        <label>Middle Initial</label>
        <input name="middleInitial" value={formData.middleInitial} onChange={handleChange} />

        <label>Date of Birth</label>
        <input name="dob" type="date" value={formData.dob} onChange={handleChange} />

        <label>Phone</label>
        <input name="phone" value={formData.phone} onChange={handleChange} />

        <label>Email</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} />

        <label>Address Line 1</label>
        <input name="addressLine1" value={formData.addressLine1} onChange={handleChange} />

        <label>Address Line 2</label>
        <input name="addressLine2" value={formData.addressLine2} onChange={handleChange} />

        <label>City</label>
        <input name="city" value={formData.city} onChange={handleChange} />

        <label>State</label>
        <input name="state" value={formData.state} onChange={handleChange} />

        <label>Zip Code</label>
        <input name="zipCode" value={formData.zipCode} onChange={handleChange} />

        <label>Race</label>
        <input name="race" value={formData.race} onChange={handleChange} />

        <label>Ethnicity</label>
        <input name="ethnicity" value={formData.ethnicity} onChange={handleChange} />
      </div>

      <h2>Medical History</h2>

      {/* Medical History Section */}
      <div className="section">
        <label>Height</label>
        <input name="height" value={formData.height} onChange={handleChange} />

        <label>Weight</label>
        <input name="weight" value={formData.weight} onChange={handleChange} />

        <label># of Pregnancies</label>
        <input name="pregnancies" value={formData.pregnancies} onChange={handleChange} />

        <label>Allergies</label>
        <input name="allergies" value={formData.allergies} onChange={handleChange} />

        <label>Current Medications</label>
        <input name="currentMedications" value={formData.currentMedications} onChange={handleChange} />

        <label>Previous Medications</label>
        <input name="previousMedications" value={formData.previousMedications} onChange={handleChange} />

        <label>Family Medical History</label>
        <input name="familyHistory" value={formData.familyHistory} onChange={handleChange} />

        <label>Previous Medical Procedures</label>
        <input name="previousProcedures" value={formData.previousProcedures} onChange={handleChange} />
      </div>

      <h3>Additional Information</h3>

      {/* Additional Information Section */}
      <div className="section">
        <label>Experienced Homelessness</label>
        <input
          name="experiencedHomelessness"
          type="checkbox"
          checked={formData.experiencedHomelessness}
          onChange={handleChange}
        />

        <label>History of Preeclampsia</label>
        <input
          name="historyOfPreeclampsia"
          type="checkbox"
          checked={formData.historyOfPreeclampsia}
          onChange={handleChange}
        />

        <label>Postpartum Depression</label>
        <input
          name="postpartumDepression"
          type="checkbox"
          checked={formData.postpartumDepression}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Save</button>
    </form>
  );
};

export default UserInformationPage;
