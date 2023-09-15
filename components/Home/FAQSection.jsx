"use client";
import React, { useState } from "react";

const FAQSection = () => {
  return (
    <div className="layout py-20 bg-white">
      <p className="text-3xl font-semibold text-center">
        Frequently Asked Questions
      </p>
      <div className="space-y-3 mt-4 flex flex-col items-center max-w-[800px] mx-auto">
        {faqData.map((item) => (
          <FAQ key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

const FAQ = ({ id, question, answer }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div
      className="my-2 sm:my-4 md:my-6 shadow-lg rounded cursor-pointer bg-white border "
      onClick={toggleExpanded}
    >
      <div className="px-6 text-left items-center h-16 select-none flex justify-between flex-row bg-primaryLight">

        <h5 className="flex-1 font-semibold">{question}</h5>
        <div className="flex-none pl-2">{expanded ? '-' : '+'}</div>
      </div>
      <div
        className={`px-6 rounded  overflow-hidden transition-[max-height] duration-500 ease-in bg-primaryExtraLight ${
          expanded ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="py-4 text-left rounded">{answer}</p>
      </div>
    </div>
  );
};

const faqData = [
  {
    id: 1,
    question: "How do I buy stocks?",
    answer:
      "To buy stocks, you need to open a brokerage account, deposit funds, research and select the stocks you want to purchase, and then place a buy order through your brokerage platform.",
  },
  {
    id: 2,
    question: "How do I choose which stocks to buy?",
    answer:
      "Stock selection involves conducting research on companies, analyzing financial statements, considering industry trends, and aligning your investments with your financial goals and risk tolerance.",
  },
  {
    id: 3,
    question: "How can I manage risk in stock trading?",
    answer:
      "You can manage risk by diversifying your portfolio, setting stop-loss orders, and regularly reviewing and adjusting your investments to align with your risk tolerance.",
  },
  {
    id: 4,
    question: "What is a stock index?",
    answer:
      "A stock index is a benchmark that tracks the performance of a group of stocks, often representing a specific market or industry sector..",
  },
  {
    id: 5,
    question: "What is a bear market vs. a bull market?",
    answer:
      "A bear market is characterized by declining stock prices, while a bull market sees rising stock prices over an extended period.",
  },
  {
    id: 6,
    question: "How do I sell stocks?",
    answer:
      "Selling stocks involves placing a sell order through your brokerage account. The process is similar to buying, where you specify the number of shares and the price at which you want to sell.",
  },
];

export default FAQSection;
