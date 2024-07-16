"use client";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import ThemeChange from "../ThemeChange";

const NavBar = () => {
  return (
    <div className="flex justify-between sticky top-0 w-full container">
      <Link className="font-serif" href={'/'}>Kyawtk</Link>
      <ul className="hidden sm:flex  space-x-3">
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/blog"}>About</Link>
        </li>
        <li>
          <Link href={"#contact"}>Contact</Link>
        </li>
      </ul>

      <div className="flex gap-3">
        <ThemeChange />
        <button className="btn btn-square btn-ghost md:hidden">
          <MenuIcon />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
