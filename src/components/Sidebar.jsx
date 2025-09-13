import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = ({ isVisible, setIsVisible, isSidebarHideOnMobile }) => {
    const pathName = usePathname();

    return (
        <div
            className={`md:flex ${
                isSidebarHideOnMobile ? "hidden" : "flex"
            } border-2 border-primary text-xl rounded w-[80%] md:w-[20%] bg-base-100 z-50 fixed h-[calc(100dvh-16px)] md:static flex-col justify-between p-2`}
        >
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h2 className="font-medium">Sidewise AI</h2>

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
                            <Link href="/" className={`sidebar-link ${pathName == "/" ? "bg-primary text-primary-content" : ""}`}>
                                <span className="material-symbols-outlined">
                                    home
                                </span>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/new" className={`sidebar-link ${pathName == "/new" ? "bg-primary text-primary-content" : ""}`}>
                                <span className="material-symbols-outlined">
                                    edit_square
                                </span>
                                New Chat
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold">Chats</h3>
                    <ul className="flex flex-col gap-1">
                        <li>
                            <Link href="/chat/1" className={`sidebar-link ${pathName == "/chat/1" ? "bg-primary text-primary-content" : ""}`}>
                                My Chat One
                            </Link>
                        </li>
                        <li>
                            <Link href="/chat/2" className={`sidebar-link ${pathName == "/chat/2" ? "bg-primary text-primary-content" : ""}`}>
                                My Chat Two
                            </Link>
                        </li>
                        <li>
                            <Link href="/chat/3" className={`sidebar-link ${pathName == "/chat/3" ? "bg-primary text-primary-content" : ""}`}>
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
                        <Link href="/configure" className={`sidebar-link ${pathName == "/configure" ? "bg-primary text-primary-content" : ""}`}>
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
