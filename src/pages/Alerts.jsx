import AlertsTable from "@/components/Tables/AlertsTable";
import { Tabs } from "antd";

export default function Alerts() {
  const items = [
    {
      key: "1",
      label: "All",
      children: <AlertsTable />,
    },
    {
      key: "2",
      label: "Resolved",
      children: <AlertsTable status="Resolved" />,
    },
    {
      key: "3",
      label: "Unresolved",
      children: <AlertsTable status="Unresolved" />,
    },
  ];
  return (
    <>
      <div className="px-4">
        <Tabs defaultActiveKey="1" items={items} className="!font-inter" />
      </div>
    </>
  );
}
