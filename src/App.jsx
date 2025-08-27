// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout.jsx";

import Overview from "@/pages/Overview/index.jsx";
import Devices from "@/pages/Devices/index.jsx";
import Alerts from "@/pages/Alerts/index.jsx";
import Requests from "@/pages/Requests/index.jsx";
import UpdateAgent from "@/pages/Agents/UpdateAgent.jsx";
import DownloadAgent from "@/pages/Agents/DownloadAgent.jsx";
import Connections from "@/pages/Settings/Connections.jsx";
import Integrations from "@/pages/Settings/Integrations.jsx";
import Notifications from "@/pages/Settings/Notifications.jsx";
import Access from "@/pages/Settings/Access.jsx";
import Manage from "@/pages/Settings/Manage.jsx";
import Support from "@/pages/Support/Support.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="devices" element={<Devices />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="requests" element={<Requests />} />

          <Route path="update-agent" element={<UpdateAgent />} />
          <Route path="download-agent" element={<DownloadAgent />} />

          <Route path="connections" element={<Connections />} />
          <Route path="integrations" element={<Integrations />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="access" element={<Access />} />
          <Route path="manage" element={<Manage />} />

          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
