import TelegramDes from "@/components/Service/TelegramDes";
import Footer from "@/global/Footer";
import Navbar from "@/global/Navbar";
import React from "react";

const Service = () => {
  return (
    <div className=" flex flex-col">
      <Navbar />
      <div className="grow layout py-10">
        <p className="text-center text-4xl mb:text-3xl">
          Welcome to our Stock Options, Banknifty,
          <br /> and Nifty Telegram Group!
        </p>
        <p className="text-center w-[70%] mx-auto mt-4 mb:w-fit">
          Are you looking to make informed decisions in the world of stock
          trading? Look no further! Our Telegram group offers you the
          opportunity to access expert guidance and invaluable insights in the
          dynamic world of stock options, Banknifty, and Nifty trading. Heres
          what you can expect when you join us:
        </p>
        <TelegramDes />
        <p className="text-center w-[70%] mx-auto mt-10 text-lg font-semibold mb:w-fit">
          Join our Telegram group today and embark on a journey to enhance your
          trading skills and profitability. Dont miss out on this opportunity to
          gain access to valuable insights and strategies.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
