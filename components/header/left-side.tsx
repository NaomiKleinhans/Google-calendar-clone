"use client";

import React from "react";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useDateStore, useToggleSideBarStore, useViewStore } from "@/lib/store";
import dayjs from "dayjs";

export default function HeaderLeft() {
  const todaysDate = dayjs(); // Using dayjs for the current date
  const { userSelectedDate, setDate, setMonth, selectedMonthIndex } =
    useDateStore();

  const { setSideBarOpen } = useToggleSideBarStore();

  const { selectedView } = useViewStore();

  const handleTodayClick = () => {
    switch (selectedView) {
      case "month":
        setMonth(todaysDate.month());
        break;
      case "week":
      case "day":
        setDate(todaysDate);
        setMonth(todaysDate.month());
        break;
      default:
        break;
    }
  };

  const handlePrevClick = () => {
    let newDate;
    switch (selectedView) {
      case "month":
        setMonth(selectedMonthIndex - 1);
        break;
      case "week":
        newDate = userSelectedDate.subtract(1, "week");
        setDate(newDate);
        setMonth(newDate.month());
        break;
      case "day":
        newDate = userSelectedDate.subtract(1, "day");
        setDate(newDate);
        setMonth(newDate.month());
        break;
      default:
        break;
    }
  };

  const handleNextClick = () => {
    let newDate;
    switch (selectedView) {
      case "month":
        setMonth(selectedMonthIndex + 1);
        break;
      case "week":
        newDate = userSelectedDate.add(1, "week");
        setDate(newDate);
        setMonth(newDate.month());
        break;
      case "day":
        newDate = userSelectedDate.add(1, "day");
        setDate(newDate);
        setMonth(newDate.month());
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex items-center gap-3">
      {/* Burger Menu Button */}
      <Button
        variant="ghost"
        className="cursor-pointer rounded-full p-2"
        onClick={() => setSideBarOpen()}
      >
        <Menu className="size-6" />
      </Button>

      {/* Calendar Icon */}
      <div className="hidden items-center text-xl lg:flex lg:flex-row">
        <Image
          src={`/calendar_images/calendar_${todaysDate.date().toString()}_2x.png`}
          width={40}
          height={40}
          alt="google calendar icon"
        />
        <span className="ml-2">Calendar</span>
      </div>

      {/* Button to go to current day */}
      <Button variant="outline" onClick={handleTodayClick}>
        Today
      </Button>

      {/* Navigation */}
      <MdKeyboardArrowLeft
        onClick={handlePrevClick}
        className="size-6 cursor-pointer font-bold"
      />
      <MdKeyboardArrowRight
        onClick={handleNextClick}
        className="size-6 cursor-pointer font-bold"
      />

      {/* Month and Year currently */}
      <h1 className="sm:text-md md:text-lg lg:block lg:text-xl">
        {dayjs().month(selectedMonthIndex).format("MMMM YYYY")}
      </h1>
    </div>
  );
}
