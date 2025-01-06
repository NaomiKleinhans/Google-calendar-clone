"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useViewStore } from "@/lib/store";
import { useUser, SignInButton, SignOutButton, UserProfile } from "@clerk/clerk-react";

export default function HeaderRight() {
  const { setView } = useViewStore();
  const { user, isSignedIn } = useUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return (
    <div className="flex items-center space-x-4">
      {/* Dropdown for selecting view */}
      <Select onValueChange={(v) => setView(v)} defaultValue="month">
        <SelectTrigger className="w-24 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0">
          <SelectValue placeholder="Select View" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="month">Month</SelectItem>
          <SelectItem value="week">Week</SelectItem>
          <SelectItem value="day">Day</SelectItem>
        </SelectContent>
      </Select>

      {/* Log In Button or Avatar */}
      {!isSignedIn ? (
        <SignInButton><button className="px-4 py-2 bg-blue-500 text-white hover:bg-gray-100 hover:text-black">Log In </button></SignInButton>
      ) : (
        <div className="relative">
          <Avatar className="cursor-pointer" onClick={toggleDropdown}>
            {user?.imageUrl ? (
              <AvatarImage src={user.imageUrl} alt="User Avatar" />
            ) : (
              <AvatarFallback>CN</AvatarFallback>
            )}
          </Avatar>

          {dropdownOpen && (
            <div className="absolute right-0 z-10 space-y-1 p-2">
              <UserProfile>
                <button>Profile</button>
              </UserProfile>
              <SignOutButton>
                <button className="flex justify-end px-4 py-2 bg-blue-500 text-white hover:bg-gray-100 hover:text-black">
                  Log Out
                </button>
              </SignOutButton>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
