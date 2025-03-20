//TODO: edit or uncomment accodian section : "how to create new articles"
import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What is This website?",
      answer:
        'This is a MERN Project made by "Pratishu" to showcase of Frontend and Backend Skills.',
    },
    {
      question: "How to View Articles",
      answer:
        "You can go to Articles page and Click on Cards there to View indivisual articles.",
    },
    {
      question: "How to Edit Articles",
      answer:
        "Click on Edit Button on Articles cards to edit, currently you can edit any articles now. In future, there will be feature added where only Articles made by some user can only be edited by that user",
    },
    {
      question: "How to Create New Articles",
      answer:
        'Either Click on "Add New Article" button on Articles page, or goto "/articles/new" URL ',
    },
    {
      question: "How to Delete Articles",
      answer:
        'Click on Edit Button on Articles cards to edit, then click on "DELETE" article.Currently you can Delete any articles now.In future, only authorised people are going to change thier own articles',
    },
  ];

  return (
    <div className="max-w-7xl p-6 min-h-screen pt-64 mx-auto text-gray-700 ">
      <h1 className="text-6xl font-bold mb-8 text-center font-monstt">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border rounded-lg shadow-sm">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center bg-zinc-100 hover:bg-gray-100"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <span className="font-medium text-lg">{item.question}</span>
              <span
                className={`transform transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 py-4 text-lg bg-gray-50">
                <p className="text-gray-600 ">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
