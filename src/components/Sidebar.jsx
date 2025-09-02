import Link from "next/link";
import React from "react";

const Sidebar = ({ isVisible, setIsVisible, isSidebarHideOnMobile }) => {

    return (
        <div
            className={`md:flex ${
                isSidebarHideOnMobile ? "hidden" : "flex"
            } border text-xl rounded w-[80%] md:w-[20%] bg-base-100 z-50 fixed h-[calc(100vh-16px)] md:static flex-col justify-between p-2`}
        >
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <span>LetLang</span>

                    <button className="flex items-start cursor-pointer">
                        <span
                            onClick={() => {
                                setIsVisible(false);
                                localStorage.setItem("sidebarVisible", "false");
                            }}
                            className="material-symbols-outlined"
                        >
                            dock_to_right
                        </span>
                    </button>
                </div>
                <div className="">
                    <ul className="flex flex-col gap-1">
                        <li>
                            <Link href="/app" className="sidebar-link">
                                <span className="material-symbols-outlined">
                                    edit_square
                                </span>
                                New Chat
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <h3 className="text-sm font-semibold">Chats</h3>
                    <ul className="flex flex-col gap-1">
                        <li>
                            <Link href="/app" className="sidebar-link">
                                My Chat One
                            </Link>
                        </li>
                        <li>
                            <Link href="/app" className="sidebar-link">
                                My Chat Two
                            </Link>
                        </li>
                        <li>
                            <Link href="/app" className="sidebar-link">
                                My Chat Three
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="">
                <ul className="flex flex-col gap-1">
                    <li className="p-1">
                        <input
                            type="checkbox"
                            value="dark"
                            className="toggle theme-controller"
                        />
                    </li>
                    <li>
                        <Link href="/login" className="sidebar-link">
                                <span className="material-symbols-outlined">
                                    settings
                                </span>
                                Configure
                            </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;