// src/components/Testimonials.tsx
import React from "react";

interface Testimonial {
  id: number;
  title: string;
  image: string;
  feedback: string;
  name: string;
  ageProfession: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    title: "My frozen shoulder is gone",
    image:
      "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FPatel_xOznYxGIr5.png%3FupdatedAt%3D1686564335378&w=1920&q=75",
    feedback:
      "Your assessment method is so good & patient support resolves issues promptly",
    name: "Nishith Patel",
    ageProfession: "66, Business Owner",
    rating: 5,
  },
  {
    id: 2,
    title: "Life-changing experience",
    image:
      "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FRashmi_KEXRN9maT.png%3FupdatedAt%3D1686564335393&w=1920&q=75",
    feedback:
      "I never thought I could feel this good again. Your team is fantastic!",
    name: "Samantha Johnson",
    ageProfession: "45, Software Engineer",
    rating: 4,
  },
  {
    id: 3,
    title: "Quick recovery after a sports injury",
    image:
      "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FDeep_P-vGzCQ88.png%3FupdatedAt%3D1686564335311&w=1920&q=75",
    feedback:
      "Amazing service! Got back on my feet in no time. Highly recommended.",
    name: "Alex Rodriguez",
    ageProfession: "30, Athlete",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="p-8 ">
      <div className="container mx-auto ml-8">
        <h2 className="text-3xl font-semibold text-white mb-20 text-center">
          What Our Patients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-700 p-6 mb-8">
              <h1 className="font-bold text-xl mb-2">{item.title}</h1>
              <img
                className="w-full h-48 object-cover mb-6"
                src={item.image}
                alt="Testimonial"
              />
              <p className="text-white text-base">{item.feedback}</p>
              <div className="mt-3 flex justify-between items-center">
                <div>
                  <p className="text-white font-bold">{item.name}</p>
                  <p className="text-gray-300">{item.ageProfession}</p>
                </div>
                <div className="space-x-2">
                  {Array(item.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-500">
                        ★
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
