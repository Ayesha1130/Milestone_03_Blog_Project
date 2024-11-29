"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagramSquare,
} from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex  justify-between h-20 p-4 items-center  bg-primary opacity-80 ">
      <button
        title="button"
        onClick={toggleMenu}
        className=" fixed right-4 z-50 p-2 "
      >
        {!isOpen ? (
          <IoMdMenu size={20} className="md:hidden lg:hidden block " />
        ) : (
          <RxCross2 size={20} className="md:hidden lg:hidden block " />
        )}
      </button>
      <div className="flex ">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Header Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>

        <h1 className="font-bold text-xl md:text-2xl lg-text-3xl">
          Welcome To My Blog
        </h1>
      </div>

      <nav className="hidden md:flex lg:flex flex-grow justify-end">
        <ul className="text-xl flex flex-row justify-end gap-5  italic  ">
          <li className="hover:underline ">
            <Link href="https://www.linkedin.com/in/ayesha-iqbal-2613402b4/">
              <FaLinkedin className="hover:text-blue-600" />
            </Link>
          </li>
          <li className="hover:underline">
            <Link href="https://github.com/Ayesha1130">
              <FaGithub className="hover:text-gray-600" />
            </Link>
          </li>
          <li className="hover:underline ">
            <Link href="https://www.facebook.com/profile.php?id=61557002344632">
              <FaFacebook className="hover:text-blue-900" />
            </Link>
          </li>
          <li className="hover:underline">
            <Link href="https://www.instagram.com/">
              <FaInstagramSquare className="hover:text-rose-700" />
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu*/}
      {isOpen && (
        <nav className="md:hidden lg:hidden absolute top-20 left-0 w-full  ">
          <ul className="flex flex-col font-semibold gap-4 p-4 items-center  absolute  w-full h-[100vh] bg-primary ">
            <li>
              <Link href="https://www.linkedin.com/in/ayesha-iqbal-2613402b4/">
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/Ayesha1130">
                <FaGithub />
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/profile.php?id=61557002344632">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/">
                <FaInstagramSquare />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
