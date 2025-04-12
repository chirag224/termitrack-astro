// src/components/ContactUs.jsx
import { useState } from "react";

const ContactUs = () => {
  // State for form data - Added 'phone' field
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // <-- Added phone field state
    message: "",
  });

  // State for submission status: 'idle', 'sending', 'success', 'error'
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Handler for input changes (handles all fields including phone)
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

    try {
      const response = await fetch("/api/send-email", {
        // Adjust URL as needed
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(result.error || "An unknown error occurred.");
        console.error("Backend Error:", result);
      }
    } catch (error) {
      console.error("Network/Fetch Error:", error);
      setStatus("error");
      setErrorMessage(
        "Could not connect to the server. Please try again later."
      );
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#FBF6E9] text-[#003229] py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get in <span className="text-[#FBBF24]">Touch</span> With Us
        </h2>
        {/* Contact Info and Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2">📞 Phone</h3>
              <p>
                <a
                  href="tel:9223453450"
                  className="text-[#003229] hover:text-[#FBBF24] transition font-medium"
                >
                  9223453450
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">📧 Email</h3>
              <p>
                <a
                  href="mailto:info@termitrack.com"
                  className="text-[#003229] hover:text-[#FBBF24] transition font-medium"
                >
                  info@termitrack.com
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-[#FBBF24] focus:border-[#FBBF24] focus:ring-2"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-[#FBBF24] focus:border-[#FBBF24] focus:ring-2"
                  placeholder="Enter your email"
                />
              </div>

              {/* --- Added Phone Number Field --- */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number (Optional){" "}
                  {/* Label updated to show it's optional */}
                </label>
                <input
                  type="tel" // Use 'tel' type for phone numbers
                  id="phone"
                  name="phone" // Corresponds to the state key 'phone'
                  value={formData.phone} // Link value to state
                  onChange={handleInputChange} // Reuse the same handler
                  // Removed 'required' attribute to make it optional
                  className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-[#FBBF24] focus:border-[#FBBF24] focus:ring-2"
                  placeholder="Enter your phone number"
                />
              </div>
              {/* --- End of Added Phone Number Field --- */}

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm  font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-[#FBBF24] focus:border-[#FBBF24] focus:ring-2"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {/* Feedback Messages */}
              {status === "success" && (
                <p className="text-sm text-green-600 font-medium">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 font-medium">
                  Error: {errorMessage || "Failed to send message."}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full bg-[#FBBF24] text-[#003229] py-2 px-4 rounded-md font-semibold shadow-md hover:bg-[#F59E0B] transition ${
                  status === "sending" ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {status === "sending" ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;