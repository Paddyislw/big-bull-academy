import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className={`layout flex justify-between py-24 sm:grid sm:grid-cols-2 sm:justify-items-center sm: gap-4 bg-[#110a19] text-white`}
    >
      <div>
        <div className="flex items-center mb-2">
          {/* <Image src={logo} className="w-14 mb:w-10" alt="Image by Freepik" /> */}
          {/* <p>LOGO</p> */}
          <p className="mb:text-sm">Big Bull Academy</p>
        </div>
        <p className="text-gray-600 text-sm mb:text-xs text-center">
          The art
          <br className="hidden mb:block" /> of trading
        </p>
      </div>
      <div className="font-semibold space-y-3 mb:text-sm">
        <Link href={"/"} className="block">
          <p className="cursor-pointer  navBtnGreen">Home</p>
        </Link>
        <Link href={"/contactUs"} className="block">
          <p className="cursor-pointer  navBtnGreen">About Us</p>
        </Link>
        <Link href={"/testimonial"} className="block">
          <p className="cursor-pointer  navBtnGreen">Testimonial</p>
        </Link>
      </div>
      <div className="font-semibold space-y-3 mb:text-sm">
        <Link href={"/courses"} className="block">
          <p className="cursor-pointer  navBtnGreen">Our Services</p>
        </Link>
        <Link href={"/contactUs"} className="block">
          <p className="cursor-pointer  navBtnGreen">Contact Us</p>
        </Link>
        <Link href={"/https://telegram.me/begin_trader"} className="block">
          <p className="cursor-pointer  navBtnGreen">Telegram</p>
        </Link>
      </div>
      <div className="font-semibold space-y-3 mb:text-sm">
        <a
          target="_blank"
          href="mailto:begintraderr@gmail.com"
          className="block"
        >
          <p className="cursor-pointer  navBtnGreen">Email Us</p>
        </a>
        <a
          target="_blank"
          href="https://instagram.com/begin_trader?igshid=MmU2YjMzNjRlOQ=="
          className="block"
        >
          <p className="cursor-pointer  navBtnGreen">Instagram</p>
        </a>
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=9629123326"
          className="block"
        >
          <p className="cursor-pointer  navBtnGreen">WhatsApp</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
