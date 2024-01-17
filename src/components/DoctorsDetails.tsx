import React from "react";

interface DoctorDetailsProps {
  name: string;
  expertise: string;
  city: string;
}

const DoctorDetails: React.FC<DoctorDetailsProps> = ({
  name,
  expertise,
  city,
}) => {
  return (
    <div key={name} className="bg-gray-800 p-6 rounded-lg shadow-md text-white">
      <h3 className="text-2xl font-semibold mb-2">{name}</h3>
      <div className="mb-2">
        <label className="text-gray-400">Expertise:</label>
        <p className="text-gray-300">{expertise}</p>
      </div>
      <div className="mb-2">
        <label className="text-gray-400">City:</label>
        <p className="text-gray-300">{city}</p>
      </div>
    </div>
  );
};

export default DoctorDetails;
