// src/components/HeroImage.tsx

const HeroImage: React.FC = () => {
  return (
    <div className=" bg-cover bg-center relative">
      <img
        src="https://img.freepik.com/premium-photo/stethoscopes-black-background-image-close-up_35719-885.jpg"
        className="w-[100vw] h-[600px]"
      />
      <div className="absolute h-[200px] w-[400px] left-24 bottom-52 ">
        <h1 className="text-teal-500 text-4xl font-semibold pb-4">
          Unique Pain, Unique Care
        </h1>
        <h1 className="text-white text-2xl font-medium">
          Our team of experts create tailor-made programs based on your specific
          needs, goals, and ability.
        </h1>
      </div>
    </div>
  );
};

export default HeroImage;
