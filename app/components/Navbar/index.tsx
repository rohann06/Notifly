"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

//Icons
import { PiAirplaneTakeoffLight, PiAirplaneInFlightBold } from "react-icons/pi";
import { MdSpaceDashboard } from "react-icons/md";

const Navabr = () => {
  const pathname = usePathname();
  return (
    <div className=" py-8 px-5 flex flex-col justify-center items-center ">
      <div>
        <Link href={"/"}>
          <h2 className=" flex justify-center items-center text-white text-4xl font-semibold">
            NOTIFLY
            <span className=" text-[40px] ml-2">
              <PiAirplaneTakeoffLight />
            </span>
          </h2>
        </Link>
      </div>

      <div className=" flex flex-col justify-center items-center mt-20 gap-y-7 text-white font-medium w-full ">
        <Link className=" w-full" href={"/"}>
          <div
            className={` flex items-center gap-2 text-lg ${
              pathname !== "/" ? "bg-[#313436]" : "bg-white text-black"
            }  hover:bg-white hover:text-black w-full rounded-lg px-4 py-5`}
          >
            <span className=" text-2xl">
              <MdSpaceDashboard />
            </span>
            Dashboard
          </div>
        </Link>

        <Link className=" w-full" href={"/myFlights"}>
          <div
            className={` flex items-center gap-2 text-lg ${
              pathname !== "/myFlights" ? "bg-[#313436]" : "bg-white text-black"
            }  hover:bg-white hover:text-black w-full rounded-lg px-4 py-5`}
          >
            <span className=" text-2xl">
              <PiAirplaneInFlightBold />
            </span>
            My Flights
          </div>
        </Link>
      </div>

      <div className=" absolute bottom-5 flex items-center justify-center gap-1 text-[#80898d] font-light">
        MadeBy
        <a
          href="https://rohan06.vercel.app/"
          className=" underline font-medium"
        >
          RohanAhire
        </a>
      </div>
    </div>
  );
};

export default Navabr;
