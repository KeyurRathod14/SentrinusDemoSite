import { Tabs } from "antd";
import DevicesTable from "./components/DevicesTable";
import Groups from "./components/Groups";

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
      children: <Groups />,
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
