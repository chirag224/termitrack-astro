import React from "react";
const ProductHero = ({
  productName = "Product Name", // Default values
  subTitle = "Product Subtitle",
  description = "Product description goes here.",
  backgroundImageUrl = "/images/IndiaMap_Termitrack.png", // Needs a valid image path/URL
  buttonText = "ORDER NOW",
  buttonLink = "#",
}) => {
  return (
    <section
      className="relative bg-contain bg-right mt-10 bg-no-repeat text-white py-32 md:py-48 "
      // Use prop for background image - ensure URL is valid
      style={{ backgroundImage: "/images/IndiaMap_Termitrack.png" }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative container mx-auto px-12 text-left z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {productName}
        </h1>
        <p className="text-xl  md:text-2xl font-semibold mb-4">{subTitle}</p>
        <p className="text-lg md:text-xl mb-8 max-w-3xl">{description}</p>
        <a href={buttonLink}>
          <button className="bg-yellow-400 border border-transparent text-black py-3 px-6 rounded-lg font-semibold hover:bg-transparent hover:border-yellow-400 hover:text-yellow-400 transition">
            {buttonText}
          </button>
        </a>
      </div>
    </section>
  );
};

export default ProductHero;
