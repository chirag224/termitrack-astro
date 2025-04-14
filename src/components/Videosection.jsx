import React from "react";

const Videosection = ({
  heading = "See It In Action",
  videoId = null, // Expects YouTube Video ID string
}) => {
  // Only render the section if a video ID is provided
  if (!videoId) {
    return null;
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-green-600 to-lime-500">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          {heading}
        </h2>
        {/* Responsive Aspect Ratio Box */}
        {/* Requires @tailwindcss/aspect-ratio plugin */}
        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl bg-black">
          {" "}
          {/* Added bg-black fallback */}
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`} // Added params to potentially clean up player
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Videosection;
