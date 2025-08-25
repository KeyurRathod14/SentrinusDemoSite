// src/layouts/DashboardLayout.jsx
import SidebarLayout, {
  SidebarDropdown,
  SidebarItem,
} from "@/components/Sidebar.jsx";

import {
  AlertTriangle,
  Antenna,
  ArrowDownToLine,
  BellRing,
  Blocks,
  Building,
  Building2,
  Headset,
  Home,
  Mail,
  Monitor,
  PersonStanding,
  RotateCw,
  Settings,
} from "lucide-react";
import { BsIncognito } from "react-icons/bs";

export default function DashboardLayout() {
  return (
    <SidebarLayout>
      <div className="mt-6"></div>
      <SidebarItem
        icon={<Building size={20} />}
        text="SecureU"
        isOrganization
      />

      <div className="mt-10"></div>
      <SidebarItem icon={<Home size={20} />} text="Overview" to="/" />
      <SidebarItem icon={<Monitor size={20} />} text="Devices" to="/devices" />
      <SidebarItem
        icon={<AlertTriangle size={20} />}
        text="Alerts"
        to="/alerts"
      />
      <SidebarItem icon={<Mail size={20} />} text="Requests" to="/requests" />

      <SidebarDropdown icon={<BsIncognito size={20} />} text="Agents">
        <SidebarItem
          icon={<RotateCw size={20} />}
          text="Update Agent"
          to="/update-agent"
        />
        <SidebarItem
          icon={<ArrowDownToLine size={20} />}
          text="Download Agent"
          to="/download-agent"
        />
      </SidebarDropdown>

      <hr className="my-3 border-1.5 border-gray-800" />

      <SidebarDropdown icon={<Settings size={20} />} text="Settings">
        <SidebarItem
          icon={<Antenna size={20} />}
          text="Connections"
          to="/connections"
        />
        <SidebarItem
          icon={<Blocks size={20} />}
          text="Integrations"
          to="/integrations"
        />
        <SidebarItem
          icon={<BellRing size={20} />}
          text="Notifications"
          to="/notifications"
        />
        <SidebarItem
          icon={<PersonStanding size={20} />}
          text="Access"
          to="/access"
        />
        <SidebarItem
          icon={<Building2 size={20} />}
          text="Manage"
          to="/manage"
        />
      </SidebarDropdown>

      <SidebarItem icon={<Headset size={20} />} text="Support" to="/support" />
    </SidebarLayout>
  );
}
