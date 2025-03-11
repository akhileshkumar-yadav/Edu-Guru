'use client';
import React from 'react'
import { GoGoal } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";
import Link from 'next/link';

// import useAppContext from '@/context/appContext'

const Navbar = () => {
  // const { loggedIn, logout } = useAppContext();
  
  return (
    <div>
      <header className="shadow-md bg-white font-[sans-serif] tracking-wide relative z-50">
        <section className="flex items-center flex-wrap lg:justify-center gap-4 py-3 sm:px-10 px-4 border-gray-200 border-b min-h-[75px]">
          <div className='lg:absolute lg:left-[10px] flex justify-start items-center ml-auto'>
            <Link href="/" className="shrink-0">
              <img
                src="/A2.png"
                alt="logo"
                className="lg:w-[250px] w-[100px] h-[50px] ml-5 md:h-[80px]"
              />
            </Link>
          </div>

          {/* {loggedIn ? (
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                className="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          ) : ( */}
            <div className="md:flex hidden md:order-2 ml-20 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Link href="/mainpages/login">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  Get started
                </button>
              </Link>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="collapseMenu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          {/* )} */}
        </section>

        <nav className="flex flex-wrap justify-center px-10 py-3 relative">
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
      </header>
    </div>
  );
};

export default Navbar;
