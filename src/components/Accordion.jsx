import { useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6">
      <dt className="grid grid-cols-12 cursor-pointer" onClick={onClick}>
        <p className="font-semibold text-lg col-span-11">{question}</p>
        <div className="col-span-1 flex items-center justify-center">
          <RiArrowUpSLine
            className={
              isOpen
                ? "rotate-0 size-7 "
                : "-rotate-180 transition-transform size-7"
            }
          />
        </div>
      </dt>
      {isOpen && (
        <dd className="text-lg font-light mt-6">
          <p>{answer}</p>
        </dd>
      )}
    </div>
  );
}

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Termatrac?",

      answer: `iTracker from Termatrac is a non-invasive, non-destructive termite detection system that uses advanced MW technology to detect termite activity.
`,
    },
    {
      question: "Is it gas sensor based?",
      answer: `No, iTracker from Termatrac is not a gas sensor, sensing CO2. It allows the Professional Pest Controller to accurately pinpoint the location of termites and treat it Spot-on.`,
    },
    {
      question: "On what surfaces does the Termatrac work best?",
      answer:
        "iTracker from Termatrac works best on all surfaces. A well-calibrated machine always gives out reliable readings.",
    },
    {
      question: `Can iTracker from Termatrac detect other pests?`,
      answer: `Yes, iTracker from Termatrac is a non-invasive inspection tool that can spot pests within surfaces, making it effective beyond just termites. It can also detect Wood Borers, Ants, and other pests.`,
    },
    {
      question: `Do you have a local (Indian) repair and calibration centre?`,
      answer: `Yes, we have a local calibration centre at Mumbai, allowing machines to be repaired and calibrated instantly, thereby reducing freight costs.`,
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div
      id="faq"
      className="px-6 py-12 max-w-7xl mt-3 mx-auto lg:px-8 lg:mt-10"
    >
      <h2 className="h2-style">FAQs</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start ">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Accordion;
