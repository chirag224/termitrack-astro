// src/components/CallToAction.jsx
import React, { useState } from "react"; // Import useState
import QuoteModal from "./QuoteModel.jsx"; // Import the modal component here

const CallToAction = ({
  heading = "Ready to Get Started?",
  text = "Contact us today to learn more or get a personalized quote.",
  // Changed default button text
  primaryButtonText = "Get a Quote",
  // Removed props not directly used by this button setup
  // primaryButtonLink = "#", // Link no longer used if button opens modal
  // secondaryButtonText = "Request a Demo", // Button removed
  // secondaryButtonLink = "#",
  // onToggleModal // Prop from parent is removed
}) => {
  // --- State for THIS component's modal ---
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  // --- End State ---

  return (
    // Use React Fragment to return multiple elements (section + modal)
    <>
      <section className="py-16 lg:py-24 bg-gradient-to-r from-green-600 to-lime-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{heading}</h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-green-100">
            {text}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Primary Button - Updated */}
            {primaryButtonText && (
              // Removed the <a> tag wrapper
              <button
                className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-100 font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                onClick={toggleModal} // Use the LOCAL toggleModal function
              >
                {primaryButtonText} {/* Uses prop or default "Get a Quote" */}
              </button>
            )}
            {/* Secondary Button is Removed */}
          </div>
        </div>
      </section>

      {/* Conditionally render the modal based on LOCAL state */}
      {/* Make sure QuoteModal component accepts these props */}
      {isModalOpen && <QuoteModal isOpen={isModalOpen} onClose={toggleModal} />}
    </>
  );
};

export default CallToAction;
