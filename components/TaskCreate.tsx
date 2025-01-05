import React from "react";
import { Input } from "./ui/input";

interface TaskCreateProps {
  dueDate: string;
  setDueDate: (date: string) => void;
  list: string;
  setList: (list: string) => void;
  description: string;
  setDescription: (description: string) => void;
  title: string;
  setTitle: (location: string) => void;
}

export const TaskCreate: React.FC<TaskCreateProps> = ({
  dueDate,
  setDueDate,
  list,
  setList,
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
      {/* Due Date Field */}
      <div className="flex items-center">
      <span className="">Due Date</span>
        <Input
          type="datetime-local"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      {/* Task Description Field */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add description"
        className="w-full rounded-md border p-2 text-sm"
      />

      {/* Task List Field */}
      <div>
        <select
          title="list"
          value={list}
          onChange={(e) => setList(e.target.value)}
          className="w-full rounded-md border p-2"
        >
          <option value="My List">My List</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </div>
    </div>
  );
};
