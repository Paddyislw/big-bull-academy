"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import logo from "../utils/icon.png";
import Image from "next/image";

const Navbar = () => {
  const path = usePathname();
  const style =
    path === "/service"
      ? {
          borderBottom: "1px solid gray",
          backgroundColor: "#5f2916",
          color: "white",
        }
      : {};
  return (
    <div
      className="layout flex justify-between h-[100px] items-center z-10 relative"
      style={style}
    >
      <Link href={"/"}>
        <div>
          <Image
            src={logo}
            alt="logo"
            className="w-[110px] lg:w-[100px] sm:w-[90px]"
          />
        </div>
      </Link>
      <div className="flex space-x-4">
        <Link href={"/"}>
          <p className="border-2  text-primaryExtraLight font-semibold py-1 px-4 rounded">
            Home
          </p>
        </Link>
        <Link href={"/service"}>
          <p className="bg-primaryExtraLight hover:bg-primaryLight text-primaryDark border-2   font-semibold py-1 px-4 rounded">
            Service
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
