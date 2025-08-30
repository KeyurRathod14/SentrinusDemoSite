import ButtonWithIcon from "@/components/ButtonWithIcon";
import { access as accessData } from "@/dummyData/AccessData";
import { Avatar, Table, message } from "antd";
import { ReceiptText, ShieldCheck, ShieldX } from "lucide-react";
import { useState } from "react";
import AccessModal from "./Modals/AccessModal";

export default function AccessTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [data, setData] = useState(accessData); // ✅ table rows state
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); // ✅ track selected rows

  const [messageApi, contextHolder] = message.useMessage();

  const handleOpenModal = (record) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRecord(null);
  };

  const showMessage = (status, record) => {
    messageApi.open({
      type: status === "Allowed" ? "success" : "error",
      content:
        status === "Allowed"
          ? `Access allowed for ${record?.name || "selected devices"}`
          : `Access denied for ${record?.name || "selected devices"}`,
      className: "font-inter",
    });
  };

  const removeRow = (recordKey) => {
    setData((prev) => prev.filter((item) => item.key !== recordKey));
  };

  const removeMultipleRows = (keys) => {
    setData((prev) => prev.filter((item) => !keys.includes(item.key)));
    setSelectedRowKeys([]); // clear selection
  };

  const handleConfirm = (status) => {
    if (selectedRecord) {
      showMessage(status, selectedRecord);
      removeRow(selectedRecord.key); // ✅ remove from table
    }
    setIsModalOpen(false);
  };

  const handleActionClick = (status, record) => {
    showMessage(status, record);
    removeRow(record.key); // ✅ remove from table
  };

  const handleBulkAction = (status) => {
    if (selectedRowKeys.length === 0) {
      messageApi.warning("Please select at least one row");
      return;
    }
    showMessage(status, { name: "selected devices" });
    removeMultipleRows(selectedRowKeys); // ✅ remove selected rows
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
      render: (text) => <span className="text-TextGray">{text}</span>,
      width: 180,
    },
    {
      title: "Access",
      dataIndex: "access",
      key: "access",
      render: (text) => <span className="font-medium">{text}</span>,
      width: 220,
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <ButtonWithIcon
            icon={ShieldCheck}
            text="Allow"
            className="bg-blue-600 text-white"
            onClick={() => handleActionClick("Allowed", record)}
          />
          <ButtonWithIcon
            icon={ShieldX}
            text="Deny"
            className="bg-white text-red-600"
            onClick={() => handleActionClick("Denied", record)}
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

  // ✅ enable row selection
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys) => setSelectedRowKeys(keys),
  };

  return (
    <>
      {contextHolder}
      <div className="flex items-center justify-between p-5 border-2 border-BorderGray rounded-t-md">
        <h1 className="font-semibold tracking-tighter text-2xl">Access</h1>
        <div className="flex justify-end gap-2 w-1/2">
          <input
            type="text"
            placeholder="Search"
            className="w-64 px-3 py-1.5 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <ButtonWithIcon
            icon={ShieldCheck}
            text="Allow"
            className="bg-blue-600 text-white"
            onClick={() => handleBulkAction("Allowed")}
          />
          <ButtonWithIcon
            icon={ShieldX}
            text="Deny"
            className="bg-white text-red-600"
            onClick={() => handleBulkAction("Denied")}
          />
        </div>
      </div>

      <Table
        className="custom-table"
        rowSelection={rowSelection} // ✅ selection enabled
        columns={columns}
        dataSource={data}
        rowKey="key"
        pagination={{
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20"],
        }}
      />

      <AccessModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        record={selectedRecord}
      />
    </>
  );
}
