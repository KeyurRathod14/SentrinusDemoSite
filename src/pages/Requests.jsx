import AccessTable from "@/components/Tables/AccessTable";
import ConnectionsTable from "@/components/Tables/ConnectionsTable";
import { Tabs } from "antd";

export default function Requests() {
  const items = [
    {
      key: "1",
      label: "Connections",
      children: <ConnectionsTable />,
    },
    {
      key: "2",
      label: "Access",
      children: <AccessTable />,
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
