import React from "react";
import { testimonialsData } from "../lib/TestimonialData";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="p-8">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-semibold text-white mb-8 text-center">
          What Our Patients Say
        </h2>

        <Slider {...settings} className="mx-auto">
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-gray-700 p-6 mb-8"
            >
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
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
