import ButtonWithIcon from "@/components/ButtonWithIcon";
import { devices } from "@/dummyData/DevicesData";
import { Avatar, Checkbox, Table, Tag } from "antd";
import { GlobeLock, Trash } from "lucide-react";

export default function DevicesTable() {
  // Table Columns
  const columns = [
    {
      title: <Checkbox />, // header checkbox
      dataIndex: "checkbox",
      key: "checkbox",
      render: () => <Checkbox />,
      width: 50,
    },
    {
      title: "EMP ID",
      dataIndex: "empId",
      key: "empId",
      render: (text) => <span className="text-TextGray">{text}</span>,
      width: 110,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center gap-2">
          <div className="relative">
            {record.avatar ? (
              <Avatar src={record.avatar} size={34} />
            ) : (
              <Avatar style={{ backgroundColor: "#87d068" }}>
                {record.initials}
              </Avatar>
            )}

            {/* Status Dot */}
            {record.status && (
              <span
                className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${
                  record.status === "active" ? "bg-green-500" : "bg-red-500"
                }`}
              />
            )}
          </div>

          <div className="flex flex-col leading-tight">
            <span className="font-medium">{text}</span>
            <span className="text-xs text-TextGray">{record.email}</span>
          </div>
        </div>
      ),
    },

    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color =
              tag === "Administrator"
                ? "red"
                : tag === "Developer"
                ? "blue"
                : tag === "CEO"
                ? "gold"
                : tag === "Assistant"
                ? "cyan"
                : "green";
            return (
              <Tag bordered={false} color={color} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </>
      ),
      width: 220,
    },
    {
      title: "Operating System",
      dataIndex: "opeatingSytem",
      key: "opeatingSytem",
      render: (text) => <span className="text-TextGray">{text}</span>,
      width: 200,
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
      {/* Header Section */}
      <div className="flex items-center justify-between p-5 border-2 border-BorderGray rounded-t-md">
        <h1 className="font-semibold tracking-tighter text-2xl">All</h1>
        <div className="flex justify-end gap-2 w-1/2">
          {/* Search */}
          <input
            type="text"
            placeholder="Search"
            className="w-64 px-3 py-1.5 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <ButtonWithIcon
            icon={GlobeLock}
            text="Policies"
            className="bg-blue-600 text-white"
          />
          <ButtonWithIcon
            icon={Trash}
            text="Remove User"
            className="bg-white text-red-600"
          />
        </div>
      </div>

      {/* Ant Design Table */}
      <Table
        className="custom-table"
        columns={columns}
        dataSource={devices}
        rowKey="key"
        pagination={{
          pageSize: 5, // 👈 rows per page
          showSizeChanger: true, // dropdown for rows per page
          pageSizeOptions: ["5", "10", "20"],
        }}
      />
    </>
  );
}
