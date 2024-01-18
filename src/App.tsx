import "./App.css";


import BookingForm from "./components/BookingForm";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  const [city, setCity] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const cityParam = urlParams.get("city");

    if (cityParam) {
      setCity(cityParam);
    }
  }, []);
  return (
    <>
      <div className=" text-white  bg-black ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingForm defaultCity={city} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
