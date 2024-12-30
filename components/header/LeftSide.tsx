"use client";

import React from "react";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useDateStore, useToggleSideBarStore, useViewStore } from "@/lib/store";
import dayjs from "dayjs";

export default function HeaderLeft() {
  const todaysDate = dayjs();
  const { userSelectedDate, setDate, setMonth, selectedMonthIndex } =
    useDateStore();

  const { setSideBarOpen } = useToggleSideBarStore();

  const { selectedView } = useViewStore();

  const handleTodayClick = () => {
    switch (selectedView) {
      case "month":
        setMonth(dayjs().month());
        break;
      case "week":
        setDate(todaysDate);
        break;
      case "day":
        setDate(todaysDate);
        setMonth(dayjs().month());
        break;
      default:
        break;
    }
  };

  const handlePrevClick = () => {
    switch (selectedView) {
      case "month":
        setMonth(selectedMonthIndex - 1);
        break;
      case "week":
        setDate(userSelectedDate.subtract(1, "week"));
        break;
      case "day":
        setDate(userSelectedDate.subtract(1, "day"));
        break;
      default:
        break;
    }
  };

  const handleNextClick = () => {
    switch (selectedView) {
      case "month":
        setMonth(selectedMonthIndex + 1);
        break;
      case "week":
        setDate(userSelectedDate.add(1, "week"));
        break;
      case "day":
        setDate(userSelectedDate.add(1, "day"));
        break;
      default:
        break;
    }
  };
  return (
    <div className="flex items-center gap-3">
      {/*Burger Menu Button*/}
      <div className="flex items-center">
        <Button
          variant="ghost"
          className="cursor-pointer rounded-full p-2"
          onClick={() => setSideBarOpen()}
        >
          <Menu className="size-6" />
        </Button>
        {/*Calendar Icon*/}
        <div className="hidden items-center text-xl lg:flex lg:flex-row">
          <Image
            src={`/calendar_images/calendar_${todaysDate.date().toString()}_2x.png`}
            width={40}
            height={40}
            alt="google calendar icon"
          />
          <span className="ml-2">Calendar</span>
        </div>
      </div>
      {/*Button to go to current day*/}
      <Button variant="outline" onClick={handleTodayClick}>
        Today
      </Button>
      {/*Navigation*/}
      <div className="flex items-center gap-3">
        <MdKeyboardArrowLeft
          onClick={handlePrevClick}
          className="size-6 cursor-pointer font-bold"
        />
        <MdKeyboardArrowRight
          onClick={handleNextClick}
          className="size-6 cursor-pointer font-bold"
        />
      </div>
      {/*Month and Year currently*/}
      <h1 className="sm:text-xs md:text-lg lg:block lg:text-xl">
        {dayjs(new Date(dayjs().year(), selectedMonthIndex)).format(
          "MMMM YYYY",
        )}
      </h1>
    </div>
  );
}
