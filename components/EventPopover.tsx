'use client';
import React,{ useState } from "react";
import { Button } from "./ui/button";
import { EventCreate } from "./EventCreate";
// import { TaskCreate } from "./TaskCreate";

export default function EventPopover({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formType, setFormType] = useState<"Event" | "Task">("Event");

  // State for both forms
  const [title, setTitle] = useState(""); // Added title state
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [guests, setGuests] = useState("");
  const [location, setLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  // const [dueDate, setDueDate] = useState("");
  // const [taskDescription, setTaskDescription] = useState("");
  // const [list, setList] = useState("My List");

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
        !isOpen && "hidden"
      }`}
    >
      <div className="w-full max-w-md rounded-lg bg-white shadow-lg">
        {/* Header with Tabs */}
        <div className="flex items-center justify-between bg-gray-100 p-4">
          <h2 className="text-lg font-bold">Add {formType}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            ✕
          </Button>
        </div>

        {/* Tab Buttons */}
        <div className="flex space-x-2 p-4">
          <Button
            variant={formType === "Event" ? "default" : "ghost"}
            onClick={() => setFormType("Event")}
          >
            Event
          </Button>
          {/* <Button
            variant={formType === "Task" ? "default" : "ghost"}
            onClick={() => setFormType("Task")}
          >
            Task
          </Button> */}
        </div>

        {/* Dynamic Form Content */}
        <div className="p-4">
          {formType === "Event" && (
            <EventCreate
              title={title}
              setTitle={setTitle}
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              guests={guests}
              setGuests={setGuests}
              location={location}
              setLocation={setLocation}
              description={eventDescription}
              setDescription={setEventDescription}
            />
          )}

          {/* {formType === "Task" && (
            <TaskCreate
              title={title}
              setTitle={setTitle}
              dueDate={dueDate}
              setDueDate={setDueDate}
              list={list}
              setList={setList}
              description={taskDescription}
              setDescription={setTaskDescription}
            />
          )} */}
        </div>

        {/* Footer with Save Button */}
        <div className="flex justify-end p-4">
          <Button
            onClick={() => {
              if (formType === "Event") {
                // Save Event
                console.log({
                  title,
                  startDate,
                  endDate,
                  guests,
                  location,
                  description: eventDescription,
                });
              } else {
                // // Save Task
                // console.log({
                //   title,
                //   dueDate,
                //   list,
                //   description: taskDescription,
                // });
              }
              onClose();
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
