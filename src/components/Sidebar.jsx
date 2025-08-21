import SentrinusWhite from "@/assets/SentrinusWhite.png";
import SentrinusWhite2 from "@/assets/SentrinusWhite2.png";
import { Tooltip } from "antd"; // ✅ Ant Design Tooltip
import {
  ChevronDown,
  ChevronFirst,
  ChevronLast,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { createContext, useContext, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const SidebarContext = createContext();

export default function SidebarLayout({ children }) {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();

  // Generate a page title from the current route
  const path =
    location.pathname === "/"
      ? "Overview"
      : location.pathname.slice(1).charAt(0).toUpperCase() +
        location.pathname.slice(2);

  return (
    <div className="flex h-screen">
      <aside
        className={`relative h-screen ${
          expanded ? "w-64" : "w-20"
        } transition-all duration-300`}
      >
        <nav className="h-full flex flex-col bg-SidebarBlue border-r shadow-sm">
          {/* Logo (fixed at top) */}
          <div className="p-4 pb-2">
            <img
              src={expanded ? SentrinusWhite2 : SentrinusWhite}
              className={`${expanded ? "w-28" : "w-12"}`}
              alt="Sentrinus"
            />
          </div>

          {/* Scrollable middle menu */}
          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-2 overflow-y-auto scrollbar-hide">
              {children}
            </ul>
          </SidebarContext.Provider>

          {/* Account (fixed at bottom) */}
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
              <LogOut size={16} className="text-white cursor-pointer" />
            </div>
          </div>
        </nav>

        {/* Toggle Button */}
        <button
          onClick={() => setExpanded((curr) => !curr)}
          className="absolute -right-3 top-14 w-8 h-8 flex items-center justify-center cursor-pointer
                 rounded-md bg-SidebarBlue border border-Gray text-white shadow-md"
        >
          {expanded ? <ChevronFirst size={18} /> : <ChevronLast size={18} />}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        <div className="flex items-center justify-between gap-3 p-4 bg-gray-50">
          <h1 className="font-medium tracking-tighter text-4xl">{path}</h1>
        </div>
        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

/* Base Sidebar Item */
export function SidebarItem({ icon, text, isOrganization, to }) {
  const { expanded } = useContext(SidebarContext);
  const location = useLocation();

  const isActive = to && location.pathname === to;

  const itemContent = (
    <li
      className={`relative flex items-center font-medium rounded-md cursor-pointer my-1 transition-colors group
        ${
          isOrganization
            ? "bg-Gray text-white"
            : isActive
            ? "bg-Gray text-blue-400"
            : "hover:bg-Gray/50 hover:text-white text-TextGray"
        }
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
    </li>
  );

  const wrappedContent = !expanded ? (
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

  const parentItem = (
    <li
      onClick={() => setOpen(!open)}
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

  const wrappedParent = !expanded ? (
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
      {parentItem}
    </Tooltip>
  ) : (
    parentItem
  );

  return (
    <>
      {wrappedParent}
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
