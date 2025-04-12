// src/components/HeroSection.jsx
import React, { useState } from "react"; // Import useState
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import QuoteModal from "./QuoteModel"; // Import QuoteModal here

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
    <>
      <section
        id="home"
        className="relative h-[90vh] flex items-center justify-center overflow-hidden" // Ensure full-screen section
      >
        {/* Swiper Background */}
        <div className="absolute inset-0">
          <Swiper
            autoplay={{ delay: 3000 }} // Auto-play every 3 seconds
            effect="fade" // Fade effect for background images
            loop={true} // Loop through the images
            modules={[Autoplay, EffectFade]}
            className="h-full w-full"
          >
            {backgroundImages.map((image) => (
              <SwiperSlide key={image} className="h-full w-full">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-20 text-center text-white px-6 md:px-12 max-w-4xl select-none">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Say Goodbye to Termites.
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Rely on accredited professionals across INDIA, backed with globally
            recognised inspection tools &ldquo;TERMATRAC&quot; to eliminate
            termite infestation hidden behind tough surfaces.
          </p>
          <p className="italic text-sm md:text-base mb-8">
            &quot;Smart Detection, Strong Protection!&quot;
            <span className="text-xl">&#169;</span>
          </p>
          {/* Get Free Quote Button */}
          <div className="flex justify-center space-x-4">
            <button
              className="bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-yellow-300 transition-all ease-in-out duration-300"
              onClick={toggleModal} // Toggle modal visibility
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* Modal Conditionally Rendered */}
      {isModalOpen && <QuoteModal isOpen={isModalOpen} onClose={toggleModal} />}
    </>
  );
}
