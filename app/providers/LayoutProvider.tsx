"use client";
import Link from "next/link";
import React, { useState } from "react";
import Navabr from "../components/Navbar";

//Icons
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className=" h-full relative">
      <div className=" relative hidden h-full lg:w-80 lg:flex lg:flex-col lg:fixed lg:inset-y-0  bg-[#3C4042]">
        <Navabr />
      </div>
      <main className=" lg:pl-80 lg:m-8">
        <div className=" flex justify-between lg:justify-end items-center gap-2 lg:bg-inherit bg-[#3C4042] p-5 lg:p-0">
          <div className=" lg:hidden">
            <Link href={"/"}>
              <h2 className=" flex justify-center items-center text-white text-2xl font-semibold">
                NOTIFLY
                <span className=" text-[30px] ml-2">
                  <PiAirplaneTakeoffLight />
                </span>
              </h2>
            </Link>
          </div>
          <div className=" flex items-center gap-2">
            <p> Uaser profile </p>
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className=" lg:hidden text-white text-2xl"
            >
              <GiHamburgerMenu />
            </button>
            {isNavOpen && (
              <div
                className={` absolute top-[74px] left-0 w-full bg-white p-5 rounded-b-lg flex flex-col gap-y-2 `}
              >
                <div>
                  <Link href={"/"}>Dashboard</Link>
                </div>
                <hr className=" text-gray-600" />
                <div>
                  <Link href={"/myFlights"}>My Flights</Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>{children}</div>
      </main>
    </div>
  );
};

export default LayoutProvider;
