import React from "react";
import MonthView from "./MonthView";

export default function MainView() {
  return (
    <div className="flex">
			<div className="w-full flex-1"></div>
			<MonthView/>
    </div>
  );
}
