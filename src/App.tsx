import "./App.css";

import Testimonials from "./components/Testimonials";
import HeroImage from "./components/HeroImage";
import Navbar from "./components/Navbar";
import BookingForm from "./components/BookingForm";
import { useEffect, useState } from "react";

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
      <div className=" text-white  bg-black">
        <Navbar />
        <HeroImage />
        <BookingForm defaultCity={city} />
        <Testimonials />
      </div>
    </>
  );
}

export default App;
