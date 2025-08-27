import { Tabs } from "antd";
import DevicesTable from "./components/DevicesTable";
import GroupsTable from "./components/GroupsTable";

export default function index() {
  const items = [
    {
      key: "1",
      label: "Devices",
      children: <DevicesTable />,
    },
    {
      key: "2",
      label: "Groups",
      children: <GroupsTable />,
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
