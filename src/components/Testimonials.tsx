// src/components/Testimonials.tsx
import React from "react";

interface Testimonial {
  id: number;
  author: string;
  content: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    author: "John Doe",
    content:
      "I had a great experience with Fix Health. The doctors are highly skilled and caring.",
  },
  {
    id: 2,
    author: "Jane Smith",
    content:
      "The physiotherapy sessions were effective, and the staff was friendly and supportive.",
  },
  {
    id: 3,
    author: "Bob Johnson",
    content:
      "Fix Health exceeded my expectations. I highly recommend their services.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="p-8 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-white mb-6 text-center">
          What Our Patients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-700 p-6 rounded-md">
              <p className="text-white mb-4">{testimonial.content}</p>
              <p className="text-gray-400">{`- ${testimonial.author}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
