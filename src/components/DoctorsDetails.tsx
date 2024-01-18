import React from "react";
import { useNavigate } from "react-router-dom";

interface DoctorDetailsProps {
  name: string;
  qualifications: string;
  experience: string;
  specialties: string;
  imageSrc: string;
  altText: string;
  city: string;
}

const DoctorDetails: React.FC<DoctorDetailsProps> = ({
  name,
  qualifications,
  experience,
  specialties,
  imageSrc,
  altText,
  city,
}) => {
  const navigate = useNavigate();
  const handleBook = () => {
    alert("Successfully Book a Slot ");
    navigate("/");
  };
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col">
      <img
        className="w-[50%]  object-cover rounded-full m-auto "
        src={imageSrc}
        alt={altText}
      />
      <div className="p-6 ">
        <h1 className="text-white font-bold text-2xl mb-2">{name}</h1>
        <p className="text-white text-base mb-4">{qualifications}</p>
        <p className="text-white text-base mb-4">{experience}</p>
        <p className="text-white text-base mb-4">{city}</p>
        <div className="flex ">
          <p className="text-gray-300">Specialities:- </p>
          <p className="pl-3">{specialties}</p>
        </div>
        <div className="mt-4">
          <button
            onClick={handleBook}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
