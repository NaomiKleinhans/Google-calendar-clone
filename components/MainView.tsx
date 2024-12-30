'use client'
import React from "react";
import MonthView from "./MonthView";
import SideBar from "./sidebar/SideBar";
import { useViewStore } from "@/lib/store";
import WeekView from "./WeekView";
import DayView from "./DayView";

export default function MainView() {

  const { selectedView } = useViewStore
  
  return (
    <div className="flex-2">
      <SideBar/>
			<div className=""></div>
      {selectedView === 'month' && <MonthView />}
      {selectedView === 'week' && <WeekView />}
      {selectedView === 'day' && <DayView />}
    </div>
  );
}
