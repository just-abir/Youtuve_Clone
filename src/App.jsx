import React, { useState, useEffect } from "react";
import Body from "./Components/Body";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import { useLocation } from "react-router-dom";

const App = () => {
  const [SidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const isVideoPage = location.pathname === "/videoplaypage";

  // On video play page, default sidebar to closed so video has full width
  useEffect(() => {
    if (isVideoPage) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isVideoPage]);

  const toogleMenu = () => {
    setSidebarOpen((p) => !p);
  };

  return (
    <>
      <Header onMenuClick={toogleMenu} SidebarValueShow={SidebarOpen} />
      <div className="flex pt-14 relative">
        <Sidebar
          isOpen={SidebarOpen}
          setIsOpen={setSidebarOpen}
          isVideoPage={isVideoPage}
        />
        <Body isOpen={SidebarOpen} />
      </div>
    </>
  );
};
export default App;
