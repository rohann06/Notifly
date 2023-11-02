"use client";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className=" flex items-center justify-center mt-40">
      <SignIn />
    </div>
  );
}
