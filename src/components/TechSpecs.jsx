import React from "react";

// Inline SpecItem component
const SpecItem = ({ label, value }) => (
  <div className="py-3 px-4 flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 text-sm last:border-b-0">
    <dt className="text-gray-600 font-medium mb-1 sm:mb-0">{label}</dt>
    <dd className="text-gray-800 sm:text-right">{value}</dd>
  </div>
);

const TechSpecs = ({
  heading = "Technical Specifications",
  // Expects array: [{ label: string, value: string }, ...]
  specs = [],
}) => {
  // Only render section if there are specs
  if (specs.length === 0) {
    return null;
  }

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          {heading}
        </h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <dl>
            {specs.map((spec, index) => (
              <SpecItem key={index} label={spec.label} value={spec.value} />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
