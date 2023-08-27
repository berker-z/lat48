"use client";
import Link from "next/link";
import Image from "next/image";
import "globals.css";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "./Logo";
function Navbar() {
  const menuRef = useRef(null);
  const [hamburgerToggle, setHamburgerToggle] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const changeOpacity = () => {
    if (window.scrollY >= 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  const handleHamburgerToggle = () => {
    const newToggle = !hamburgerToggle;
    return setHamburgerToggle(newToggle);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setHamburgerToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  useEffect(() => {
    window.addEventListener("scroll", changeOpacity);
  }, []);

  return (
    <div
      className={`sticky w-auto mb-5 z-10 top-0 ${
        scrolled ? " boxxy-flat" : "boxxy"
      }`}
    >
      <nav className="  justify-between flex content-center">
        <div className="">
          <Link href="/" className=" inline-block py-3 pl-3 align-middle">
            <Image
              src="/assets/images/latnew.svg"
              alt="something"
              width={150}
              height={150}
              className="mr-2 object-cover"
            />
          </Link>
        </div>

        <div className=" my-auto relative w-fit mr-5 ml-10 " ref={menuRef}>
          <button
            onClick={handleHamburgerToggle}
            className={` text-size-3xl rounded-full p-2 ${
              hamburgerToggle ? " bg-gray-700 shrink-0  bg-opacity-70" : ""
            }`}
          >
            <RxHamburgerMenu />
          </button>
          <div
            className={`absolute    translate-x-5 justify-items-end top-full mt-4 py-3 px-5 right-0 z-10 flex flex-col divide-y-2 divide-gray-700 divide-dashed gap-y-2 ${
              hamburgerToggle ? "block" : "hidden"
            } ${scrolled ? "boxxy-flat" : "boxxy-flat"}`}
          >
            <Link href="/todo">todo</Link>
            <Link href="/todo">about</Link>
            <Link href="/team">team</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
