import React from "react";
import MonthView from "./MonthView";
import SideBar from "./sidebar/SideBar";

export default function MainView() {
  return (
    <div className="flex-2">
      <SideBar/>
			<div className=""></div>
			<MonthView/>
    </div>
  );
}
