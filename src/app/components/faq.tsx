import { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpen(open === index ? null : index);
  };

  const faqData = [
    { 
      question: "Do I need to be a US citizen to work with doola?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates optio, quae, voluptatum ipsa facilis facere eveniet consequatur consectetur velit id fuga ipsum voluptas, minus quod sint perferendis provident voluptate quibusdam?",
    },
    {
      question: "What information do you need from me to get started?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates optio, quae, voluptatum ipsa facilis facere eveniet consequatur consectetur velit id fuga ipsum voluptas, minus quod sint perferendis provident voluptate quibusdam?",
    },
    {
      question: "What is an EIN?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates optio, quae, voluptatum ipsa facilis facere eveniet consequatur consectetur velit id fuga ipsum voluptas, minus quod sint perferendis provident voluptate quibusdam?",
    },
    {
      question: "What is an ITIN?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates optio, quae, voluptatum ipsa facilis facere eveniet consequatur consectetur velit id fuga ipsum voluptas, minus quod sint perferendis provident voluptate quibusdam?",
    },
    {
      question: "What is an LLC (Limited Liability Company)?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates optio, quae, voluptatum ipsa facilis facere eveniet consequatur consectetur velit id fuga ipsum voluptas, minus quod sint perferendis provident voluptate quibusdam?",
    },
    {
      question: "Still have a question?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates optio, quae, voluptatum ipsa facilis facere eveniet consequatur consectetur velit id fuga ipsum voluptas, minus quod sint perferendis provident voluptate quibusdam?",
    },
  ];

  return (
    <div className="col-12">

    <div className="flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-[50px] font-[600] text-black mb-4">Frequently Asked Questions</h2>
      <p className="underline text-[24px] font-[500] cursor-pointer leading-[1px]">More FAQs</p>

      {/* FAQ List */}
      <div className="w-full max-w-4xl mt-8">
        {faqData.map((faq, index) => (
          <div key={index} className=" border-gray-300">
            {/* Question */}
            <div
              className="flex justify-between items-center pt-2 pb-1 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <p className="text-black font-medium">{faq.question}</p>
              <span className="text-black text-xl mb-0 font-bold">
                {open === index ? "-" : "+"}
              </span>
            </div>

            {/* Answer (collapsible) */}
            {open === index && (
              <p className="text-gray-700 text-sm font-[400] mt-0 pl-4">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQ;
