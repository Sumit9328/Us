import { useState } from "react";

export default function RecFaqPart() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const documents = [
    { title: "Digital Certificate of Incorporation" },
    { title: "Digital Statutory forms" },
    { title: "Articles of Association" },
    { title: "Bank account" },
  ];

  return (
    <div className="bg-[#F7F3EB] py-12 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl">
        <h2 className="text-sm text-center font-[400] mb-2">
          COMPANY FORMATION DOCUMENTS
        </h2>
        <h1 className="text-2xl font-[600] text-center mb-8">
          What you get when you register <br /> a company
        </h1>

        {documents.map((item, index) => (
          <div
            key={index}
            className="border-t border-[#EDE8DD] bg-white mb-3 rounded-[20px] overflow-hidden"
          >
            <button
              className="w-full text-left px-6 py-3 flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-sm font-medium">{item.title}</span>
              <span
                className={`text-2xl transition-transform duration-300 ${
                  activeIndex === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4 text-sm text-gray-600">
                {/* Add content here */}
                <p>This is the content for {item.title}.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
