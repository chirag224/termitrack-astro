// src/components/GetInTouch.jsx
import React from "react";

export default function GetInTouch({
  selectedFeature,
  onFeatureToggle,
  Features,
}) {
  // Helper function to check if a feature name string is in the Set received from Home
  const isSelected = (featureName) => selectedFeature.has(featureName);

  const featuresToDisplay = Object.values(Features || {});

  return (
    <section className="bg-gray-200 py-0">
      <div className=" mx-0 px-6">
        <div className=" px-6 py-8">
          {/* /// Heading Section /// */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              CHOOSE YOUR TOOLS
            </h2>
          </div>
          {/* /// End Heading Section /// */}

          <div className="text-center mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Map over feature names from Features prop */}
              {featuresToDisplay.map((featureName) => (
                <div
                  key={featureName}
                  // Faster animation duration, lighter selected styles
                  className={`col-span-1 p-3 rounded-md cursor-pointer transition-all ease-in-out border-2 font-medium ${
                    // duration-200
                    isSelected(featureName)
                      ? "border-lime-500 bg-lime-100 text-lime-900 shadow-md scale-105" // Lighter selected style
                      : "border-transparent bg-gray-100 text-gray-800 hover:border-gray-400 hover:bg-gray-200" // Normal style
                  }`}
                  // Call the 'onFeatureToggle' prop function (hangleToggleFeature from Home)
                  onClick={() => onFeatureToggle(featureName)}
                >
                  <span>{featureName}</span>
                </div>
              ))}
            </div>

            {/* Link/Button to scroll down */}
            {/* <a href="#trackerRange">
              <div className="mt-8">
                <button className="bg-yellow-400 text-black py-3 px-8 rounded-lg font-semibold shadow-md hover:bg-yellow-500 transition">
                  SEE PRODUCTS
                </button>
              </div>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
