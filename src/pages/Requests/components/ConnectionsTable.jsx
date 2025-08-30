// ConnectionTable.jsx
import ButtonWithIcon from "@/components/ButtonWithIcon";
import { connections as initialConnections } from "@/dummyData/ConnectionsData";
import { Avatar, Table, message } from "antd";
import { ReceiptText, ShieldCheck, ShieldX } from "lucide-react";
import { useState } from "react";
import ConnectionModal from "./Modals/ConnectionModal";

export default function ConnectionsTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();

  // ✅ Keep connections in state so we can modify
  const [data, setData] = useState(initialConnections);

  // ✅ Track selected row keys for bulk actions
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const handleOpenModal = (record) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRecord(null);
  };

  const showMessage = (status) => {
    messageApi.open({
      type: status === "Accept" ? "success" : "error",
      content:
        status === "Accept"
          ? "Connection request accepted successfully"
          : "Connection request rejected successfully",
      className: "font-inter",
    });
  };

  // ✅ Works for single row OR modal
  const handleConfirm = (status, record) => {
    const target = record || selectedRecord;

    if (!target) return;

    setData((prev) => prev.filter((item) => item.key !== target.key));
    showMessage(status);
    handleCloseModal();
  };

  // ✅ Works for bulk selected rows
  const handleBulkConfirm = (status) => {
    if (selectedRowKeys.length === 0) {
      messageApi.warning("Please select at least one row.");
      return;
    }

    setData((prev) =>
      prev.filter((item) => !selectedRowKeys.includes(item.key))
    );

    setSelectedRowKeys([]); // clear selection
    showMessage(status);
  };

  const columns = [
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
      title: "Device",
      dataIndex: "device",
      key: "device",
      render: (text) => <span className="font-medium">{text}</span>,
      width: 180,
    },
    {
      title: "Agent Version",
      dataIndex: "agentVersion",
      key: "agentVersion",
      render: (text) => <span className="text-TextGray">{text}</span>,
      width: 150,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <ButtonWithIcon
            icon={ShieldCheck}
            text="Accept"
            className="bg-blue-600 text-white"
            onClick={() => handleConfirm("Accept", record)}
          />
          <ButtonWithIcon
            icon={ShieldX}
            text="Reject"
            className="bg-white text-red-600"
            onClick={() => handleConfirm("Reject", record)}
          />
        </div>
      ),
      width: 250,
    },
    {
      title: "",
      key: "Details",
      render: (_, record) => (
        <ReceiptText
          size={18}
          className="text-TextGray cursor-pointer hover:text-blue-700"
          onClick={() => handleOpenModal(record)}
        />
      ),
      width: 80,
    },
  ];

  return (
    <>
      {contextHolder}

      <div className="flex items-center justify-between p-5 border-2 border-BorderGray rounded-t-md">
        <h1 className="font-semibold tracking-tighter text-2xl">Connections</h1>
        <div className="flex justify-end gap-2 w-1/2">
          <input
            type="text"
            placeholder="Search"
            className="w-64 px-3 py-1.5 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <ButtonWithIcon
            icon={ShieldCheck}
            text="Accept"
            className="bg-blue-600 text-white"
            onClick={() => handleBulkConfirm("Accept")}
          />
          <ButtonWithIcon
            icon={ShieldX}
            text="Reject"
            className="bg-white text-red-600"
            onClick={() => handleBulkConfirm("Reject")}
          />
        </div>
      </div>

      <Table
        className="custom-table"
        columns={columns}
        dataSource={data}
        rowKey="key"
        rowSelection={{
          selectedRowKeys,
          onChange: (keys) => setSelectedRowKeys(keys),
          columnWidth: 60,
        }}
        pagination={{
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20"],
        }}
      />

      {/* Modal */}
      <ConnectionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        record={selectedRecord}
      />
    </>
  );
}
