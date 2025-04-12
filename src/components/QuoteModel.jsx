/* eslint-disable react/prop-types */
import { useState } from "react"; // Import useState

const QuoteModal = ({ isOpen, onClose }) => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    company: "", // Optional field
    email: "",
    phone: "",
    city: "", // Optional field
    message: "",
  });

  // State for submission status: 'idle', 'sending', 'success', 'error'
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser submission
    setStatus("sending");
    setErrorMessage("");

    // --- Send data to backend ---
    // IMPORTANT: Replace with the ACTUAL URL of your backend endpoint
    // This backend endpoint is where you will use Nodemailer.
    const backendUrl = "/api/send-quote-request"; // EXAMPLE URL

    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send collected form data
      });

      const result = await response.json(); // Expect JSON response { success: true } or { success: false, error: '...' }

      if (response.ok && result.success) {
        setStatus("success");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          city: "",
          message: "",
        }); // Clear form
      } else {
        setStatus("error");
        setErrorMessage(
          result.error || "An unknown error occurred processing your request."
        );
        console.error("Backend Error:", result);
      }
    } catch (error) {
      console.error("Network/Fetch Error:", error);
      setStatus("error");
      setErrorMessage(
        "Could not connect to the quote server. Please try again later."
      );
    }
  };

  // Don't render the modal if it's not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      {/* Modal Content */}
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-4 my-8 overflow-hidden">
        {" "}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-xl font-semibold text-[#003229]">
            {" "}
            {/* Adjusted style */}
            Request a Free Quote
          </h2>
          <button
            onClick={() => {
              onClose();
              // Reset status if closed manually before success
              if (status !== "success") setStatus("idle");
            }}
            className="text-gray-400 hover:text-gray-600 text-2xl font-light transition"
            aria-label="Close modal" // Accessibility
          >
            &times; {/* Use &times; for a cleaner 'X' */}
          </button>
        </div>
        {/* Modal Body - Changed padding */}
        <form onSubmit={handleSubmit}>
          {" "}
          {/* Add onSubmit handler to form */}
          <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
            {" "}
            {/* Add scroll for smaller screens */}
            {/* Name */}
            <div>
              <label
                htmlFor="quote-name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {" "}
                {/* Added margin */}
                Name <span className="text-red-500">*</span>{" "}
                {/* Indicate required */}
              </label>
              <input
                type="text"
                id="quote-name" // Unique ID if multiple forms exist
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required // Make field required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#003229] focus:border-[#003229] text-sm" // Adjusted padding/style
                placeholder="Your Full Name"
              />
            </div>
            {/* Company (Optional) */}
            <div>
              <label
                htmlFor="quote-company"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company (Optional)
              </label>
              <input
                type="text"
                id="quote-company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                // Not required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#003229] focus:border-[#003229] text-sm"
                placeholder="Your Company Name"
              />
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="quote-email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="quote-email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#003229] focus:border-[#003229] text-sm"
                placeholder="your.email@example.com"
              />
            </div>
            {/* Phone */}
            <div>
              <label
                htmlFor="quote-phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="quote-phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#003229] focus:border-[#003229] text-sm"
                placeholder="Your Contact Number"
              />
            </div>
            {/* City (Optional) */}
            <div>
              <label
                htmlFor="quote-city"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                City (Optional)
              </label>
              <input
                type="text"
                id="quote-city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                // Not required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#003229] focus:border-[#003229] text-sm"
                placeholder="City of Service"
              />
            </div>
            {/* Message */}
            <div>
              <label
                htmlFor="quote-message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message / Requirements <span className="text-red-500">*</span>
              </label>
              <textarea
                id="quote-message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#003229] focus:border-[#003229] text-sm"
                placeholder="Enter your message..."
              ></textarea>
            </div>
            {/* --- Feedback Messages --- */}
            {status === "success" && (
              <p className="text-sm text-center text-green-600 font-medium p-2 bg-green-50 rounded-md">
                Quote request sent successfully! We&apos;ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-center text-red-600 font-medium p-2 bg-red-50 rounded-md">
                Error: {errorMessage || "Failed to send request."}
              </p>
            )}
            {/* --- End Feedback --- */}
          </div>{" "}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <button
              type="submit" // Ensure it's type="submit"
              disabled={status === "sending" || status === "success"} // Disable while sending or after success
              className={`w-full bg-[#003229] text-white py-2.5 px-4 rounded-lg hover:bg-[#014739] transition text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003229] ${
                status === "sending" || status === "success"
                  ? "opacity-60 cursor-not-allowed"
                  : "" // Style when disabled
              }`}
            >
              {status === "sending"
                ? "Sending Request..."
                : status === "success"
                ? "Sent!"
                : "Submit Quote Request"}
            </button>
          </div>
        </form>{" "}
      </div>{" "}
    </div>
  );
};

export default QuoteModal;
