import ButtonWithIcon from "@/components/ButtonWithIcon";
import { updateAgents } from "@/dummyData/UpdateAgent";
import { Avatar, Checkbox, Table } from "antd";
import { Upload } from "lucide-react";

export default function UpdateAgent() {
  const columns = [
    {
      title: <Checkbox />,
      dataIndex: "checkbox",
      key: "checkbox",
      render: () => <Checkbox />,
      width: 50,
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
      title: "Device",
      dataIndex: "device",
      key: "device",
      render: (text) => <span className="font-medium">{text}</span>,
      width: 200,
    },
    {
      title: "Agent Version",
      dataIndex: "agentVersion",
      key: "agentVersion",
      render: (text) => <span className="text-TextGray">{text}</span>,
      width: 180,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) =>
        record.hasUpdate ? (
          <div className="flex items-center gap-3">
            <ButtonWithIcon
              icon={Upload}
              text="Update"
              className="bg-blue-600 text-white"
            />
          </div>
        ) : (
          <span className="text-TextGray text-sm">
            No New Update
          </span>
        ),
      width: 200,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between p-5 border-2 border-BorderGray rounded-t-md">
        <h1 className="font-semibold tracking-tighter text-2xl">
          Update Agent
        </h1>
        <div className="flex justify-end gap-2 w-1/2">
          <input
            type="text"
            placeholder="Search"
            className="w-64 px-3 py-1.5 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <ButtonWithIcon
            icon={Upload}
            text="Update Agents"
            className="bg-blue-600 text-white"
          />
        </div>
      </div>

      <Table
        className="custom-table"
        columns={columns}
        dataSource={updateAgents}
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
