import { Link } from "react-router-dom";

const HeroImage: React.FC = () => {
  return (
    <div className=" bg-cover bg-center relative">
      <img
        src="https://img.freepik.com/premium-photo/stethoscopes-black-background-image-close-up_35719-885.jpg"
        className="w-[100vw] h-[600px]"
      />
      <div className="absolute h-[200px] w-[400px] top-8 left-2 lg:left-24 lg:bottom-52 ">
        <h1 className="text-teal-500 text-xl font-semibold lg:text-4xl lg:font-semibold pb-4">
          Unique Pain, Unique Care
        </h1>
        <h1 className="text-white text-lg lg:text-2xl font-medium">
          Our team of experts create tailor-made programs based on your specific
          needs, goals, and ability.
        </h1>
        <button className="hidden md:flex space-x-4 bg-teal-600 p-2 rounded mt-4">
          <Link to="/booking"> Book Slot</Link>
        </button>
      </div>
    </div>
  );
};

export default HeroImage;
