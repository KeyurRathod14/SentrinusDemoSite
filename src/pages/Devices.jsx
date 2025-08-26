import DevicesTable from "@/components/Tables/DevicesTable";
import GroupsTable from "@/components/Tables/GroupsTable";
import { Tabs } from "antd";

export default function Devices() {
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
