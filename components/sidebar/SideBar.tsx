import CalendarSideBar from "./CalendarSideBar";
import Create from "./Create";
import UserSearch from "./UserSearch";
import { cn } from "@/lib/utils";
import MyCalendars from "./MyCalendars";
import { useToggleSideBarStore } from "@/lib/store";

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
      <CalendarSideBar />
      <UserSearch />
      <MyCalendars />
    </aside>
  );
}
