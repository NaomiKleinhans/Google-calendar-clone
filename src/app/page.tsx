'use client';

import Header from "@/components/header/Header";
import MainView from "@/components/MainView";
import { useState } from "react";

export default function Home() {
  const [eventsData] = useState([]);

  return (
    <div className="">
      <Header />
      <MainView eventsData={eventsData} />
    </div>
  );
}
