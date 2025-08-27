import ButtonWithIcon from "@/components/ButtonWithIcon";
import { alerts } from "@/dummyData/AlertsData";
import { Avatar, Checkbox, Table } from "antd";
import { ShieldCheck, ShieldX, Trash } from "lucide-react";

export default function AlertsTable({ status }) {
  // 🔹 Filter alerts based on status prop
  const filteredAlerts = status
    ? alerts.filter(
        (alert) => alert.status?.toLowerCase() === status.toLowerCase()
      )
    : alerts;

  const columns = [
    {
      title: <Checkbox />,
      dataIndex: "checkbox",
      key: "checkbox",
      render: () => <Checkbox />,
      width: 50,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => <span className="text-TextGray">{text}</span>,
      width: 110,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center gap-2">
          {record.avatar ? (
            <Avatar src={record.avatar} size={34} />
          ) : (
            <Avatar style={{ backgroundColor: "#87d068" }}>
              {record.initials}
            </Avatar>
          )}
          <div className="flex flex-col leading-tight">
            <span className="font-medium">{text}</span>
            <span className="text-xs text-TextGray">{record.email}</span>
          </div>
        </div>
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (text) => <span className="font-medium">{text}</span>,
      width: 160,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => <span className="text-TextGray">{text}</span>,
      width: 270,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <span
          className={`font-medium ${
            text?.toLowerCase() === "resolved"
              ? "text-green-600"
              : text?.toLowerCase() === "unresolved"
              ? "text-red-600"
              : "text-TextGray"
          }`}
        >
          {text}
        </span>
      ),
      width: 150,
    },
    {
      title: "",
      key: "delete",
      render: () => (
        <Trash
          size={18}
          className="text-TextGray cursor-pointer hover:text-red-700"
        />
      ),
      width: 80,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between p-5 border-2 border-BorderGray rounded-t-md">
        <h1 className="font-semibold tracking-tighter text-2xl">
          {status ? status : "All"}
        </h1>
        <div className="flex justify-end gap-2 w-1/2">
          <input
            type="text"
            placeholder="Search"
            className="w-64 px-3 py-1.5 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <ButtonWithIcon
            icon={ShieldCheck}
            text="Move to Resolved"
            className="bg-green-600 text-white"
          />
          <ButtonWithIcon
            icon={ShieldX}
            text="Move to Unresolved"
            className="bg-white text-red-600"
          />
        </div>
      </div>

      <Table
        className="custom-table"
        columns={columns}
        dataSource={filteredAlerts}
        rowKey="key"
        pagination={{
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20"],
        }}
      />
    </>
  );
}
