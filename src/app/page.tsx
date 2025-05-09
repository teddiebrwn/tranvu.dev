"use client";
import ContactForm from "./ContactForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Instagram } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="border rounded-2xl space-y-2 p-2">
        <div className="flex flex-col gap-4 sm:gap-3 md:gap-4 w-full sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto sm:px-3 border border-[var(--border-secondary)] rounded-lg p-4 ">
          {/* name */}
          <div className="flex items-center justify-center gap-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              tranvu.dev
            </h1>
            {/* <Dot className="w-6 h-6 animate-bounce text-green-400 translate-y-[0.3em] md:translate-y-[0.6em]" /> */}
            {/* <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">dev</h1> */}
          </div>
          <p className="text-xs sm:text-sm md:text-base text-center text-neutral-500">
            hi i&apos;m tranvu — an indie dev who keeps it minimal.
          </p>

          <Link
            href="https://x.com/tranvu_dev?s=21"
            target="_blank"
            className=" w-full justify-center cursor-pointer"
          >
            <Button className="w-full flex gap-2 items-center border text-sm font-semibold p-2 pl-8 pr-8 cursor-pointer ">
              <Twitter width={16} height={16} />
              <div className="w-full">twitter</div>
            </Button>
          </Link>

          <Link
            href="https://www.facebook.com/teddievux/"
            target="_blank"
            className=" w-full justify-center cursor-pointer"
          >
            <Button className="w-full flex gap-2 items-center border text-sm font-semibold p-2 pl-8 pr-8 cursor-pointer">
              <Facebook width={16} height={16} />
              <div className="w-full">facebook</div>
            </Button>
          </Link>

          <Link
            href="https://www.instagram.com/dev__ted/"
            target="_blank"
            className=" w-full justify-center cursor-pointer"
          >
            <Button className="w-full flex gap-2 items-center border text-sm font-semibold p-2 pl-8 pr-8 cursor-pointer">
              <Instagram width={16} height={16} />
              <div className="w-full">instagram</div>
            </Button>
          </Link>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
