import React from "react";
// Ensure you have an icon at this path or remove the import if not needed yet
import YoutuveIcon from "../assets/YoutuveIcon.svg"; 
import { 
  menuItems, 
  subscriptions, 
  youItems, 
  exploreItems, 
  moreInfoItems 
} from "../Pages/SidebarData";
import { Link } from "react-router-dom";

const SidebarReuse = ({ title, items, itemHight = "h-11", isOpen }) => {
  return (
    <div className="border-b border-gray-200 pb-2">
      {isOpen && title && (
        <p className="font-bold text-sm px-2 pt-2 pb-1 text-gray-800">
          {title}
        </p>
      )}
      {items.map((elem, index) => (
        <Link
          to={elem.path}
          key={index}
          className={`flex gap-4 ${itemHight} ${
            isOpen ? "w-full px-3" : "w-full justify-center px-0"
          } items-center rounded-xl hover:bg-gray-100 transition-colors my-0.5`}
        >
          <div className="shrink-0 text-gray-800">
            <elem.icon size={22} />
          </div>
          {isOpen && (
            <span className="font-medium text-sm text-gray-800 truncate">
              {elem.text}
            </span>
          )}
        </Link>
      ))}
    </div>
  );
};

const Sidebar = ({ isOpen, setIsOpen, setIsopen, isVideoPage = false }) => {
  const handleClose = setIsOpen || setIsopen;

  // On video play page, sidebar behaves as an overlay drawer
  if (isVideoPage) {
    if (!isOpen) return null;

    return (
      <>
        <div className="fixed top-14 left-0 bg-white z-50 w-[240px] max-w-[80vw] h-[calc(100vh-3.5rem)] shadow-2xl flex flex-col justify-between px-2 sm:px-3 gap-2 overflow-y-auto">
          <SidebarReuse items={menuItems} isOpen={true} />
          <SidebarReuse
            title="Subscriptions"
            items={subscriptions}
            itemHight="h-10"
            isOpen={true}
          />
          <SidebarReuse title="You" items={youItems} isOpen={true} />
          <SidebarReuse title="Explore" items={exploreItems} isOpen={true} />
          <SidebarReuse items={moreInfoItems} isOpen={true} />
        </div>

        {/* Backdrop for video page overlay */}
        <div
          onClick={() => {
            if (handleClose) handleClose(false);
          }}
          className="fixed top-14 left-0 w-full h-[calc(100vh-3.5rem)] bg-black/50 z-40"
        ></div>
      </>
    );
  }

  // On home / other pages
  return (
    <>
      <div
        className={`min-[768px]:flex min-[768px]:static flex-col justify-between px-2 gap-2 shrink-0 ${
          isOpen
            ? "fixed top-14 left-0 bg-white z-50 w-[240px] shadow-xl"
            : "hidden"
        } ${
          isOpen
            ? "min-[768px]:w-[240px]"
            : "min-[768px]:w-[72px] whitespace-nowrap"
        } h-[calc(100vh-3.5rem)] overflow-y-auto`}
      >
        <SidebarReuse items={menuItems} isOpen={isOpen} />
        <SidebarReuse
          title="Subscriptions"
          items={subscriptions}
          itemHight="h-10"
          isOpen={isOpen}
        />
        <SidebarReuse title="You" items={youItems} isOpen={isOpen} />
        <SidebarReuse title="Explore" items={exploreItems} isOpen={isOpen} />
        <SidebarReuse items={moreInfoItems} isOpen={isOpen} />
      </div>

      {isOpen && (
        <div
          onClick={() => {
            if (handleClose) handleClose(false);
          }}
          className="fixed top-14 left-0 w-full h-[calc(100vh-3.5rem)] bg-black/50 z-40 min-[768px]:hidden"
        ></div>
      )}
    </>
  );
};

export default Sidebar;