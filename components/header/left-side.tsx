import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function HeaderLeft() {
  return (
    <div className="flex items-center gap-3">
      {/*Burger Menu Button*/}
      <div className="hidden items-center lg:flex">
        <Button variant="ghost" className="cursor-pointer rounded-full p-2">
          <Menu className="size-6" />
        </Button>
				{/*Calendar Icon*/}
        <Image
					src="/calendar images/calendar_1_2x.png"
          width={40}
          height={40}
          alt="google-calendar-icon"
        />
        <h1 className="text-xl">Calendar</h1>
      </div>
      {/*Button to go to current day*/}
      <Button variant="outline">Today</Button>
      {/*Navigation*/}
      <div className="flex items-center gap-3">
        <MdKeyboardArrowLeft className="size-6 cursor-pointer font-bold" />
        <MdKeyboardArrowRight className="size-6 cursor-pointer font-bold" />
      </div>
      {/*Month and Year currently*/}
      <h1 className="hidden text-xl lg:block">October 1 2024</h1>
    </div>
  );
}
