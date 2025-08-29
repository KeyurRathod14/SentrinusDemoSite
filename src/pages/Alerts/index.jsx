import { Tabs } from "antd";
import { useState } from "react";
import AlertsTable from "./components/AlertsTable";
import { alerts as initialAlerts } from "@/dummyData/AlertsData";

export default function Index() {
  const [alertList, setAlertList] = useState(initialAlerts);

  // 🔹 function to update alert status
  const handleUpdateAlertStatus = (key, newStatus) => {
    setAlertList((prev) =>
      prev.map((alert) =>
        alert.key === key ? { ...alert, status: newStatus } : alert
      )
    );
  };

  const items = [
    {
      key: "1",
      label: "All",
      children: (
        <AlertsTable
          status={null}
          alertList={alertList}
          onUpdate={handleUpdateAlertStatus}
        />
      ),
    },
    {
      key: "2",
      label: "Resolved",
      children: (
        <AlertsTable
          status="Resolved"
          alertList={alertList}
          onUpdate={handleUpdateAlertStatus}
        />
      ),
    },
    {
      key: "3",
      label: "Unresolved",
      children: (
        <AlertsTable
          status="Unresolved"
          alertList={alertList}
          onUpdate={handleUpdateAlertStatus}
        />
      ),
    },
  ];

  return (
    <div className="px-4">
      <Tabs defaultActiveKey="1" items={items} className="!font-inter" />
    </div>
  );
}
