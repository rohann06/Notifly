"use client";
import Link from "next/link";
import React, { useState } from "react";
import Navabr from "../components/Navbar";
import { useSession } from "@clerk/nextjs";
//Icons
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { UserButton } from "@clerk/nextjs";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { session } = useSession();
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

            {session ? (
              <div className=" bg-white py-1 pr-1 pl-2 rounded-full">
                <UserButton afterSignOutUrl="/" showName />
              </div>
            ) : (
              <div>
                <Link href={"/sign-in"}>
                  <button className=" bg-white text-black font-medium hover:font-bold px-5 py-2 rounded-lg">
                    Log in
                  </button>
                </Link>
              </div>
            )}

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
