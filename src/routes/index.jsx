import DashboardLayout from "@/layouts/DashboardLayout.jsx";
import { createBrowserRouter } from "react-router-dom";

import DownloadAgent from "@/pages/Agents/DownloadAgent.jsx";
import UpdateAgent from "@/pages/Agents/UpdateAgent.jsx";
import Alerts from "@/pages/Alerts/index.jsx";
import Devices from "@/pages/Devices/index.jsx";
import Overview from "@/pages/Overview/index.jsx";
import Requests from "@/pages/Requests/index.jsx";
import Access from "@/pages/Settings/Access.jsx";
import Connections from "@/pages/Settings/Connections.jsx";
import Integrations from "@/pages/Settings/Integrations/index.jsx";
import Manage from "@/pages/Settings/Manage.jsx";
import Notifications from "@/pages/Settings/Notifications/Notifications.jsx";
import Support from "@/pages/Support/Support.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Overview /> },
      { path: "devices", element: <Devices /> },
      { path: "alerts", element: <Alerts /> },
      { path: "requests", element: <Requests /> },

      { path: "update-agent", element: <UpdateAgent /> },
      { path: "download-agent", element: <DownloadAgent /> },

      { path: "connections", element: <Connections /> },
      { path: "integrations", element: <Integrations /> },
      { path: "notifications", element: <Notifications /> },
      { path: "access", element: <Access /> },
      { path: "manage", element: <Manage /> },

      { path: "support", element: <Support /> },
    ],
  },
]);

export default router;
