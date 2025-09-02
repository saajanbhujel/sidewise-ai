"use client"

import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const SidebarWrapper = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isSidebarHideOnMobile, setIsSidebarHideOnMobile] = useState(true);

    useEffect(() => {
    if (window.innerWidth < 768) {
      setIsVisible(false);
      
    } else {
        setIsVisible(true);
        setIsSidebarHideOnMobile(false);
    }
  }, []);
  
    return (
        <>
            {isVisible ? (
                
        <Sidebar isVisible={isVisible} setIsVisible={setIsVisible} isSidebarHideOnMobile={isSidebarHideOnMobile} />
            ) : (
                <>
                    <button className="fixed top-4 left-4 z-99 flex items-center cursor-pointer">
                        <span
                            onClick={() => {setIsVisible(true);setIsSidebarHideOnMobile(false);localStorage.setItem("sidebarVisible", "true");}}
                            className="material-symbols-outlined"
                        >
                            dock_to_right
                        </span>
                    </button>
                </>
            )}
        </>
    );
};

export default SidebarWrapper;