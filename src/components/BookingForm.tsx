// src/components/BookingForm.tsx
import React, { useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import DoctorDetails from "./DoctorsDetails";

interface Doctor {
  name: string;
  expertise: string;
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

    getAvailableDoctors();
  };

  useEffect(() => {
    const cityOverrideParam = new URLSearchParams(window.location.search).get(
      "city"
    );
    console.log(cityOverrideParam);
    if (cityOverrideParam) {
      setFormData((prevData) => ({
        ...prevData,
        city: cityOverrideParam,
      }));
    }
  }, [location.search]);

  return (
    <>
      <h1 className="text-3xl font-semibold text-white my-6 text-center">
        Get Doctors Details Here
      </h1>
      <div className="flex   justify-between p-20 ">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[40%] lg:w-[40%] xl:w-[30%] mx-auto bg-gray-800 p-6 rounded-lg shadow-md"
        >
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
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-600 rounded-md text-white bg-gray-700"
            />
          </div>
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
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-600 rounded-md text-white bg-gray-700"
            />
          </div>
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
          {!formData.age || parseInt(formData.age, 10) < 40 ? null : (
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
              </div>
            </div>
          )}
          <div>
            <button
              type="submit"
              className="inline-block px-4 py-2 text-sm font-medium leading-5 text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 h-[50px]">
          {availableDoctors.map((item) => (
            <DoctorDetails {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BookingForm;
