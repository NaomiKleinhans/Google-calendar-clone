import React from "react";
import { Input } from "./ui/input";
import { FiClock } from "react-icons/fi";
import { HiOutlineUsers, HiOutlineMenuAlt2 } from "react-icons/hi";

interface EventCreateProps {
  startDate: string;
  setStartDate: (date: string) => void;
  endDate: string;
  setEndDate: (date: string) => void;
  guests: string;
  setGuests: (guests: string) => void;
  location: string;
  setLocation: (location: string) => void;
  description: string;
  setDescription: (description: string) => void;
  title: string;
  setTitle: (location: string) => void;
}

export const EventCreate: React.FC<EventCreateProps> = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  guests,
  setGuests,
  location,
  setLocation,
  description,
  setDescription,
  title,
  setTitle,
}) => {
  return (
    <div className="space-y-3">
      {/* Title Field */}
      <div className="w-full border-0 border-b-2 border-gray-300 bg-transparent font-bold placeholder-gray-400 focus:border-blue-500 focus:outline-none">
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add Title"
        />
      </div>
      {/* Date and Time Fields */}
      <div className="flex items-center space-x-3">
        <FiClock />
        <div className="flex items-center space-x-3 text-sm">
          <Input
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <span>to</span>
          <Input
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      {/* Guests Field */}
      <div className="flex items-center space-x-3">
        <HiOutlineUsers />
        <Input
          type="text"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          placeholder="Add guests"
        />
      </div>

      {/* Location Field */}
      <div className="flex items-center space-x-3">
        <HiOutlineMenuAlt2 />
        <Input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Add location"
        />
      </div>

      {/* Description Field */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add description"
        className="w-full rounded-md border p-2 text-sm"
      />
    </div>
  );
};
