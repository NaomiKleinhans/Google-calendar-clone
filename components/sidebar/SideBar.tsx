"use client";

import React, { useState } from "react";
import CalendarSideBar from "./CalendarSideBar";
import Create from "./Create";
import UserSearch from "./UserSearch";
import { cn } from "@/lib/utils";
import MyCalendars from "./MyCalendars";
// import Create from './create';

export default function SideBar() {
  const [isSideBarOpen] = useState(false);
  return (
    <aside
      className={cn(
        "w-92 hidden border-t px-2 py-3 transition-all duration-300 ease-in-out lg:block",
        !isSideBarOpen && "lg:hidden",
      )}
    >
      <Create />
      <CalendarSideBar />
      <UserSearch />
      <MyCalendars />
    </aside>
  );
}
