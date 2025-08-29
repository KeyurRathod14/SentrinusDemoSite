import ButtonWithIcon from "@/components/ButtonWithIcon";
import { devices as initialDevices } from "@/dummyData/DevicesData";
import { Avatar, Table, Tag, message } from "antd";
import { GlobeLock, Trash } from "lucide-react";
import { useState } from "react";
import RemoveDevicesModal from "./Modals/RemoveDevicesModal";

export default function DevicesTable() {
  const [devices, setDevices] = useState(initialDevices);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const selectedUsers = devices.filter((d) => selectedRowKeys.includes(d.key));

  const handleRemoveDevicesClick = () => {
    if (!selectedUsers.length) {
      messageApi.open({
        type: "warning",
        content: "Select device to remove",
        className: "font-inter",
      });
      return;
    }
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setDevices((prev) => prev.filter((d) => !selectedRowKeys.includes(d.key)));
    setSelectedRowKeys([]);
    setIsModalOpen(false);
    messageApi.open({
      type: "success",
      content: "Devices removed successfully",
      className: "font-inter",
    });
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
  };

  const columns = [
    {
      title: "EMP ID",
      dataIndex: "empId",
      render: (text) => <span className="text-TextGray">{text}</span>,
      width: 110,
    },
    {
      title: "Name",
      dataIndex: "name",
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
      render: (tags) =>
        tags.map((tag) => {
          const colors = {
            Administrator: "red",
            Developer: "blue",
            CEO: "gold",
            Assistant: "cyan",
          };
          return (
            <Tag bordered={false} color={colors[tag] || "green"} key={tag}>
              {tag}
            </Tag>
          );
        }),
      width: 220,
    },
    {
      title: "Operating System",
      dataIndex: "opeatingSytem",
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
      {contextHolder}

      {/* Header Section */}
      <div className="flex items-center justify-between p-5 border-2 border-BorderGray rounded-t-md">
        <h1 className="font-semibold tracking-tighter text-2xl">All</h1>
        <div className="flex justify-end gap-2 w-1/2">
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
            text="Remove Devices"
            className="bg-white text-red-600"
            onClick={handleRemoveDevicesClick}
          />
        </div>
      </div>

      <Table
        className="custom-table"
        rowSelection={{
          ...rowSelection,
          columnWidth: 60,
        }}
        columns={columns}
        dataSource={devices}
        rowKey="key"
        pagination={{
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20"],
        }}
      />

      <RemoveDevicesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        selectedUsers={selectedUsers}
      />
    </>
  );
}
