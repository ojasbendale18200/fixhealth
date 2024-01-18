import React, { useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import DoctorDetails from "./DoctorsDetails";
import Navbar from "./Navbar";

interface Doctor {
  name: string;
  qualifications: string;
  experience: string;
  specialties: string;
  imageSrc: string;
  altText: string;
  city: string;
}

interface BookingFormProps {
  defaultCity: string | null;
}

const BookingForm: React.FC<BookingFormProps> = ({ defaultCity }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [availableDoctors, setAvailableDoctors] = useState<Doctor[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    city: defaultCity || "",
    company: "",
    chiefComplaints: "",
    physioExperience: false,
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "city") {
      updateCityInURL(value);
    }
  };

  const ageLessThan40 = parseInt(formData.age) < 40;

  const updateCityInURL = (newCity: string) => {
    navigate(`${location.pathname}?city=${newCity}`);
  };

  const getAvailableDoctors = async () => {
    const response = await fetch(
      `https://65a77ab594c2c5762da6c0da.mockapi.io/doctors?city=${formData.city}`
    );
    const doctors: Doctor[] = await response.json();

    setAvailableDoctors(doctors);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (ageLessThan40) {
      setFormData((prevData) => ({
        ...prevData,
        physioExperience: false,
      }));
    }

    if (currentStep < 4) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      getAvailableDoctors();
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };
  const handleLastStepSubmit = () => {
    getAvailableDoctors();
  };

  useEffect(() => {
    const cityOverrideParam = new URLSearchParams(window.location.search).get(
      "city"
    );
    if (cityOverrideParam) {
      setFormData((prevData) => ({
        ...prevData,
        city: cityOverrideParam,
      }));
    }
  }, [location.search]);

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-600 rounded-md text-white bg-gray-700"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-300"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-600 rounded-md text-white bg-gray-700"
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="mb-4">
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-300"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                required
                value={formData.age}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-600 rounded-md text-white bg-gray-700"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-300"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                required
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-600 rounded-md text-white bg-gray-700"
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-300"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border border-gray-600 rounded-md text-white bg-gray-700"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="chiefComplaints"
                className="block text-sm font-medium text-gray-300"
              >
                Chief Complaints
              </label>
              <textarea
                id="chiefComplaints"
                name="chiefComplaints"
                value={formData.chiefComplaints}
                onChange={handleInputChange}
                rows={4}
                className="mt-1 p-2 w-full border border-gray-600 rounded-md text-white bg-gray-700"
              />
            </div>
          </>
        );
      case 4:
        return (
          <>
            {!formData.age || parseInt(formData.age, 10) < 40 ? (
              <button
                onClick={handleLastStepSubmit}
                className="inline-block px-4 py-2 text-sm font-medium leading-5 text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              >
                Submit
              </button>
            ) : (
              <div className="mb-4">
                <label
                  htmlFor="physioExperience"
                  className="block text-sm font-medium text-gray-300"
                >
                  Any previous experience with physiotherapy?
                </label>
                <div className="mt-1">
                  <input
                    type="checkbox"
                    id="physioExperience"
                    name="physioExperience"
                    checked={formData.physioExperience}
                    onChange={handleInputChange}
                    className="border-gray-600 rounded-md text-white bg-gray-700"
                  />
                  <div>
                    <button
                      type="button"
                      onClick={handleLastStepSubmit}
                      className="inline-block px-4 py-2 text-sm font-medium leading-5 text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <h1 className="text-center text-3xl lg:text-6xl text-teal-500 font-bold">
        Consult With our Doctors.
      </h1>
      <h1 className="text-xl lg:text-3xl font-semibold text-white my-6 text-center">
        Get Doctors Details Here
      </h1>
      <div className="flex justify-center p-6 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[70%] lg:w-[60%] xl:w-[30%] mx-auto bg-gray-800 p-8 md:p-10 rounded-lg shadow-md"
        >
          {renderFormStep()}
          <div className="flex justify-between mt-6">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="inline-block px-4 py-2 text-sm font-medium leading-5 text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              >
                Previous
              </button>
            )}
            {currentStep < 4 && (
              <button
                type="submit"
                className="inline-block px-6 py-2 text-sm font-medium leading-5 text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              >
                Next
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="py-10">
        <h1 className="text-center text-3xl lg:text-5xl text-teal-500 font-medium">
          Meet our Experts
        </h1>
        <p className="text-center text-xl lg:text-3xl text-white font-medium py-5">
          Experience the Benefits of Advanced Technology and Expert Care
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-12">
          {availableDoctors.map((item) => (
            <DoctorDetails key={item.name} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BookingForm;
