'use client';

import React,{ useEffect,useState } from "react";
import { AuthProvider } from "./components/context/AuthContext";
import MainView from "./components/MainView";

interface ApiEvent {
  id: string;
  attributes: {
    date: string;
    title: string;
    description: string;
  };
}

function App() {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/events", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setEventsData(
          data.data.map((event: ApiEvent) => ({
            id: event.id,
            date: event.attributes.date,
            title: event.attributes.title,
            description: event.attributes.description,
          })),
        );
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <AuthProvider>
      <MainView eventsData={eventsData} />
    </AuthProvider>
  );
}

export default App;
