"use client";

import React, { Fragment } from "react";
import MonthViewBox from "./month-view-box";
import { useDateStore } from "@/lib/store";

export default function MonthView() {
  const { twoDMonthArray } = useDateStore();
  return (
    <section className="sm:h-[75vh] md:h-[90vh] lg:h-[100vh] w-full grid grid-cols-7 grid-rows-5">
      {twoDMonthArray.map((row, i) => (
        <Fragment key={i}>
          {row.map((day, index) => (
            <MonthViewBox key={index} day={day} rowIndex={i} />
          ))}
        </Fragment>
      ))}
    </section>
  );
}
