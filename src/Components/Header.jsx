import React from "react";
import YoutuveIcon from "../assets/YoutuveIcon.svg";
import {
  Bell,
  MenuIcon,
  Mic,
  Plus,
  Search,
} from "lucide-react";

const Header = ({ onMenuClick, SidebarValueShow }) => {
  const onMenuHeaderClick = () => {
    if (onMenuClick) {
      onMenuClick();
    }
  };

  return (
    <>
      <div className="top-0 fixed z-50 bg-gray-50 h-14 w-full flex justify-between items-center px-2 sm:px-3 md:px-4 lg:px-4">
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-5">
          <MenuIcon
            onClick={onMenuHeaderClick}
            className="cursor-pointer size-6 md:size-7 lg:size-8 shrink-0"
          />
          <img src={YoutuveIcon} className="h-5 sm:h-6 shrink-0" alt="Logo" />
        </div>

        <div className="flex items-center pl-2 gap-2 sm:gap-3 md:gap-4 lg:gap-7">
          <div className="flex items-center relative">
            <input
              className="h-10 rounded-2xl px-3 outline-none border border-gray-300 hidden min-[500px]:block min-[500px]:w-[220px] sm:w-[280px] md:w-[330px] lg:w-[500px] pr-9"
              type="text"
              placeholder="Search"
            />
            <Search className="cursor-pointer min-[500px]:absolute min-[500px]:top-1/2 min-[500px]:right-3 min-[500px]:-translate-y-1/2 shrink-0" />
          </div>

          <div className="p-2 rounded-full sm:bg-gray-100 hidden sm:block">
            <Mic className="hidden sm:block md:block md:w-6 md:h-6 lg:w-7 lg:h-7 shrink-0" />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-5">
          <p className="flex justify-center items-center w-9 h-9 sm:w-10 sm:h-10 rounded-full lg:w-24 lg:h-10 md:rounded-2xl md:w-20 lg:rounded-2xl gap-2 cursor-pointer">
            <Plus className="shrink-0" />
            <span className="hidden md:inline lg:inline">Create</span>
          </p>

          <Bell className="cursor-pointer shrink-0" />
          <img
            className="rounded-full size-8 sm:size-9 md:size-10 shrink-0"
            src="https://codeforces.com/userpic.codeforces.org/3603778/title/addda1701511084f.jpg"
            alt="User"
          />
        </div>
      </div>
    </>
  );
};
export default Header;