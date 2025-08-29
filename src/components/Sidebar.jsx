import SentrinusWhite from "@/assets/SentrinusWhite.png";
import SentrinusWhite2 from "@/assets/SentrinusWhite2.png";
import { Popover, Tooltip } from "antd"; // ✅ Ant Design Tooltip
import {
  ChevronDown,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  CreditCard,
  EllipsisVertical,
  LogOut,
  User,
} from "lucide-react";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const SidebarContext = createContext();

export default function SidebarLayout({ children }) {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // ✅ close Popover whenever route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const formattedDate = dateTime.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedTime = dateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  // Inside SidebarLayout.jsx, before return
  const routeToParent = {
    "/connections": "Settings",
    "/integrations": "Settings",
    "/notifications": "Settings",
    "/access": "Settings",
    "/manage": "Settings",
    "/update-agent": "Agents",
    "/download-agent": "Agents",
  };

  // derive title
  let path;
  if (location.pathname === "/") {
    path = "Overview";
  } else if (routeToParent[location.pathname]) {
    path = routeToParent[location.pathname];
  } else {
    path =
      location.pathname.slice(1).charAt(0).toUpperCase() +
      location.pathname.slice(2);
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar (fixed height, no scroll with page) */}
      <aside
        className={`relative h-screen flex-shrink-0 ${
          expanded ? "w-64" : "w-20"
        } transition-all duration-300`}
      >
        <nav className="h-full flex flex-col bg-SidebarBlue border-r shadow-sm">
          {/* Logo (fixed at top) */}
          <div
            className={`p-4 pb-2 flex ${
              expanded ? "justify-center" : "justify-start"
            }`}
          >
            <img
              src={expanded ? SentrinusWhite2 : SentrinusWhite}
              className={`${expanded ? "w-40 mt-5" : "w-12"}`}
              alt="Sentrinus"
            />
          </div>

          {/* Scrollable middle menu */}
          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-2 overflow-y-auto scrollbar-hide">
              {children}
            </ul>
          </SidebarContext.Provider>

          {/* Account (fixed bottom) */}
          <div className="flex p-5">
            <div className="w-12 h-10 rounded-full bg-blue-400 flex items-center justify-center cursor-pointer">
              JD
            </div>
            <div
              className={`flex justify-between items-center overflow-hidden cursor-pointer transition-all ${
                expanded ? "w-52 ml-2" : "w-0"
              }`}
            >
              <div className="leading-4 text-TextGray">
                <h4 className="font-semibold">John Doe</h4>
                <span className="text-xs">johndoe@gmail.com</span>
              </div>

              <Popover
                placement="topRight"
                trigger="click"
                open={open}
                onOpenChange={setOpen}
                classNames={{
                  root: "account-popover",
                }}
                arrow={false}
                content={
                  <ul className="w-56 font-inter bg-SidebarBlue border border-Gray rounded-md shadow-lg px-2 py-2">
                    <li
                      className="px-3 py-2 rounded-md cursor-pointer flex items-center gap-2 text-white hover:bg-Gray/50"
                      onClick={() => navigate("account")}
                    >
                      <User size={16} /> My Account
                    </li>
                    <li
                      className="px-3 py-2 rounded-md cursor-pointer flex items-center gap-2 text-white hover:bg-Gray/50"
                      onClick={() => navigate("billing")}
                    >
                      <CreditCard size={16} /> Plan & Billing
                    </li>
                    <li className="px-3 py-2 rounded-md cursor-pointer flex items-center gap-2 text-red-400 hover:bg-Gray/50">
                      <LogOut size={16} /> Logout
                    </li>
                  </ul>
                }
              >
                <EllipsisVertical
                  size={16}
                  className="text-white cursor-pointer"
                />
              </Popover>
            </div>
          </div>
        </nav>

        {/* Toggle Button */}
        <button
          onClick={() => setExpanded((curr) => !curr)}
          className="absolute -right-3 top-14 w-8 h-8 flex items-center justify-center cursor-pointer
                       rounded-md bg-SidebarBlue border border-Gray text-white shadow-md"
        >
          {expanded ? <ChevronsLeft size={18} /> : <ChevronsRight size={18} />}
        </button>
      </aside>

      {/* Main Content (scrollable) */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Sticky Header */}
        <div className="flex items-center justify-between gap-3 px-4 py-3 bg-gray-50">
          <h1 className="font-medium tracking-normal text-3xl">{path}</h1>

          <div className="flex items-center gap-2">
            {/* Search Bar */}
            <div className="w-72">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-3 py-1.5 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            {/* Date & Time */}
            <div className="text-right">
              <p>{formattedDate}</p>
              <p className="text-sm">{formattedTime}</p>
            </div>
          </div>
        </div>

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

/* Base Sidebar Item */
export function SidebarItem({ icon, text, isOrganization, to, forceExpanded }) {
  const { expanded } = useContext(SidebarContext);
  const location = useLocation();

  const isActive = to && location.pathname === to;
  const showExpanded = forceExpanded || expanded; // ✅ override

  const itemContent = (
    <li
      className={`relative flex items-center font-medium rounded-md cursor-pointer my-1 transition-colors group
        ${
          isOrganization
            ? "bg-Gray text-white"
            : isActive
            ? "bg-blue-600 text-white"
            : "hover:bg-Gray/50 hover:text-white text-TextGray"
        }
        ${showExpanded ? "px-4 py-2" : "justify-center py-2"}
      `}
    >
      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
        {icon}
      </div>
      <span
        className={`text-sm overflow-hidden transition-all duration-300 ${
          showExpanded ? "ml-3 w-40 opacity-100" : "w-0 opacity-0"
        }`}
      >
        {text}
      </span>
    </li>
  );

  // ✅ Tooltip only when sidebar collapsed & not forceExpanded
  const wrappedContent =
    !expanded && !forceExpanded ? (
      <Tooltip
        placement="right"
        title={text}
        arrow={false}
        styles={{
          body: {
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            color: "#f8f9fa",
            marginLeft: "8px",
          },
        }}
      >
        {itemContent}
      </Tooltip>
    ) : (
      itemContent
    );

  return to ? <Link to={to}>{wrappedContent}</Link> : wrappedContent;
}

export function SidebarDropdown({ icon, text, children }) {
  const { expanded } = useContext(SidebarContext);
  const [open, setOpen] = useState(false);
  const location = useLocation(); // ✅ track route changes

  // ✅ close Popover whenever route changes
  useEffect(() => {
    // Close only when the sidebar is collapsed (Popover mode)
    if (!expanded) setOpen(false);
  }, [location.pathname, expanded]);

  const parentItem = (
    <li
      onClick={() => expanded && setOpen(!open)} // only toggle if expanded
      className={`relative flex items-center font-medium rounded-md cursor-pointer transition-colors group
            hover:bg-Gray/50 hover:text-white text-TextGray
            ${expanded ? "px-4 py-2" : "justify-center py-2"}
          `}
    >
      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
        {icon}
      </div>
      <span
        className={`text-sm overflow-hidden transition-all duration-300 ${
          expanded ? "ml-3 w-40 opacity-100" : "w-0 opacity-0"
        }`}
      >
        {text}
      </span>
      {expanded && (
        <span className="ml-auto">
          {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </span>
      )}
    </li>
  );

  if (!expanded) {
    // 🔹 collapsed: controlled Popover
    return (
      <Popover
        placement="right"
        trigger="click"
        open={open}
        onOpenChange={setOpen}
        classNames={{
          root: "sidebar-popover",
        }}
        content={
          <ul className="w-56 font-inter bg-SidebarBlue border border-Gray rounded-md shadow-lg px-2 py-1">
            {React.Children.map(children, (child) =>
              React.cloneElement(child, {
                forceExpanded: true,
                onClick: () => setOpen(false), // ✅ close on click
              })
            )}
          </ul>
        }
      >
        {parentItem}
      </Popover>
    );
  }

  // 🔹 expanded: normal dropdown
  return (
    <>
      {parentItem}
      <ul
        className={`ml-8 overflow-hidden transition-all duration-300 ease-in-out ${
          open && expanded ? "max-h-56 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </ul>
    </>
  );
}
