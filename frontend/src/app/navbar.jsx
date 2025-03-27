'use client';
import { useState } from "react";
import { GoGoal } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import Link from 'next/link';

import useAppContext from '../context/appcontext'

const Navbar = () => {
  const { loggedIn, logout } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="shadow-md bg-gray-300/10 font-[sans-serif] tracking-wide relative z-50">

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/A2.png"
              className="lg:w-[250px]  h-[50px] ml-1 md:h-[80px]"
              alt="logo"
            />
          </Link>

          <nav className="hidden md:flex flex-wrap justify-center px-5  relative">
            <div id="collapseMenu" className="max-lg:hidden lg:!block">
              <ul className="lg:flex lg:gap-x-10 max-lg:space-y-3">
                <li className="max-lg:border-b max-lg:pb-4 px-3 lg:hidden">
                  <button type="button">
                    <img
                      src="https://readymadeui.com/readymadeui.svg"
                      alt="logo"
                      className="w-36"
                    />
                  </button>
                </li>
                <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
                  <Link
                    href="/"
                    className="hover:text-[#007bff] text-[#007bff] font-semibold block text-[15px]"
                  >
                    Home
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
                  <Link
                    href="/mainpages/universityListing"
                    className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block"
                  >
                    University
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
                  <Link
                    href="/mainpages/collegeListing"
                    className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block"
                  >
                    College
                  </Link>
                </li>
                <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
                  <Link
                    href="/mainpages/schoolListing"
                    className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block"
                  >
                    School
                  </Link>
                </li>
              </ul>
            </div>
          </nav>


          {loggedIn ? (
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                className="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          ) : (<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link href="/mainpages/signUp">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Get started
              </button>
            </Link>
          </div>
          )}

          <div className="md:hidden ">
              <button
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
            {isOpen && (
              <div className="absolute top-20 right-0 w-full h-[150px] bg-gray-400 flex flex-col items-center justify-center">
                <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/mainpages/universityListing" onClick={() => setIsOpen(false)}>University</Link>
                <Link href="/mainpages/collegeListing" onClick={() => setIsOpen(false)}>College</Link>
                <Link href="/mainpages/schoolListing" onClick={() => setIsOpen(false)}>School</Link>
              </div>
            )}
    </div>
      </header >
    </div >
  );
};

export default Navbar;
