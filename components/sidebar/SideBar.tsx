import Create from "./Create";
import { cn } from "@/lib/utils";

import { useToggleSideBarStore } from "@/lib/store";
import SideBarCalendar from "./side-bar-calendar";
// import SearchUsers from "./search-users";
// import MyCalendars from "./my-calendars";

export default function SideBar() {
  const { isSideBarOpen } = useToggleSideBarStore();
  return (
    <aside
      className={cn(
        "w-92 border-t px-2 py-3 transition-all duration-300 ease-in-out",
        !isSideBarOpen && "hidden",
      )}
    >
      <Create />
      <SideBarCalendar />
      {/* <SearchUsers />
      <MyCalendars /> */}
    </aside>
  );
}
