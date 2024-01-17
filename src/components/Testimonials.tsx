import React from "react";
import { testimonialsData } from "../lib/TestimonialData";

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
