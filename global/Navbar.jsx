"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const path = usePathname();
  const style =
    path === "/service"
      ? {
          borderBottom: "1px solid gray",
          backgroundColor: "#110a19",
          color: "white",
        }
      : {};
  return (
    <div
      className="layout flex justify-between h-[70px] items-center z-10 relative"
      style={style}
    >
      <Link href={"/"}>
        <div>Logo</div>
      </Link>
      <div className="flex space-x-2">
        <Link href={"/"}>
          <p>Home</p>
        </Link>
        <Link href={"/service"}>
          <p>Service</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
