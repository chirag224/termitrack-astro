/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const PestServiceCard = ({
  pestType,
  description,
  imageSrc,
  point1,
  point2,
  point3,
  isHighlighted,
}) => {
  return (
    <motion.div
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full border-2 w-full transition-all duration-300 ease-in-out ${
        isHighlighted
          ? "border-yellow-700 scale-105 shadow-[0px_0px_35px_15px_rgba(255,223,0,0.35)] z-10"
          : "border-gray-200 hover:shadow-xl"
      }`}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={`${pestType} control service`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h2 className="text-xl font-bold">{pestType}</h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-yellow-100 p-2 rounded-full">
            <img
              src="/images/termite.jpg"
              className="rounded-full object-cover h-8 w-8"
              alt="Termite Detection Sensor"
            />
          </div>
          <div className="bg-green-100 py-1 px-3 rounded-full text-green-800 font-semibold text-sm">
            EMI available
          </div>
        </div>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <ul className="text-sm text-gray-500 mb-4 mt-auto">
          <li className="flex items-center mb-1">
            <span className="text-green-600 mr-2 font-bold">✓</span>
            <span>{point1}</span>
          </li>
          <li className="flex items-center mb-1">
            <span className="text-green-600 mr-2 font-bold">✓</span>
            <span>{point2}</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-600 mr-2 font-bold">✓</span>
            <span>{point3}</span>
          </li>
        </ul>
      </div>

      {/* Button Section */}
      <div className="px-4 pb-4 pt-2 mt-auto border-t border-gray-100">
        <button className="w-full bg-gradient-to-r from-green-600 to-lime-500 hover:from-green-700 hover:to-lime-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
          Contact Us for pricing
        </button>
      </div>
    </motion.div>
  );
};

const PestServicesGrid = ({ highlightedProduct }) => {
  const pestServices = [
    {
      pestType: "Tracker Only",
      description:
        "Most trusted, basic termite detection tool, making professional termite management 'Professional'",
      imageSrc: "/images/trackerOnly.png",
      price: 89,
      point1: "Light Weight",
      point2: "Easy to handle",
      point3: "Budget Friendly",
    },
    {
      pestType: "iTracker-Base",
      description:
        'An upgraded tool in "Professional Termite Management", heavily relying on scientific inspection in termite management.',
      imageSrc: "/images/itrackerBase.jpg",
      price: 79,
      point1: "Termite Tracking ",
      point2: "Temperature Sensor",
      point3: "Humidity Sensor",
    },
    {
      pestType: "iTracker-Pro",
      description:
        "With thermal imaging this professional inspection tool gives termite management an edge in the ever competitive scenario.",
      imageSrc: "/images/trackerPro.jpg",
      price: 69,
      point1: "Termite Tracking",
      point2: "Temperature & Humidity Sensor",
      point3: "Thermal Imaging",
    },
  ];

  return (
    <div id="trackerRange" className="bg-gray-50 py-12 px-4 scroll-mt-16">
      <h2 className="text-3xl font-bold text-center mb-8">iTracker Range</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 max-w-7xl mx-auto">
        {pestServices.map((service) => (
          <PestServiceCard
            key={service.pestType}
            pestType={service.pestType}
            description={service.description}
            imageSrc={service.imageSrc}
            price={service.price}
            point1={service.point1}
            point2={service.point2}
            point3={service.point3}
            isHighlighted={service.pestType === highlightedProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default PestServicesGrid;
