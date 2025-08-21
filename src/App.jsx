// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout.jsx";

import Overview from "@/pages/Overview.jsx";
import Devices from "@/pages/Devices.jsx";
import Alerts from "@/pages/Alerts.jsx";
import Requests from "@/pages/Requests.jsx";
import UpdateAgent from "@/pages/UpdateAgent.jsx";
import DownloadAgent from "@/pages/DownloadAgent.jsx";
import Connections from "@/pages/Connections.jsx";
import Integrations from "@/pages/Integrations.jsx";
import Notifications from "@/pages/Notifications.jsx";
import Access from "@/pages/Access.jsx";
import Manage from "@/pages/Manage.jsx";
import Support from "@/pages/Support.jsx";

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
