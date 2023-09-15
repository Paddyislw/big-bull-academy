import Image from "next/image";
import Link from "next/link";
import React from "react";
import popover from "./popover.jpg";
import { TELEGRAM_LINK } from "@/utils/constant";

const Popover = ({ showModal,setShowModal }) => {
  return (
    <div
      className={`h-screen w-full z-[99999] fixed inset-0 flex justify-center items-center transition-opacity duration-300 ${
        showModal ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div
        className={`w-[600px] h-[384px] mb:w-[370px]  bg-gray-200  relative   ease-in-out transition-all duration-1000   ${
          showModal ? "scale-100" : "scale-50"
        }`}
      >
        {/* <div
          className="absolute top-0 right-0 pr-2 cursor-pointer"
          onClick={() => setShowModal(false)}
        >
          ✖
        </div>
        <p className="text-center text-2xl font-semibold">
          Join Our Telegram Group
        </p>
        <p className="text-lg font-semibold mt-4">
          Join Our Telegram Group for:
        </p>
        <div className="flex justify-between items-end">
          <div className="space-y-2 text-sm text-gray-700 mt-2 font-semibold">
            <p>✅ 3-4 Daily Calls</p>
            <p>✅ Risk & Reward: 1:2/1:4 ++</p>
            <p>✅ Accuracy 90++</p>
            <p>✅ Expert Guidance</p>
            <p>✅ Min Capital: 15K</p>
          </div>
        </div>
        <Link
          href={"https://telegram.me/intradayjackpot_official"}
          target="_blank"
        >
          <button className="w-full bg-blue-200 p-2 text-xl font-semibold mt-5 rounded-lg">
            Join Now 👉{" "}
          </button>{" "}
        </Link> */}
        <div
          className="absolute top-0 right-0 pr-3 pt-1 cursor-pointer text-white"
          onClick={() => setShowModal(false)}
        >
          ✖
        </div>
        <div className="flex bg-[#eeca92] h-full mb:flex-col">
          <Image
            src={popover}
            alt=""
            className="w-[230px] mx-8 object-contain rounded mb:mx-auto mb:p-2"
          />
          <div className="bg-[#15181a] text-white px-6 py-20 space-y-6">
            <p className="text-2xl font-semibold text-primaryDark mb:text-center">
              Join a successful trader community.
            </p>
            <p className="mb:text-center">
              Become a part of a thriving community comprising accomplished
              traders.
            </p>
            <Link
              href={TELEGRAM_LINK}
              target="_blank"
              className="block"
            >
              <button className="bg-primaryLight text-primaryDark py-2 px-4 font-semibold rounded-lg mb:mx-auto mb:block">
                👉 Join Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popover;
