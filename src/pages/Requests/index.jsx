import { Tabs } from "antd";
import AccessTable from "./components/AccessTable";
import ConnectionsTable from "./components/ConnectionsTable";

export default function index() {
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
