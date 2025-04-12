import React from "react";
// TODO: Define or import actual icons

// Inline BenefitCard component
const BenefitCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-lime-500 h-full">
    {" "}
    {/* Added h-full */}
    <div className="flex items-start mb-3">
      {" "}
      {/* Adjusted alignment */}
      <div className="mr-3 mt-1 text-green-600 text-2xl flex-shrink-0">
        {" "}
        {/* Added flex-shrink-0 */}
        {icon || "✓"} {/* Default checkmark */}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const BenefitsGrid = ({
  heading = "Benefits",
  // Expects array: [{ icon: <JSX>, title: string, description: string }, ...]
  benefits = [],
}) => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 lg:mb-16">
          {heading}
        </h2>
        {/* Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {" "}
          {/* Added items-stretch */}
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
