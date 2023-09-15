"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TELEGRAM_LINK } from "@/utils/constant";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import logo from "../utils/icon.png";

const Footer = () => {
  const path = usePathname();
  const router = useRouter();

  const handleNavClick = (id) => {
    if (path === "/") {
      router.push(id);
    } else {
      router.push("/");
      router.push(id);
    }
  };
  return (
    <div
      className={`layout flex justify-between py-24 sm:grid sm:grid-cols-2 sm:justify-items-center sm: gap-4 bg-[#5f2916] text-white`}
    >
      <div>
        <div className="flex items-center mb-2">
          <Image
            src={logo}
            alt="logo"
            className="w-[110px] lg:w-[100px] sm:w-[90px]"
          />
        </div>
      </div>
      <div className="font-semibold space-y-3 mb:text-sm">
        <Link href={"/"} className="block">
          <p className="cursor-pointer  navBtnGreen">Home</p>
        </Link>

        <p
          className="cursor-pointer  navBtnGreen"
          onClick={() => handleNavClick("/#about")}
        >
          About Us
        </p>
        <p
          className="cursor-pointer  navBtnGreen"
          onClick={() => handleNavClick("/#testimonial")}
        >
          Testimonial
        </p>
      </div>
      <div className="font-semibold space-y-3 mb:text-sm">
        <Link href={"/service"} className="block">
          <p className="cursor-pointer  navBtnGreen">Our Services</p>
        </Link>
        <Link href={"/"} className="block">
          <p className="cursor-pointer  navBtnGreen">Contact Us</p>
        </Link>
        <Link href={TELEGRAM_LINK} target="_blank" className="block">
          <p className="cursor-pointer  navBtnGreen">Telegram</p>
        </Link>
      </div>
      <div className="font-semibold space-y-3 mb:text-sm">
        <a target="_blank" href="/" className="block">
          <p className="cursor-pointer  navBtnGreen">Email Us</p>
        </a>
        <a target="_blank" href="/" className="block">
          <p className="cursor-pointer  navBtnGreen">Instagram</p>
        </a>
        <a target="_blank" href="/" className="block">
          <p className="cursor-pointer  navBtnGreen">WhatsApp</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
