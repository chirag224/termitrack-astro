// src/components/HeroSection.jsx
import React, { useState } from "react"; // Import useState
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import QuoteModal from "./QuoteModel"; // Import QuoteModal here

// Removed onToggleModal from props
export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State lives here now

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Local function toggles local state
  };

  const backgroundImages = [
    "https://res.cloudinary.com/epcorn/image/upload/v1743769573/co3ollczowvshv6rnd6f.jpg",
    "https://res.cloudinary.com/epcorn/image/upload/v1743769036/meh0mukzsk9nezbtnfrb.jpg",
    "https://res.cloudinary.com/epcorn/image/upload/v1743769036/jmkq4iwvsgpy6ymjaht2.jpg",
  ];

  return (
    // Using a React.Fragment to return multiple elements (section and modal)
    <>
      <section
        id="home"
        className="relative h-[90vh] flex items-center justify-center overflow-visible"
      >
        {/* Swiper Background */}
        <div className="absolute inset-0">
          <Swiper /* ... Swiper props ... */ className="h-full w-full">
            {backgroundImages.map((image) => (
              <SwiperSlide key={image} className="h-full w-full">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-0 bg-black bg-opacity-45 z-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center text-white px-6 md:px-12 max-w-4xl select-none">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 select-none">
            Say Goodbye to Termites.
          </h1>
          <p className="text-lg md:text-2xl mb-6 select-none ">
            Rely on accredited professionals across INDIA, backed with globally
            recognised inspection tools &ldquo;TERMATRAC&quot; to eliminate
            termite infestation hidden behind tough surfaces.
          </p>
          <p className="italic text-sm md:text-base mb-8 select-none">
            &quot;Smart Detection, Strong Protection! &quot;
            <span className="text-xl">&#169;</span>
          </p>
          <div className="flex justify-center space-x-4">
            <button
              className="bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-yellow-300 transition"
              onClick={toggleModal} // Calls the LOCAL toggleModal function
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Conditionally render modal based on LOCAL state */}
      {isModalOpen && <QuoteModal isOpen={isModalOpen} onClose={toggleModal} />}
    </>
  );
}
