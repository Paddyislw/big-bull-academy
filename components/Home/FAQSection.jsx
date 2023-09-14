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
      <div className="px-6 text-left items-center h-16 select-none flex justify-between flex-row bg-indigo-100">

        <h5 className="flex-1 font-semibold">{question}</h5>
        <div className="flex-none pl-2">{expanded ? '-' : '+'}</div>
      </div>
      <div
        className={`px-6 rounded  overflow-hidden transition-[max-height] duration-500 ease-in bg-indigo-50 ${
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
    question: "What is the difference between Stock and Share?",
    answer:
      "A stock and a share are essentially one and the same. They both represent a part of the capital of a joint stock company. In India it was always called shares whereas in the US they have been referred to as stocks. They essentially mean the same thing.",
  },
  {
    id: 2,
    question: "What Instruments Are Traded In The Stock Markets?",
    answer:
      "The stock market trades equity shares of various listed companies. In addition, the markets also trade other instruments like index futures, index options, stock futures, stock options, VIX futures etc. Both equity and derivative products are traded in stock markets.",
  },
  {
    id: 3,
    question: "Where Do I Find Stock Related Information",
    answer:
      "There are various sources for finding stock related information like the newspaper, websites, company annual reports etc. StockMarketTodayUpdates also provide a plethora of rich stock market content and analytics on the website itself.",
  },
  {
    id: 4,
    question: "What Are The Factors That Determine The Price Of The Stock",
    answer:
      "Price of the stock is normally determined by growth prospects and the profitability of the company. Normally, based on the attractiveness of the stock a P/E ratio is assigned by the market. Stock prices also depend on demand and supply as well as news flows.",
  },
  {
    id: 5,
    question: "How Would You Choose Stock For Your Portfolio",
    answer:
      "You choose stock by screening the stocks in the market on profitability, risk, valuations etc. Such analytics are available on the Tradebulls website for traders to easily create a portfolio. It is always advisable to check with your RM or analyst before taking portfolio decisions.",
  },
  {
    id: 6,
    question: "When Is THe Best Time To Buy/Sell Share And Maximize Profit",
    answer:
      "There is nothing like a best time to buy the share because it depends on your trading / investment perspective. Traders must buy when the downside risk is the lowest and investors must buy when the upside potential is highest.FAQs",
  },
];

export default FAQSection;
