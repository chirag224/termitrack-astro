import React from "react";
import ITRAKER_PRODUCT from "../../public/images/ITRAKER_PRODUCT.png"; // Assuming default image path

const ProductOverview = ({
  heading = "Product Overview Heading",
  imageUrl = ITRAKER_PRODUCT, // Using the imported default image
  imageAlt = "Product Image",
  paragraphs = [], // Expects an array of strings
  features = [], // Expects an array of strings
  buttonText = "Request a Demo",
  buttonLink = "#",
}) => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 lg:mb-16">
          {heading}
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Image Column */}
          {/* --- MODIFIED DIV: Added border --- */}
          <div className="md:w-4/12 flex justify-center p-1 border-2 border-yellow-400 rounded-lg">
            {" "}
            {/* Added p-1, border-2, border-yellow-400, rounded-lg */}
            <img
              src={imageUrl}
              alt={imageAlt}
              // Max width capped at 18rem
              className="rounded-lg shadow-lg w-full max-w-[18rem]"
              // Note: Image already has rounded-lg, border's rounding will match.
            />
          </div>

          {/* Text Column */}
          <div className="md:w-7/12 text-gray-700">
            {/* Render paragraphs */}
            {paragraphs.map((text, index) => (
              <p
                key={index}
                className="mb-5 text-base md:text-lg leading-relaxed"
              >
                {text}
              </p>
            ))}

            {/* Render features */}
            {features.length > 0 && (
              <ul className="space-y-2 mb-8 list-disc list-inside text-base md:text-lg">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}

            {/* Button */}
            <a href={buttonLink}>
              <button className="bg-yellow-400 border border-transparent text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition">
                {buttonText}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
