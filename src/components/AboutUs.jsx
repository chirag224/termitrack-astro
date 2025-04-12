const AboutUs = () => {
  return (
    <section id="about" className="bg-[#013A31] text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About <span className="text-[#FBBF24]">Termitrack</span>
        </h2>
        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-8">
          India's first, dedicated, professional termite management networking
          platform for professionals, customers and research scientists.
        </p>
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company History */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
              www.termitrack.com
            </h3>
            <p className=" text-left">
              A dedicated portal christened by a 2nd generation entrepreneur
              allowing his passion and focused commitment towards driving
              professionalism in the termite Managemnet sector. Venturing with
              termatrac Australia to provide &quot;iTracker&quot; was an effort
              to bring marque products in termite management to india, where
              technology drives accuracy and efficiency of pest control
              operators and building inspections, providing inspectors with
              higher quality information to better protect the homes and
              businesses of their customers from termites and other pests.
            </p>
          </div>
          {/* Core Values */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
              Our Values
            </h3>
            <ul className=" text-left">
              <li>
                <span className="font-semibold text-yellow-300">
                  Sustainability:{"   "}
                </span>
                <span>
                  We're committed to reducing the environmental impact of
                  termite control by minimal chemical use.
                </span>
              </li>
              <li>
                <span className="font-semibold text-yellow-300">
                  Innovation:{" "}
                </span>
                <span>
                  We're committed to staying at the forefront of termite
                  detection & management technology.
                </span>
              </li>
              <li>
                <span className="font-semibold text-yellow-300">
                  Reliability:{" "}
                </span>
                <span>
                  Our product & service solutions are designed to provide
                  consistent and dependable results.
                </span>
              </li>
              <li>
                <span className="font-semibold text-yellow-300">
                  Customer Focus:{" "}
                </span>
                <span>
                  We put our customers at the heart of everything we do.
                </span>
              </li>
              <li>
                <span className="font-semibold text-yellow-300">
                  Collaboration:{" "}
                </span>
                <span>
                  We believe in the power of collaboration, working with
                  industry experts, researchers, and partners.
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Certifications */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">
            Certifications & Memberships
          </h3>
          <p>
            A Certification & Membership program for termitrack
            subscribers coming soon. .
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
