import { IoIosHammer } from "react-icons/io";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#FBF6E9] text-[#003229] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Why <span className="text-[#013A31]">Choose Us</span>
        </h2>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex items-start space-x-4">
            <div className="text-4xl">👩‍🔧</div>
            <div>
              <h3 className="text-xl font-semibold">Globally Accepted Tool</h3>
              <p className="text-sm">
                An inspection tool globally acclaimed and well accepted by all
                pest controllers world over.
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex items-start space-x-4">
            <div className="text-4xl">✅</div>
            <div>
              <h3 className="text-xl font-semibold">Assured Instant Report</h3>
              <p className="text-sm">
                With instant reports and visible co-relative graphs, giving a
                dependable experience to customers.
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex items-start space-x-4">
            <div className="text-4xl">
              <IoIosHammer className="text-4xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Non-Invasive Method</h3>
              <p className="text-sm">
                A highly advantageous non-invasive inspection method providing a
                unique advantage in TERMITE BAITING and TERMITE SPOT TREATMENTS.
              </p>
            </div>
          </div>
          {/* Feature 4 */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10">
              <img
                src="/images/portable.webp"
                alt="Multi Tasking Tool"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Portable</h3>
              <p className="text-sm">Light weight, Hand Hold Design.</p>
            </div>
          </div>
          {/* Feature 5 */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10">
              <img
                src="/images/inspection.jpg"
                alt="Multi Tasking Tool"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Faster Inspection</h3>
              <p className="text-sm">
                Quick response, allowing better treatment planning.
              </p>
            </div>
          </div>
          {/* Feature 6 */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10">
              <img
                src="/images/confidence.jpg"
                alt="Multi Tasking Tool"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Elevated Customer Confidence
              </h3>
              <p className="text-sm">
                Brings transparency, as customers can see live data on
                graph/images.
              </p>
            </div>
          </div>
          {/* Feature 7 */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10">
              <img
                src="/images/cost.jpg"
                alt="Multi Tasking Tool"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Cost Effective</h3>
              <p className="text-sm">
                Reduces unwanted visits, reduces re-treatment costs.
              </p>
            </div>
          </div>
          {/* Feature 8 */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10">
              <img
                src="/images/reliable.jpg"
                alt="Multi Tasking Tool"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Reliable technology</h3>
              <p className="text-sm">
                A combination of cutting edge software, innovative hardware
              </p>
            </div>
          </div>
          {/* Feature 9 */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10">
              <img
                src="/images/multiTasking.jpg"
                alt="Multi Tasking Tool"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Multi Tasking Tool</h3>
              <p className="text-sm">
                With this tool professionals can inspect, wood borer, ants,
                rodents
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
